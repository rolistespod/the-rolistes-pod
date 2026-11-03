const HTML_ENTITIES: Record<string, string> = {
  amp: "&",
  lt: "<",
  gt: ">",
  quot: '"',
  apos: "'",
  nbsp: " ",
  hellip: "…",
  lsquo: "‘",
  rsquo: "’",
  ldquo: "“",
  rdquo: "”",
  ndash: "–",
  mdash: "—",
};

const decodeEntities = (text: string): string =>
  text.replace(/&(#x[0-9a-f]+|#\d+|[a-z]+);/gi, (match, code: string) => {
    if (code[0] === "#") {
      const isHex = code[1].toLowerCase() === "x";
      return String.fromCodePoint(
        parseInt(code.slice(isHex ? 2 : 1), isHex ? 16 : 10)
      );
    }
    return HTML_ENTITIES[code.toLowerCase()] ?? match;
  });

// Inline tags can start or end mid-word (e.g. "P<a>andemonium</a>"), so they
// are removed without a space; block tags separate words and become a space.
const INLINE_TAGS =
  /<\/?(a|span|strong|b|em|i|u|del|sup|sub|small|mark|abbr|code)\b[^>]*>/gi;

const toPlainText = (html: string): string =>
  decodeEntities(
    html
      .replace(/<!--[\s\S]*?-->/g, " ")
      .replace(INLINE_TAGS, "")
      .replace(/<[^>]+>/g, " ")
      .replace(/\[\/?[a-z_]+[^\]]*\]/gi, " ")
  )
    .replace(/\s+/g, " ")
    .trim();

const firstWords = (text: string, wordLimit: number): string =>
  text.split(" ").slice(0, wordLimit).join(" ");

export const getExcerpt = (content: string, wordLimit: number): string =>
  firstWords(toPlainText(content), wordLimit);

const CALL_TO_ACTION =
  /\b(listen|subscribe|review|download|newsletter|sign up|follow us|youtube channel|twitch)\b/i;

export const getDescription = (content: string, wordLimit: number): string => {
  const sentences = toPlainText(content).split(/(?<=[.!?])\s+/);
  const firstUseful = sentences.findIndex(
    (sentence) => !CALL_TO_ACTION.test(sentence)
  );
  const text =
    firstUseful === -1
      ? sentences.join(" ")
      : sentences.slice(firstUseful).join(" ");

  return firstWords(text, wordLimit);
};
