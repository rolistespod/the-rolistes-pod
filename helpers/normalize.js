export const PODCAST_SERIES = [
  "the-rolistes-podcast",
  "the-rolistes-present",
  "cafe-rolistes",
  "film-studies",
];

const first = (value) => (Array.isArray(value) ? value[0] : value);

const categoriesOf = (post) =>
  (post.category || []).map((category) => category.$.nicename);

export const toSummary = (post) => ({
  id: post.id,
  title: first(post.title),
  date: first(post.pubDate),
  cover: post.cover ?? null,
  url: post.url ?? null,
});

export const toNewsSummary = (post) => ({
  ...toSummary(post),
  excerpt: post.excerpt ?? null,
});

export const toPodcastSummary = (post) => ({
  ...toSummary(post),
  series: categoriesOf(post).filter((c) => PODCAST_SERIES.includes(c)),
});

export const toArticle = (post) => ({
  id: post.id,
  title: first(post.title),
  date: first(post.pubDate),
  content: first(post["content:encoded"]),
});
