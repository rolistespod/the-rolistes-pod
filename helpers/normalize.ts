import { embedYoutubeLinks } from "./youtube";
import type { WithCategories } from "./types";

export const PODCAST_SERIES = [
  "the-rolistes-podcast",
  "the-rolistes-present",
  "cafe-rolistes",
  "film-studies",
];

// Any post of the helpers: the fields are optional, so the page props can be
// built from a post of any section
type PostSource = WithCategories & {
  id: string | number;
  title?: string | string[];
  pubDate?: string | string[];
  "content:encoded"?: string | string[];
  cover?: string | null;
  url?: string | null;
  excerpt?: string | null;
};

const first = <T>(value: T | T[]): T =>
  Array.isArray(value) ? value[0] : value;

const categoriesOf = (post: PostSource): string[] =>
  (post.category || []).map((category) => category.$.nicename);

export const toSummary = (post: PostSource) => ({
  id: post.id,
  title: first(post.title),
  date: first(post.pubDate),
  cover: post.cover ?? null,
  url: post.url ?? null,
});

export const toNewsSummary = (post: PostSource) => ({
  ...toSummary(post),
  excerpt: post.excerpt ?? null,
});

export const toPodcastSummary = (post: PostSource) => ({
  ...toSummary(post),
  series: categoriesOf(post).filter((c) => PODCAST_SERIES.includes(c)),
});

export const toArticle = (post: PostSource) => ({
  id: post.id,
  title: first(post.title),
  date: first(post.pubDate),
  content: first(post["content:encoded"]),
});

// Article rendered by FullPost: YouTube links are turned into players at build time
export const toFullPost = (post: PostSource) => {
  const article = toArticle(post);
  return { ...article, content: embedYoutubeLinks(article.content) };
};
