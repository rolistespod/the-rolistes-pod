import { describe, expect, it } from "vitest";
import {
  fetchPostsHelper,
  getExcerpt,
  replaceOldURL,
  searchLatest,
  searchLatestPodcast,
  searchRecommendedPosts,
} from "./api-util.js";

describe("getExcerpt", () => {
  it("keeps the first words of the plain text", () => {
    expect(getExcerpt("<p>one two three four</p>", 2)).toBe("one two");
  });

  it("joins words split by inline tags and separates blocks", () => {
    expect(
      getExcerpt("<p>P<strong>andemonium</strong> rules</p><p>Next</p>", 10)
    ).toBe("Pandemonium rules Next");
  });

  it("decodes HTML entities", () => {
    expect(getExcerpt("Rock &amp; Roll&#8217;s &hellip;", 10)).toBe(
      "Rock & Roll’s …"
    );
  });

  it("removes comments and WordPress shortcodes", () => {
    expect(
      getExcerpt('<!-- wp:audio -->[audio mp3="ep.mp3"][/audio] Listen now', 10)
    ).toBe("Listen now");
  });
});

describe("replaceOldURL", () => {
  it("turns WordPress links into links of this site", () => {
    expect(
      replaceOldURL('<a href="https://rolistespod.com/2020/1/24/episode">x</a>')
    ).toBe('<a href="/2020/1/24/episode">x</a>');
  });

  it("turns the audio shortcode into a player", () => {
    const html = replaceOldURL('[audio mp3="https://host/ep.mp3"][/audio]');
    expect(html).toContain("<audio controls");
    expect(html).toContain("</audio><br>");
  });

  it("sends a series category to the filtered podcast page", () => {
    expect(
      replaceOldURL(
        '<a href="https://rolistespod.com/category/film-studies/">x</a>'
      )
    ).toBe('<a href="/podcast?cat=film-studies">x</a>');
  });

  it("sends the section categories to their page", () => {
    const page = (category) =>
      replaceOldURL(
        `<a href="https://rolistespod.com/category/${category}/">x</a>`
      );

    expect(page("podcast")).toBe('<a href="/podcast">x</a>');
    expect(page("news")).toBe('<a href="/news">x</a>');
    expect(page("paris-gondo")).toBe('<a href="/paris_gondo">x</a>');
  });

  it("uses the most precise known category of a child category", () => {
    expect(
      replaceOldURL(
        '<a href="https://rolistespod.com/category/podcast/cafe-rolistes/">x</a>'
      )
    ).toBe('<a href="/podcast?cat=cafe-rolistes">x</a>');
  });

  it("sends unknown categories and tags to the podcast list", () => {
    expect(
      replaceOldURL('<a href="https://rolistespod.com/category/london/">x</a>')
    ).toBe('<a href="/podcast">x</a>');
    expect(
      replaceOldURL('<a href="https://rolistespod.com/tag/dnd/">x</a>')
    ).toBe('<a href="/podcast">x</a>');
  });

  it("sends a dated WordPress link to the post's address on this site", () => {
    const siteURLs = new Map([["episode-14", "/2016/10/4/episode-14"]]);

    expect(
      replaceOldURL(
        '<a href="https://rolistespod.com/2016/10/04/episode-14/">x</a>',
        siteURLs
      )
    ).toBe('<a href="/2016/10/4/episode-14">x</a>');
  });

  it("keeps the path of a dated link to an unknown post", () => {
    expect(
      replaceOldURL('<a href="https://rolistespod.com/2016/10/04/gone/">x</a>')
    ).toBe('<a href="/2016/10/04/gone/">x</a>');
  });

  it("rewrites links whatever the attributes before href", () => {
    expect(
      replaceOldURL(
        '<a rel="noopener" href="https://rolistespod.com/news/post">x</a>'
      )
    ).toBe('<a rel="noopener" href="/news/post">x</a>');
  });
});

describe("searchLatest", () => {
  it("returns at most the requested number of posts, the first one as latest", async () => {
    const result = await searchLatest([{ n: 1 }, { n: 2 }, { n: 3 }], 2);

    expect(result).toEqual([
      { n: 1, latest: true, id: 0 },
      { n: 2, latest: false, id: 1 },
    ]);
  });

  it("returns only the existing posts when there are fewer than requested", async () => {
    expect(await searchLatest([{ n: 1 }], 5)).toHaveLength(1);
    expect(await searchLatest([], 5)).toEqual([]);
  });
});

describe("searchLatestPodcast", () => {
  const episode = (name, ...series) => ({
    name,
    category: [{ $: { nicename: "podcast" } }].concat(
      series.map((nicename) => ({ $: { nicename } }))
    ),
  });

  it("returns the latest episode, then the latest of each series", async () => {
    const result = await searchLatestPodcast([
      episode("latest", "cafe-rolistes"),
      episode("cafe", "cafe-rolistes"),
      episode("present", "the-rolistes-present"),
      episode("podcast", "the-rolistes-podcast"),
      episode("film", "film-studies"),
    ]);

    expect(result.map((p) => p.name)).toEqual([
      "latest",
      "podcast",
      "present",
      "cafe",
      "film",
    ]);
  });

  it("leaves out a series without episodes", async () => {
    const result = await searchLatestPodcast([
      episode("latest", "cafe-rolistes"),
      episode("cafe", "cafe-rolistes"),
    ]);

    expect(result.map((p) => p.name)).toEqual(["latest", "cafe"]);
  });

  it("returns nothing when there is no episode", async () => {
    expect(await searchLatestPodcast([])).toEqual([]);
  });
});

describe("fetchPostsHelper", () => {
  const item = ({
    type = "post",
    status = "publish",
    date,
    name,
    categories = [],
    meta = "",
    guid = "",
    content = '<a href="https://rolistespod.com/category/news/">News</a>',
  }) => `
    <item>
      <title>${name}</title>
      ${guid && `<guid isPermaLink="false">${guid}</guid>`}
      <pubDate>${date}</pubDate>
      <content:encoded><![CDATA[${content}]]></content:encoded>
      <wp:post_id>${name}</wp:post_id>
      <wp:post_name>${name}</wp:post_name>
      <wp:post_type>${type}</wp:post_type>
      <wp:status>${status}</wp:status>
      ${categories.map((c) => `<category domain="category" nicename="${c}">${c}</category>`).join("")}
      ${meta}
    </item>`;

  const xml = (...items) => `<?xml version="1.0"?>
    <rss xmlns:content="http://purl.org/rss/1.0/modules/content/" xmlns:wp="http://wordpress.org/export/1.2/">
      <channel>${items.join("")}</channel>
    </rss>`;

  const export_ = xml(
    item({
      type: "attachment",
      status: "inherit",
      date: "Mon, 01 Jan 2024 10:00:00 +0000",
      name: "cover-1",
      guid: "https://rolistespod.com/cover-1.jpg",
    }),
    item({
      date: "Fri, 24 Jan 2020 23:00:15 +0000",
      name: "late-episode",
      categories: ["podcast"],
      meta: "<wp:postmeta><wp:meta_key>_thumbnail_id</wp:meta_key><wp:meta_value>cover-1</wp:meta_value></wp:postmeta>",
    }),
    item({
      date: "Sun, 01 Mar 2020 10:00:00 +0000",
      name: "newer-episode",
      categories: ["podcast"],
      content:
        '<a href="https://rolistespod.com/2020/01/24/late-episode/">Previously</a>',
    }),
    item({
      status: "future",
      date: "Wed, 01 Jan 2120 10:00:00 +0000",
      name: "scheduled",
      categories: ["podcast"],
    }),
    item({
      status: "draft",
      date: "Wed, 01 Jan 2020 10:00:00 +0000",
      name: "draft",
      categories: ["news"],
    }),
    item({
      status: "private",
      date: "Wed, 01 Jan 2020 10:00:00 +0000",
      name: "about-us",
      categories: ["about"],
    })
  );

  it("sorts each section, newest first, and skips drafts and scheduled posts", async () => {
    const { podcast, news, about } = await fetchPostsHelper(export_);

    expect(podcast.map((p) => p["wp:post_name"][0])).toEqual([
      "newer-episode",
      "late-episode",
    ]);
    expect(news).toEqual([]);
    expect(about.map((p) => p["wp:post_name"][0])).toEqual(["about-us"]);
  });

  it("builds the URL and the display date in UTC", async () => {
    const { podcast } = await fetchPostsHelper(export_);
    const late = podcast[1];

    expect(late.url).toBe("/2020/1/24/late-episode");
    expect(late.pubDate).toEqual(["Fri Jan 24 2020"]);
  });

  it("adds the cover and rewrites the old links of the content", async () => {
    const { podcast } = await fetchPostsHelper(export_);

    expect(podcast[1].cover).toBe("https://rolistespod.com/cover-1.jpg");
    expect(podcast[0].cover).toBe("/images/Logo_Nav_Missing.jpg");
    expect(podcast[1]["content:encoded"][0]).toBe('<a href="/news">News</a>');
  });

  it("fixes the dated WordPress links to another episode", async () => {
    const { podcast } = await fetchPostsHelper(export_);

    expect(podcast[0]["content:encoded"][0]).toBe(
      '<a href="/2020/1/24/late-episode">Previously</a>'
    );
  });
});

describe("searchRecommendedPosts", () => {
  const post = (date, ...nicenames) => ({
    pubDate: [date],
    category: nicenames.map((nicename) => ({ $: { nicename } })),
  });

  const current = post(
    "Mon, 01 Jan 2024 10:00:00 +0000",
    "dnd",
    "london",
    "grant-howitt"
  );
  const sameGameOld = post("Sun, 01 Jan 2023 10:00:00 +0000", "dnd");
  const sameGenericTag = post("Wed, 01 Jan 2025 10:00:00 +0000", "london");
  const sameGuest = post("Wed, 01 Jan 2020 10:00:00 +0000", "grant-howitt");
  const sameGameRecent = post("Mon, 01 Apr 2024 10:00:00 +0000", "dnd");
  const posts = [
    current,
    sameGameOld,
    sameGenericTag,
    sameGuest,
    sameGameRecent,
  ];

  it("returns the two best matches, never the post itself", async () => {
    const result = await searchRecommendedPosts(current, posts);

    expect(result).toHaveLength(2);
    expect(result.map((p) => p.id)).toEqual([3, 4]);
  });

  it("weights guests above games, and ignores generic tags", async () => {
    const [first, second] = await searchRecommendedPosts(current, posts);

    expect(first.amountMatchCategories).toBe(4);
    expect(second.amountMatchCategories).toBe(2);
  });

  it("prefers the most recent post when scores are equal", async () => {
    const [, second] = await searchRecommendedPosts(current, posts);

    expect(second.pubDate).toEqual(sameGameRecent.pubDate);
  });
});
