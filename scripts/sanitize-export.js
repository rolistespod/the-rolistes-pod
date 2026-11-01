const fs = require("fs");
const path = require("path");
const xml2js = require("xml2js");

const input = path.resolve(process.argv[2] || "wordpress-export.xml");
const output = path.resolve(process.argv[3] || "data/therolistespodcast.xml");

const PRIVATE_CATEGORIES = [
  "paris-gondo-introduction",
  "about",
  "the-team",
  "downloads",
  "downloads-per-title",
];

const POST_FIELDS = [
  "title",
  "pubDate",
  "dc:creator",
  "guid",
  "content:encoded",
  "wp:post_id",
  "wp:post_name",
  "wp:status",
  "wp:post_type",
  "category",
  "wp:postmeta",
];
const ATTACHMENT_FIELDS = [
  "title",
  "pubDate",
  "guid",
  "wp:post_id",
  "wp:post_name",
  "wp:status",
  "wp:post_type",
];
const POST_META_KEYS = ["_thumbnail_id", "enclosure"];
const CHANNEL_FIELDS = ["title", "link", "description", "language", "item"];

const first = (value) => (Array.isArray(value) ? value[0] : value);
const pick = (obj, keys) =>
  Object.fromEntries(keys.filter((k) => k in obj).map((k) => [k, obj[k]]));
const categoriesOf = (item) =>
  (item.category || []).map((c) => c.$ && c.$.nicename);

const isRendered = (item) => {
  if (first(item["wp:post_type"]) !== "post") return false;
  if (String(first(item["wp:post_password"]) || "").trim()) return false;
  if (!item.category) return false;

  const status = first(item["wp:status"]);
  if (status === "publish" || status === "future") return true;
  if (status === "private") {
    return categoriesOf(item).some((c) => PRIVATE_CATEGORIES.includes(c));
  }
  return false;
};

const thumbnailIdOf = (item) => {
  const meta = (item["wp:postmeta"] || []).find(
    (m) => first(m["wp:meta_key"]) === "_thumbnail_id"
  );
  return meta ? String(first(meta["wp:meta_value"])) : null;
};

const sanitize = (result) => {
  const channel = result.rss.channel[0];
  const items = channel.item || [];

  // Replace author logins with their public display name
  const displayNames = new Map(
    (channel["wp:author"] || []).map((a) => [
      String(first(a["wp:author_login"])),
      String(first(a["wp:author_display_name"])),
    ])
  );

  const posts = items.filter(isRendered).map((item) => {
    const post = pick(item, POST_FIELDS);
    const login = String(first(post["dc:creator"]));
    post["dc:creator"] = [displayNames.get(login) || "The Rolistes"];
    if (post["wp:postmeta"]) {
      post["wp:postmeta"] = post["wp:postmeta"].filter((m) =>
        POST_META_KEYS.includes(first(m["wp:meta_key"]))
      );
    }
    return post;
  });

  const usedThumbnails = new Set(posts.map(thumbnailIdOf).filter(Boolean));
  const attachments = items
    .filter(
      (item) =>
        first(item["wp:post_type"]) === "attachment" &&
        usedThumbnails.has(String(first(item["wp:post_id"])))
    )
    .map((item) => pick(item, ATTACHMENT_FIELDS));

  const keptById = new Map(
    [...posts, ...attachments].map((i) => [first(i["wp:post_id"]), i])
  );
  const orderedItems = items
    .map((i) => first(i["wp:post_id"]))
    .filter((id) => keptById.has(id))
    .map((id) => keptById.get(id));

  return {
    rss: {
      $: result.rss.$,
      channel: [{ ...pick(channel, CHANNEL_FIELDS), item: orderedItems }],
    },
    stats: { total: items.length, posts: posts.length, attachments: attachments.length },
  };
};

const raw = fs.readFileSync(input);
xml2js.parseString(raw, (err, result) => {
  if (err) throw err;

  const { rss, stats } = sanitize(result);
  const xml = new xml2js.Builder({
    cdata: true,
    xmldec: { version: "1.0", encoding: "UTF-8" },
  }).buildObject({ rss });

  fs.writeFileSync(output, xml);
  console.log(
    `Sanitized ${path.basename(input)} -> ${path.basename(output)}: ` +
      `kept ${stats.posts} posts and ${stats.attachments} attachments out of ${stats.total} items`
  );
});
