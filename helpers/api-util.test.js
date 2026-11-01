import { describe, expect, it } from "vitest";
import {
  getExcerpt,
  replaceOldURL,
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

  // Known bug 2.1: the generic replacement runs first, so the category rules never match
  it.fails("sends a series category to the filtered podcast page", () => {
    expect(
      replaceOldURL(
        '<a href="https://rolistespod.com/category/film-studies/">x</a>'
      )
    ).toBe('<a href="/podcast?cat=film-studies">x</a>');
  });

  it.fails("sends the podcast category to the podcast page", () => {
    expect(
      replaceOldURL('<a href="https://rolistespod.com/category/podcast/">x</a>')
    ).toBe('<a href="/podcast?cat=all">x</a>');
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
