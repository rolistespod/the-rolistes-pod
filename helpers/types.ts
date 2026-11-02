// Shape of the WordPress export once parsed by xml2js: every element becomes
// an array of strings, and an element with attributes becomes an object with
// its text in "_" and its attributes in "$".

export type WpCategory = {
  _: string;
  $: { domain: string; nicename: string };
};

// What the helpers read from a category: its slug
export type CategoryRef = { $: { nicename: string } };

export type WithCategories = { category?: CategoryRef[] };

export type WpPostMeta = {
  "wp:meta_key": string[];
  "wp:meta_value": string[];
};

export type WpItem = {
  title: string[];
  pubDate: string[];
  guid?: { _: string }[];
  "content:encoded": string[];
  "wp:post_id": string[];
  "wp:post_name": string[];
  "wp:post_type": string[];
  "wp:status": string[];
  category?: WpCategory[];
  "wp:postmeta"?: WpPostMeta[];
};

export type WpExport = {
  rss: { channel: { item: WpItem[] }[] };
};

// A post of the export, with its display date ("Fri Jan 24 2020"), its
// publication time and its rewritten content
export type Post = WpItem & {
  id: string;
  publishedAt: number;
};

export type PodcastPost = Post & { cover: string; url: string };
export type NewsPost = Post & { cover: string; url: string; excerpt: string };
export type TeamMemberPost = Post & { cover: string };

export type Sections = {
  news: NewsPost[];
  podcast: PodcastPost[];
  games: NewsPost[];
  gondo: NewsPost[];
  comingSoon: Post[];
  introGondo: Post[];
  about: Post[];
  theTeam: TeamMemberPost[];
  downloads: Post[];
  downloadsPerTitle: Post[];
};

export type SectionName = keyof Sections;
