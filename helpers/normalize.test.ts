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

  it("describes the page with the start of its text, without markup", () => {
    const words = Array.from({ length: 40 }, (_, i) => `word${i}`).join(" ");
    const post = toFullPost({
      id: "1",
      "content:encoded": [`<p><strong>Hello</strong> ${words}</p>`],
      cover: "https://host/cover.jpg",
      url: "/2020/1/24/episode",
    });

    expect(post.description.split(" ")).toHaveLength(25);
    expect(post.description.startsWith("Hello word0")).toBe(true);
    expect(post.image).toBe("https://host/cover.jpg");
    expect(post.url).toBe("/2020/1/24/episode");
  });
});
