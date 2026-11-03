import { parseStringPromise } from "xml2js";
import { PODCAST_SERIES } from "./normalize";
import { getExcerpt } from "./text";
import type {
  NewsPost,
  Post,
  SectionName,
  Sections,
  WithCategories,
  WpExport,
  WpItem,
} from "./types";

const missingIMG = "/images/Logo_Nav_Missing.jpg";

const catValue0 = [
  "london",
  "united-kingdom",
  "british",
  "tabletop-rpg",
  "immigrants",
  "gry-fabularne",
  "roolipelaaja",
  "asztali-szerepjatek",
  "roolipeli",
  "fandoms",
  "joc-de-rol",
  "rollenspiel",
  "rollenspel",
  "jogo-de-interpretacao",
  "jugador-de-rol",
  "juego-de-rol",
  "%ed%85%8c%ec%9d%b4%eb%b8%94%ed%83%91-%eb%a1%a4%ed%94%8c%eb%a0%88%ec%9e%89-%ea%b2%8c%ec%9e%84",
  "gioco-di-ruolo",
  "bordrollespil",
  "rpg-de-mesa",
  "rollspel",
  "stolna-igra-uloga",
  "friki",
  "ropettaja",
  "jeu-de-role",
  "Geek",
  "Expats",
  "%e6%a1%8c%e4%b8%8a%e8%a7%92%e8%89%b2%e6%89%ae%e6%bc%94%e9%81%8a%e6%88%b2",
  "%e3%83%86%e3%83%bc%e3%83%96%e3%83%ab%e3%83%88%e3%83%bc%e3%82%afrpg",
  "pnp",
  "pen-and-paper",
];
const catValue2 = [
  "Nephilim",
  "dungeons_dragons",
  "dungeons_and_dragons",
  "in_nomine_satanis",
  "ins-mv",
  "nibiru",
  "dnd",
  "pathfinder",
  "star_trek",
  "2d20",
  "call_of_cthulhu",
  "cthulhu_dark",
  "13th_age",
  "tales_from_the_loop",
  "symbaroum",
  "aquelarre",
  "guildes-eldorado",
  "star-wars",
  "james-bond",
  "a-song-of-ice-and-fire",
  "shadows-of-esteren",
  "dr-who",
  "cthulhu-britanica",
  "runequest",
  "glorantha",
  "heroquest",
];
const catValue3 = [
  "phoenix-games-club",
  "role-play-haven",
  "free-league-publishing",
  "paizo",
  "rowan-rook-decard",
  "pelgrane-press",
  "fria-ligan",
  "chaosium",
  "modiphius",
  "london-rpg-community",
  "no-more-damsels",
  "monte-cook-games",
  "guilde-des-rolistes-francophones-de-londres",
  "multisim",
  "london-indie-rpg",
  "cubicle-7",
  "the-formal-gamer",
  "critical-role",
  "wotan-games",
  "faraos-sigarer",
  "wizards-of-the-coast",
  "the-grognard-files",
  "supaéro",
];
const catValue4 = [
  "july",
  "lee",
  "gully",
  "mira",
  "lloyd-gyan",
  "grant-howitt",
  "kat",
  "persephelia",
  "bec-hill",
  "sam-webb",
  "garry-harper",
  "virginia-page",
  "dan-marriott",
  "allan-cudicio",
  "zaire-lanier",
  "diogo-nogueira",
  "craig-campbel",
  "pam-punzalan",
  "anjuli-smith",
  "michaël-ghelfi",
  "gaël-sacré",
  "sean-hunt",
  "craig-duffy",
  "mira-manga",
  "dominic-mcdowall",
  "dirk-the-dice",
  "chris-spivey",
  "amit-moshe",
  "guillaume-jentey",
  "kiel-chenier",
  "chris-birch",
  "aimee-carter",
  "andrew-peregrine",
  "jason-bulmahn",
  "jevin-lovecraft",
  "joao-mariano",
  "mikel-matthews",
  "eric-nieudan",
  "dimitris-r-havlidis",
  "janet-forbes",
  "erik-bernhardt",
  "krister-sundelin",
  "rupert-greyling",
  "sara-thompson",
  "paco-g-jaen",
  "helen-gould",
  "willem-van-der-horst",
  "willem",
  "david-scott",
  "ian-cooper",
  "naomi-clarke",
  "robin-d-laws",
  "monte-cook",
  "alessio-cavatore",
  "mattias-johnsson",
  "federico-sohns",
  "james-wallis",
  "scott-brown",
  "ellie-sparrow",
  "richard-kirke",
  "conrad-leaton-gray",
  "amanda-hamon-kunz",
  "kat-cowles",
  "kenneth-hite",
  "fiona-howat",
  "dany-roth",
  "todd-nathanson",
  "brian-wayne-foster",
  "liam-obrien",
  "marisha-ray",
  "sam-riegel",
  "becky-annison",
  "lynne-hardy",
  "cat-tobin",
  "jason-pitre",
  "christopher-taylor",
  "ruty-rutenberg",
  "satine-phoenix",
  "tom-cantwell",
  "michael-ross",
  "cany",
  "kundin",
  "haqadosch",
  "kanard",
  "james",
  "federica",
  "nelyhann",
  "porter-williams",
  "oliver-brooks",
  "andrew-dacey",
  "aora",
  "rae",
  "nala",
  "fouc",
];
const catValue5 = [
  "so-frenchy",
  "paris",
  "barcelona",
  "copenhague",
  "washington-dc",
  "dragonmeet",
  "uk-games-expo",
  "ukge",
  "grogmeet",
  "session-zero-con",
  "cyberconv",
  "florence",
  "italy",
  "portugal",
  "spain",
  "out-at-the-movies",
  "london-rpg-clubs",
  "actual-play",
  "convention",
  "horror-movie",
  "halloween",
  "rpg-club",
  "rolistes-abroad",
  "food",
  "larp",
];

const getAttachmentURL = (attachments: WpItem[], post: WpItem): string => {
  const thumbnailId = post["wp:postmeta"]?.findLast(
    (meta) => meta["wp:meta_key"][0] === "_thumbnail_id"
  )?.["wp:meta_value"][0];

  const attachment = attachments.find(
    (item) => item["wp:post_id"][0] === thumbnailId
  );

  return attachment?.guid?.[0]._ || missingIMG;
};

const getURL = (post: Post, category: "news" | "podcast"): string => {
  // In UTC, so the URL does not depend on the timezone of the machine building it
  const tempDate = new Date(post.publishedAt);
  const year = tempDate.getUTCFullYear();
  const month = tempDate.getUTCMonth() + 1;
  const day = tempDate.getUTCDate();
  const postName = post["wp:post_name"][0];

  switch (category) {
    case "news":
      return "/news/" + postName;

    case "podcast":
      return "/" + year + "/" + month + "/" + day + "/" + postName;
  }
};

const CATEGORY_PAGES: Record<string, string> = {
  podcast: "/podcast",
  news: "/news",
  "paris-gondo": "/paris_gondo",
  "our-games": "/paris_gondo",
  our_games: "/paris_gondo",
  ...Object.fromEntries(
    PODCAST_SERIES.map((series) => [series, `/podcast?cat=${series}`])
  ),
};

const OLD_SITE_LINK = /href="https:\/\/rolistespod\.com(\/[^"]*)?"/g;

const toSitePath = (path = "/", siteURLs: Map<string, string>): string => {
  const [type, ...names] = path.split("/").filter(Boolean);

  if (type === "category") {
    const known = names.reverse().find((name) => name in CATEGORY_PAGES);
    return known ? CATEGORY_PAGES[known] : "/podcast";
  }
  if (type === "tag") return "/podcast";

  const siteURL = /^\d{4}$/.test(type) ? siteURLs.get(names[2]) : undefined;

  return siteURL ?? path;
};

export const replaceOldURL = (
  post: string,
  siteURLs = new Map<string, string>()
): string =>
  post
    .replace(/\[audio/, "<audio controls")
    .replace(/mp3\"\]/, 'mp3"></audio><br>')
    .replace(
      OLD_SITE_LINK,
      (match, path?: string) => `href="${toSitePath(path, siteURLs)}"`
    );

// Day of publication as shown on the site, e.g. "Fri Jan 24 2020". It is taken
// in UTC like the URLs, so it does not depend on the machine building the site.
const toDisplayDate = (date: Date): string =>
  new Date(
    Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate(), 12)
  ).toDateString();

const isPublished = (post: Post, now: number): boolean =>
  post["wp:status"][0] === "publish" ||
  (post["wp:status"][0] === "future" && now > post.publishedAt);

const byNewestFirst = (a: Post, b: Post): number =>
  b.publishedAt - a.publishedAt;

const PUBLIC_SECTIONS: Record<string, SectionName> = {
  news: "news",
  podcast: "podcast",
  "our-games": "games",
  "paris-gondo": "gondo",
  "coming-soon": "comingSoon",
};

const PRIVATE_SECTIONS: Record<string, SectionName> = {
  "paris-gondo-introduction": "introGondo",
  about: "about",
  "the-team": "theTeam",
  downloads: "downloads",
  "downloads-per-title": "downloadsPerTitle",
};

const SECTIONS_BY_DATE: SectionName[] = [
  "news",
  "podcast",
  "games",
  "gondo",
  "introGondo",
  "comingSoon",
];

const sectionFields = (
  section: SectionName,
  post: Post,
  attachments: WpItem[]
): Partial<NewsPost> => {
  switch (section) {
    case "news":
    case "games":
    case "gondo":
      return {
        cover: getAttachmentURL(attachments, post),
        url: getURL(post, "news"),
        excerpt: getExcerpt(post["content:encoded"][0], 40),
      };
    case "podcast":
      return {
        cover: getAttachmentURL(attachments, post),
        url: getURL(post, "podcast"),
      };
    case "theTeam":
      return { cover: getAttachmentURL(attachments, post) };
    default:
      return {};
  }
};

export async function fetchPostsHelper(
  xml: string | Buffer
): Promise<Sections> {
  const result: WpExport = await parseStringPromise(xml);
  const items = result.rss.channel[0].item;

  const attachments = items.filter(
    (item) => item["wp:post_type"][0] === "attachment"
  );

  const posts = items
    .filter((item) => item["wp:post_type"][0] !== "attachment")
    .map((item, index): Post => {
      const publishDate = new Date(item.pubDate[0]);
      return {
        ...item,
        pubDate: [toDisplayDate(publishDate)],
        publishedAt: publishDate.getTime(),
        id: String(index),
      };
    });

  const now = Date.now();

  const siteURLs = new Map<string, string>();
  for (const post of posts) {
    if (!post.category || !isPublished(post, now)) continue;

    const postSections = nicenamesOf(post).map((name) => PUBLIC_SECTIONS[name]);
    if (postSections.includes("podcast")) {
      siteURLs.set(post["wp:post_name"][0], getURL(post, "podcast"));
    } else if (
      postSections.some((s) => ["news", "games", "gondo"].includes(s))
    ) {
      siteURLs.set(post["wp:post_name"][0], getURL(post, "news"));
    }
  }

  for (const post of posts) {
    post["content:encoded"] = [
      replaceOldURL(post["content:encoded"][0], siteURLs),
    ];
  }

  const sections = Object.fromEntries(
    [...Object.values(PUBLIC_SECTIONS), ...Object.values(PRIVATE_SECTIONS)].map(
      (section) => [section, []]
    )
  ) as unknown as Record<SectionName, Post[]>;

  for (const post of posts) {
    if (!post.category) continue;

    let sectionsOfPost: Record<string, SectionName> = {};
    if (isPublished(post, now)) sectionsOfPost = PUBLIC_SECTIONS;
    else if (post["wp:status"][0] === "private")
      sectionsOfPost = PRIVATE_SECTIONS;

    for (const nicename of nicenamesOf(post)) {
      const section = sectionsOfPost[nicename];
      if (section) {
        sections[section].push({
          ...post,
          ...sectionFields(section, post, attachments),
        });
      }
    }
  }

  for (const section of SECTIONS_BY_DATE) {
    sections[section].sort(byNewestFirst);
  }

  return sections as Sections;
}

export async function searchPost(
  posts: WpItem[],
  pageTitle: string
): Promise<number | undefined> {
  const index = posts.findIndex(
    (post) => post["wp:post_name"][0] === pageTitle
  );
  return index === -1 ? undefined : index;
}

export async function searchLatest<T extends object>(
  posts: T[],
  amountToReturn: number
): Promise<(T & { latest: boolean; id: number })[]> {
  return posts.slice(0, amountToReturn).map((post, i) => ({
    ...post,
    latest: i === 0,
    id: i,
  }));
}

export async function searchPostsBasedOnCategory<T extends WithCategories>(
  posts: T[],
  category: string
): Promise<T[]> {
  return posts.filter((post) => nicenamesOf(post).includes(category));
}

const DEFAULT_CATEGORY_WEIGHT = 1;
const CATEGORY_WEIGHTS = new Map<string, number>(
  (
    [
      [catValue0, 0],
      [catValue2, 2],
      [catValue3, 3],
      [catValue4, 4],
      [catValue5, 5],
    ] as const
  ).flatMap(([categories, weight]) =>
    categories.map((category): [string, number] => [category, weight])
  )
);

const getValueCategory = (category: string): number =>
  CATEGORY_WEIGHTS.get(category) ?? DEFAULT_CATEGORY_WEIGHT;

const nicenamesOf = (post: WithCategories): string[] =>
  (post.category ?? []).map((category) => category.$.nicename);

export async function searchRecommendedPosts<
  T extends WithCategories & { pubDate: string[] },
>(
  postToRead: WithCategories,
  posts: T[]
): Promise<(T & { amountMatchCategories: number; id: number })[]> {
  
  const currentCategories = new Map<string, number>();
  for (const name of nicenamesOf(postToRead)) {
    currentCategories.set(name, (currentCategories.get(name) ?? 0) + 1);
  }

  const scored: { post: T; score: number; id: number }[] = [];
  posts.forEach((post, i) => {
    if (post === postToRead) return;

    let score = 0;
    for (const name of nicenamesOf(post)) {
      score += (currentCategories.get(name) ?? 0) * getValueCategory(name);
    }
    scored.push({ post, score, id: i });
  });

  scored.sort(
    (a, b) =>
      b.score - a.score ||
      Date.parse(b.post.pubDate[0]) - Date.parse(a.post.pubDate[0])
  );

  return scored.slice(0, 2).map(({ post, score, id }) => ({
    ...post,
    amountMatchCategories: score,
    id,
  }));
}

export async function searchLatestPodcast<T extends WithCategories>(
  posts: T[]
): Promise<(T & { latest: boolean; id: number })[]> {
  if (posts.length === 0) return [];

  const [latest, ...others] = posts;
  const latestOfEachSeries = PODCAST_SERIES.map((series) =>
    others.find((post) => nicenamesOf(post).includes(series))
  ).filter((post): post is T => post !== undefined);

  return [latest, ...latestOfEachSeries].map((post, i) => ({
    ...post,
    latest: true,
    id: i,
  }));
}
