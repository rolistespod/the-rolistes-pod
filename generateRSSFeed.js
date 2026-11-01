const toRssXML = (posts) => {
  const latestPostDate = posts[0]["pubDate"];

  let postXml = "";

  posts.forEach((post) => {
    // const href = `https://www.slashproto.com/posts/${post.slug}`;
    // const href = `https://www.slashproto.com/posts/`;

    let postCategories = "";

    post.categories.forEach((category) => {
      postCategories += `
            <category><![CDATA[${category["_"]}]]></category>`;
    });

    postXml +=
      `
        <item>
            <title><![CDATA[${post.title}]]></title>
            <link>${post.link}</link>
            <pubDate>${post.pubDate}</pubDate>${postCategories}
            <guid isPermaLink="false">${post.guid}</guid>
            <description>
            <![CDATA[ ${post.description} ]]>
            </description>

            <enclosure url="${post.enclosure}" length="0" type="audio/mpeg" />` +
      // <itunes:author>${post.itunesAuthor}</itunes:author>
      // <itunes:explicit>no</itunes:explicit>
      // <itunes:image href="${post.itunesImage}" />
      // <itunes:summary>${post.itunesSummary}</itunes:summary>
      // <itunes:subtitle>${post.itunesSubtitle}</itunes:subtitle>

      `<media:thumbnail url="${post.mediaThumbnail}" />
		        <media:content url="${post.mediaThumbnailContent}" medium="image">
			<media:title type="html">${post.mediaThumbnailTitle}</media:title>
		    </media:content>

		    <media:content url="${post.mediaAuthorContent}" medium="image">
			    <media:title type="html">${post.mediaAuthorTitle}</media:title>
		    </media:content>

		<media:content url="${post.mediaAudioContent}" medium="audio" />

        </item>`;
  });

  return (
    `<?xml version="1.0" encoding="UTF-8"?><rss version="2.0"
	xmlns:content="http://purl.org/rss/1.0/modules/content/"
	xmlns:wfw="http://wellformedweb.org/CommentAPI/"
	xmlns:dc="http://purl.org/dc/elements/1.1/"
	xmlns:atom="http://www.w3.org/2005/Atom"
	xmlns:sy="http://purl.org/rss/1.0/modules/syndication/"
	xmlns:slash="http://purl.org/rss/1.0/modules/slash/"
	xmlns:georss="http://www.georss.org/georss" xmlns:geo="http://www.w3.org/2003/01/geo/wgs84_pos#" 
	xmlns:itunes="http://www.itunes.com/dtds/podcast-1.0.dtd"
    xmlns:media="http://search.yahoo.com/mrss/"
    >
    
        <channel>
            <title>The Rolistes Podcast</title>
            <atom:link href="https://rolistespod.com/" rel="self" type="application/rss+xml" />
            <link>https://rolistespod.com/</link>
            <description>Welcome among The Rolistes…

We are the proudly London-based producers of Tabletop RPG podcasts showcasing fans across the Channel, the Pond and beyond.

We cross borders, languages, fandoms, game systems and settings with unique discoveries in each episode. 

Join us for a mix of discussions, RPG actual plays, travel-diaries, vox-populi, movie reviews, and even music by amazing Creative Commons artists. 

Meet independent game designers, popular British publishers, immigrants, travellers visiting London or other random encounters made during our travels.

Our content is for YOU, no matter if you are a seasoned grognard or wannabe players who are about to take their first steps in The Hobby. 

We are for those curious about what and how tabletop roleplaying games are played across the World, how players can have wildly different walks of life and interests can be.</description>
            <lastBuildDate>${latestPostDate}</lastBuildDate>            
            <language>en</language>
            <sy:updatePeriod>
	        hourly	</sy:updatePeriod>
	        <sy:updateFrequency>
            1	</sy:updateFrequency>` +
    `${postXml}
        </channel>
    </rss>`
  );
};

const getAttachment = (attachments, postMeta) => {
  let attachmentId = null;

  for (let metaKey in postMeta["wp:postmeta"]) {
    if (
      postMeta["wp:postmeta"][metaKey]["wp:meta_key"][0] === "_thumbnail_id"
    ) {
      attachmentId = postMeta["wp:postmeta"][metaKey]["wp:meta_value"][0];
    }
  }

  for (let key in attachments) {
    if (attachments[key]["wp:post_id"][0] === attachmentId) {
      return attachments[key];
    }
  }

  return "";
};

const getEnclosureURL = (postMeta) => {
  for (let metaKey in postMeta["wp:postmeta"]) {
    if (postMeta["wp:postmeta"][metaKey]["wp:meta_key"][0] === "enclosure") {
      let url = postMeta["wp:postmeta"][metaKey]["wp:meta_value"][0];
      url = url.substring(0, url.lastIndexOf(".mp3") + 4);
      return url;
    }
  }

  return "";
};

// Podcast apps identify episodes by their guid, so it must never change.
// Guids were historically built from the date in Paris time, which differs
// from the UTC date of the link for episodes published late in the evening.
const getLegacyGuid = (date, postName) => {
  const parts = new Intl.DateTimeFormat("en-GB", {
    timeZone: "Europe/Paris",
    year: "numeric",
    month: "numeric",
    day: "numeric",
  }).formatToParts(date);
  const part = (type) =>
    Number(parts.find((p) => p.type === type).value);

  return (
    "https://rolistespod.com/" +
    part("year") +
    "/" +
    part("month") +
    "/" +
    part("day") +
    "/" +
    postName
  );
};

const cleanDescription = (content, link, title) => {
  let filter = content.replace(/\[audio/, "<audio controls");
  filter = filter.replace(/mp3\"\]/, 'mp3"></audio><br>');

  filter = filter.replace(/(<([^>]+)>)/gi, "");
  filter = filter.replace(/\s+/g, " ");
  const wordsarr = filter.split(" ");
  const wordLimit = 60;

  if (wordsarr.length < wordLimit) {
    return content;
  } else {
    let excerpt = "";

    for (let i = 0; i < wordLimit; i++) {
      excerpt = excerpt + " " + wordsarr[i];
    }
    excerpt =
      excerpt +
      "... <a href=" +
      link +
      ' class="more-link">Continue reading <span class="screen-reader-text">' +
      title +
      "</span></a>";

    return excerpt;
  }
};

const getPosts = () => {
  const fetchedPodcast = [];

  const fs = require("fs");
  const path = require("path");
  const data = fs.readFileSync(
    path.join(process.cwd(), "therolistespodcast.xml")
  );

  const parseString = require("xml2js").parseString;

  parseString(data, (err, result) => {
    const fetchedAttachment = [];
    const limitAmountPost = 150;

    for (let key in result["rss"]["channel"][0]["item"]) {
      if (
        result["rss"]["channel"][0]["item"][key]["wp:post_type"][0] ===
        "attachment"
      ) {
        fetchedAttachment.push({
          ...result["rss"]["channel"][0]["item"][key],
          id: key,
        });
      }
    }

    for (let key in result["rss"]["channel"][0]["item"]) {
      const fetchedPost = result["rss"]["channel"][0]["item"][key];
      const currentDate = new Date();
      const publishDate = new Date(fetchedPost["pubDate"][0]);

      if (
        fetchedPost["category"] &&
        (fetchedPost["wp:status"][0] === "publish" ||
          (fetchedPost["wp:status"][0] === "future" &&
            currentDate.getTime() > publishDate.getTime()))
      ) {
        for (let i = 0; i < fetchedPost["category"].length; i++) {
          switch (fetchedPost["category"][i]["$"]["nicename"]) {
            case "podcast":
              const attachment = getAttachment(fetchedAttachment, fetchedPost);
              const title = fetchedPost["title"];
              // In UTC, to match the page URLs built by getURL in api-util.js
              const tempDate = new Date(fetchedPost["pubDate"][0]);
              const year = tempDate.getUTCFullYear();
              const month = tempDate.getUTCMonth() + 1;
              const day = tempDate.getUTCDate();
              const link =
                "https://rolistespod.com/" +
                year +
                "/" +
                month +
                "/" +
                day +
                "/" +
                fetchedPost["wp:post_name"][0];
              const pubDate = fetchedPost["pubDate"][0];
              const categories = fetchedPost["category"];
              const guid = getLegacyGuid(tempDate, fetchedPost["wp:post_name"][0]);

              const description = cleanDescription(
                fetchedPost["content:encoded"][0],
                link,
                title
              );

              const enclosure = getEnclosureURL(fetchedPost);
              const mediaThumbnail = attachment["guid"][0]["_"];
              const mediaThumbnailContent = attachment["guid"][0]["_"];
              const mediaThumbnailTitle = attachment["wp:post_name"][0];
              const mediaAuthorContent =
                "https://2.gravatar.com/avatar/e25822b2ed220131f32139e2f1797c71?s=96&#38;d=identicon&#38;r=G";
              const mediaAuthorTitle = "rolistespod";
              const mediaAudioContent = enclosure;

              fetchedPodcast.push({
                title: title,
                link: link,
                pubDate: pubDate,
                categories: categories,
                guid: guid,
                description: description,
                enclosure: enclosure,
                mediaThumbnail: mediaThumbnail,
                mediaThumbnailContent: mediaThumbnailContent,
                mediaThumbnailTitle: mediaThumbnailTitle,
                mediaAuthorContent: mediaAuthorContent,
                mediaAuthorTitle: mediaAuthorTitle,
                mediaAudioContent: mediaAudioContent,
                id: key,
              });

              break;
          }
        }
      }
    }

    fetchedPodcast.sort((a, b) => {
      return new Date(b.pubDate) - new Date(a.pubDate);
    });

    fetchedPodcast.splice(limitAmountPost);

    const xml = toRssXML(fetchedPodcast);
    fs.writeFileSync("./public/rss.xml", xml);
  });
};

getPosts();
