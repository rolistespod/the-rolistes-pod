import { describe, expect, it } from "vitest";
import { embedYoutubeLinks } from "./youtube";

describe("embedYoutubeLinks", () => {
  it("leaves empty content and content without video unchanged", () => {
    expect(embedYoutubeLinks(null)).toBe(null);
    expect(embedYoutubeLinks("<p>No video</p>")).toBe("<p>No video</p>");
  });

  it("replaces a short YouTube URL with a player", () => {
    const html = embedYoutubeLinks("<p>https://youtu.be/abc123</p>");

    expect(html).toContain(
      '<iframe  src="https://www.youtube.com/embed/abc123"'
    );
    expect(html).not.toContain("https://youtu.be/abc123");
  });

  it("keeps only the video id of a long URL", () => {
    const html = embedYoutubeLinks(
      "<p>https://www.youtube.com/watch?v=XYZ789&t=10</p>"
    );

    expect(html).toContain('src="https://www.youtube.com/embed/XYZ789"');
  });

  it("leaves YouTube URLs inside links as links", () => {
    const html = '<p><a href="https://youtu.be/abc123">Watch it</a></p>';

    expect(embedYoutubeLinks(html)).toBe(html);
  });
});
