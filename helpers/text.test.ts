import { describe, expect, it } from "vitest";
import { getDescription, getExcerpt } from "./text";

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

describe("getDescription", () => {
  it("skips the opening calls to action", () => {
    expect(
      getDescription(
        "<p>Listen, subscribe &amp; review on Apple Podcasts. Sign up to our newsletter!</p><p>This time we meet Kat. She runs games.</p>",
        5
      )
    ).toBe("This time we meet Kat.");
  });

  it("keeps a call to action that comes after the subject", () => {
    expect(getDescription("<p>We meet Kat. Listen to the end!</p>", 10)).toBe(
      "We meet Kat. Listen to the end!"
    );
  });

  it("keeps the text when it only has calls to action", () => {
    expect(getDescription("<p>Listen on Spotify.</p>", 10)).toBe(
      "Listen on Spotify."
    );
  });
});
