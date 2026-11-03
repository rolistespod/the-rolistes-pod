import { getDescription } from "./text";
import { embedYoutubeLinks } from "./youtube";
import type { WithCategories } from "./types";

export const PODCAST_SERIES = [
  "the-rolistes-podcast",
  "the-rolistes-present",
  "cafe-rolistes",
  "film-studies",
];

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

const DESCRIPTION_WORDS = 25;

export const toFullPost = (post: PostSource) => {
  const article = toArticle(post);
  return {
    ...article,
    content: embedYoutubeLinks(article.content),
    description: getDescription(article.content ?? "", DESCRIPTION_WORDS),
    image: post.cover ?? null,
    url: post.url ?? null,
  };
};

export type Summary = ReturnType<typeof toSummary>;
export type PodcastSummary = ReturnType<typeof toPodcastSummary>;
export type FullPost = ReturnType<typeof toFullPost>;
