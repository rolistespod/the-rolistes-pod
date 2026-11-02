import { describe, expect, it } from "vitest";
import { toFullPost, toPodcastSummary, toSummary } from "./normalize";

const category = (nicename: string) => ({ $: { nicename } });

describe("toSummary", () => {
  it("unwraps the xml2js arrays and defaults missing fields to null", () => {
    expect(toSummary({ id: "7", title: ["Title"], pubDate: ["Date"] })).toEqual(
      {
        id: "7",
        title: "Title",
        date: "Date",
        cover: null,
        url: null,
      }
    );
  });
});

describe("toPodcastSummary", () => {
  it("keeps only the podcast series among the categories", () => {
    const summary = toPodcastSummary({
      id: "1",
      title: ["Episode"],
      pubDate: ["Date"],
      category: [
        category("cafe-rolistes"),
        category("london"),
        category("podcast"),
      ],
    });

    expect(summary.series).toEqual(["cafe-rolistes"]);
  });

  it("handles a post without categories", () => {
    expect(toPodcastSummary({ id: "1" }).series).toEqual([]);
  });
});

describe("toFullPost", () => {
  it("embeds the YouTube videos of the content", () => {
    const post = toFullPost({
      id: "1",
      title: ["Episode"],
      pubDate: ["Date"],
      "content:encoded": ["<p>https://youtu.be/abc123</p>"],
    });

    expect(post.content).toContain("https://www.youtube.com/embed/abc123");
  });
});
