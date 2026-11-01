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
  "persephelia",
  "federica",
  "nelyhann",
  "porter-williams",
  "oliver-brooks",
  "andrew-dacey",
  "dominic-mcdowall",
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
  "london-rpg-clubs",
  "food",
  "larp",
];

const getAttachmentURL = (attachments, postMeta) => {
  let attachmentId = 0;

  for (let metaKey in postMeta["wp:postmeta"]) {
    if (
      postMeta["wp:postmeta"][metaKey]["wp:meta_key"][0] === "_thumbnail_id"
    ) {
      attachmentId = postMeta["wp:postmeta"][metaKey]["wp:meta_value"][0];
    }
  }

  for (let key in attachments) {
    if (attachments[key]["wp:post_id"][0] == attachmentId) {
      if (attachments[key]["guid"][0]["_"]) {
        return attachments[key]["guid"][0]["_"];
      }
    }
  }

  return missingIMG;
};

const getURL = (post, category) => {
  // In UTC, so the URL does not depend on the timezone of the machine building it
  const tempDate = new Date(post["pubDate"][0]);
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
  return "";
};

const replaceOldURL = (post) => {
  const baseURL = 'href="';

  let str = post;
  let newStr = str.replace(/\[audio/, "<audio controls");
  newStr = newStr.replace(/mp3\"\]/, 'mp3"></audio><br>');
  newStr = newStr.replaceAll(
    '<a href="https://rolistespod.com',
    "<a " + baseURL
  );
  newStr = newStr.replaceAll(
    '<a href="https://rolistespod.com/category/film-studies/',
    "<a " + baseURL + '/podcast?cat=film-studies"'
  );
  newStr = newStr.replaceAll(
    '<a href="https://rolistespod.com/category/the-rolistes-present/',
    "<a " + baseURL + '/podcast?cat=the-rolistes-present"'
  );
  newStr = newStr.replaceAll(
    '<a href="https://rolistespod.com/category/cafe-rolistes/',
    "<a " + baseURL + "/podcast?cat=cafe-rolistes"
  );
  newStr = newStr.replaceAll(
    '<a href="https://rolistespod.com/category/the-rolistes-podcast/',
    "<a " + baseURL + '/podcast?cat=the-rolistes-podcast"'
  );
  newStr = newStr.replaceAll(
    '<a href="https://rolistespod.com/category/podcast/',
    "<a " + baseURL + '/podcas?cat=all"'
  );
  newStr = newStr.replaceAll(
    '<a href="https://rolistespod.com/category/news/',
    "<a " + baseURL + '/news"'
  );
  newStr = newStr.replaceAll(
    '<a href="https://rolistespod.com/category/our_games/',
    "<a " + baseURL + '/our_games"'
  );

  return newStr;
};

const HTML_ENTITIES = {
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

const decodeEntities = (text) =>
  text.replace(/&(#x[0-9a-f]+|#\d+|[a-z]+);/gi, (match, code) => {
    if (code[0] === "#") {
      const isHex = code[1].toLowerCase() === "x";
      return String.fromCodePoint(parseInt(code.slice(isHex ? 2 : 1), isHex ? 16 : 10));
    }
    return HTML_ENTITIES[code.toLowerCase()] ?? match;
  });

// Inline tags can start or end mid-word (e.g. "P<a>andemonium</a>"), so they
// are removed without a space; block tags separate words and become a space.
const INLINE_TAGS = /<\/?(a|span|strong|b|em|i|u|del|sup|sub|small|mark|abbr|code)\b[^>]*>/gi;

// The excerpt is rendered as text, so it must never contain markup
const toPlainText = (html) =>
  decodeEntities(
    html
      .replace(/<!--[\s\S]*?-->/g, " ")
      .replace(INLINE_TAGS, "")
      .replace(/<[^>]+>/g, " ")
      .replace(/\[\/?[a-z_]+[^\]]*\]/gi, " ")
  )
    .replace(/\s+/g, " ")
    .trim();

const getExcerpt = (content, wordLimit) =>
  toPlainText(content).split(" ").slice(0, wordLimit).join(" ");

export async function fetchPostsHelper(dataToProcess) {
  const fetchedPosts = [];
  const fetchedAttachment = [];
  const fetchedNews = [];
  const fetchedPodcast = [];
  const fetchedGames = [];
  const fetchedGondo = []; //ICI POUR MODIFIER
  const fetchedIntroGondo = []; //ICI POUR MODIFIER
  const fetchedAbout = [];
  const fetchedTheTeam = [];
  const fetchedDL = [];
  const fetchedDLTitle = [];
  const fetchedComingSoon = [];

  const parseString = require("xml2js").parseString;
  const data = dataToProcess;

  parseString(data, (err, result) => {
    for (let key in result["rss"]["channel"][0]["item"]) {
      if (
        result["rss"]["channel"][0]["item"][key]["wp:post_type"][0] ===
        "attachment"
      ) {
        fetchedAttachment.push({
          ...result["rss"]["channel"][0]["item"][key],
          id: key,
        });
      } else {
        fetchedPosts.push({
          ...result["rss"]["channel"][0]["item"][key],
          id: key,
        });
      }
    }

    for (let key in fetchedPosts) {
      const currentDate = new Date();
      const publishDate = new Date(fetchedPosts[key]["pubDate"][0]);

      fetchedPosts[key]["pubDate"][0] = publishDate.toDateString();

      const newStr = replaceOldURL(fetchedPosts[key]["content:encoded"][0]);
      fetchedPosts[key]["content:encoded"][0] = newStr;

      if (
        fetchedPosts[key]["category"] &&
        (fetchedPosts[key]["wp:status"][0] === "publish" ||
          (fetchedPosts[key]["wp:status"][0] === "future" &&
            currentDate.getTime() > publishDate.getTime()))
      ) {
        const attachmentURL = getAttachmentURL(
          fetchedAttachment,
          fetchedPosts[key]
        );

        for (let i = 0; i < fetchedPosts[key]["category"].length; i++) {
          switch (fetchedPosts[key]["category"][i]["$"]["nicename"]) {
            case "news":
              const excerptNews = getExcerpt(
                fetchedPosts[key]["content:encoded"][0],
                40
              );
              const newsURL = getURL(fetchedPosts[key], "news");
              fetchedNews.push({
                ...fetchedPosts[key],
                cover: attachmentURL,
                url: newsURL,
                excerpt: excerptNews,
                id: key,
              });
              break;

            case "podcast":
              const podcastURL = getURL(fetchedPosts[key], "podcast");
              fetchedPodcast.push({
                ...fetchedPosts[key],
                cover: attachmentURL,
                url: podcastURL,
                id: key,
              });
              break;

            case "our-games": //ICI POUR MODIFIER
              const excerptGames = getExcerpt(
                fetchedPosts[key]["content:encoded"][0],
                40
              );
              const gamesURL = getURL(fetchedPosts[key], "news");
              fetchedGames.push({
                ...fetchedPosts[key],
                cover: attachmentURL,
                url: gamesURL,
                excerpt: excerptGames,
                id: key,
              });
              break;


            case "paris-gondo": //ICI POUR MODIFIER
              const excerptGondo = getExcerpt(
                fetchedPosts[key]["content:encoded"][0],
                40
              );
              const gondoURL = getURL(fetchedPosts[key], "news");
              fetchedGondo.push({
                ...fetchedPosts[key],
                cover: attachmentURL,
                url: gondoURL,
                excerpt: excerptGondo,
                id: key,
              });
              break;

            case "coming-soon":
              fetchedComingSoon.push({
                ...fetchedPosts[key],
                id: key,
              });
              break;
          }
        }
      } else if (
        fetchedPosts[key]["category"] &&
        fetchedPosts[key]["wp:status"][0] === "private"
      ) {
        for (let i = 0; i < fetchedPosts[key]["category"].length; i++) {
          switch (fetchedPosts[key]["category"][i]["$"]["nicename"]) {
            case "paris-gondo-introduction":
              fetchedIntroGondo.push({
                ...fetchedPosts[key],
                id: key,
              });
              break;

            case "about":
              fetchedAbout.push({
                ...fetchedPosts[key],
                id: key,
              });
              break;

            case "the-team":
              const attachmentURL = getAttachmentURL(
                fetchedAttachment,
                fetchedPosts[key]
              );

              fetchedTheTeam.push({
                ...fetchedPosts[key],
                cover: attachmentURL,
                id: key,
              });
              break;

            case "downloads":
              fetchedDL.push({
                ...fetchedPosts[key],
                id: key,
              });
              break;

            case "downloads-per-title":
              // const attachmentURL = getAttachmentURL(
              //   fetchedAttachment,
              //   fetchedPosts[key]
              // );

              fetchedDLTitle.push({
                ...fetchedPosts[key],
                // cover: attachmentURL,
                id: key,
              });
              break;
          }
        }
      }
    }

    fetchedPodcast.sort((a, b) => {
      return new Date(b["pubDate"][0]) - new Date(a["pubDate"][0]);
    });

    fetchedNews.sort((a, b) => {
      return new Date(b["pubDate"][0]) - new Date(a["pubDate"][0]);
    });

    fetchedGames.sort((a, b) => {
      return new Date(b["pubDate"][0]) - new Date(a["pubDate"][0]);
    });

    fetchedGondo.sort((a, b) => {
      return new Date(b["pubDate"][0]) - new Date(a["pubDate"][0]);
    });

    fetchedIntroGondo.sort((a, b) => {
      return new Date(b["pubDate"][0]) - new Date(a["pubDate"][0]);
    });

    fetchedComingSoon.sort((a, b) => {
      return new Date(b["pubDate"][0]) - new Date(a["pubDate"][0]);
    });
  });

  return {
    posts: fetchedPosts,
    news: fetchedNews,
    podcast: fetchedPodcast,
    games: fetchedGames,
    gondo: fetchedGondo, //ICI POUR MODIFIER
    introGondo: fetchedIntroGondo,
    about: fetchedAbout,
    theTeam: fetchedTheTeam,
    downloads: fetchedDL,
    downloadsPerTitle: fetchedDLTitle,
    comingSoon: fetchedComingSoon,
  };
}

export async function searchPost(posts, pageTitle) {
  for (let i = 0; i < posts.length; i++) {
    if (posts[i]["wp:post_name"][0] === pageTitle) {
      return i;
    }
  }
}

export async function searchLatest(posts, amountToReturn) {
  const news = [];
  for (let i = 0; i < amountToReturn; i++) {
    news.push({
      ...posts[i],
      latest: i == 0 ? true : false,
      id: i,
    });
  }

  return news;
}

const searchPostBasedOnCategory = (posts, category) => {
  for (let i = 1; i < posts.length; i++) {
    for (let j = 0; j < posts[i]["category"].length; j++) {
      if (posts[i]["category"][j]["$"]["nicename"] === category) {
        return i;
      }
    }
  }
};

export async function searchPostsBasedOnCategory(posts, category) {
  const postsFromCategory = [];

  for (let i = 0; i < posts.length; i++) {
    for (let j = 0; j < posts[i]["category"].length; j++) {
      if (posts[i]["category"][j]["$"]["nicename"] === category) {
        postsFromCategory.push(posts[i]);
      }
    }
  }

  // sizePodcast = postsFromCategory.length;
  return postsFromCategory;
}

// Weight of a shared category when scoring recommendations: generic tags count
// for nothing, games, publishers, guests and places count more.
const DEFAULT_CATEGORY_WEIGHT = 1;
const CATEGORY_WEIGHTS = new Map(
  [
    [catValue0, 0],
    [catValue2, 2],
    [catValue3, 3],
    [catValue4, 4],
    [catValue5, 5],
  ].flatMap(([categories, weight]) =>
    categories.map((category) => [category, weight])
  )
);

const getValueCategory = (category) =>
  CATEGORY_WEIGHTS.get(category) ?? DEFAULT_CATEGORY_WEIGHT;

const nicenamesOf = (post) =>
  post["category"].map((category) => category["$"]["nicename"]);

export async function searchRecommendedPosts(postToRead, posts) {
  // A nicename can appear twice on a post (as a category and as a tag), and
  // each occurrence counts, so occurrences are counted rather than deduplicated.
  const currentCategories = new Map();
  for (const name of nicenamesOf(postToRead)) {
    currentCategories.set(name, (currentCategories.get(name) ?? 0) + 1);
  }

  const scored = [];
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
      new Date(b.post["pubDate"][0]) - new Date(a.post["pubDate"][0])
  );

  return scored
    .slice(0, 2)
    .map(({ post, score, id }) => ({
      ...post,
      amountMatchCategories: score,
      id,
    }));
}

export async function searchLatestPodcast(posts, amountToReturn) {
  const podcast = [];

  podcast.push({
    ...posts[0],
    latest: true,
    id: 0,
  });

  const categories = [
    "the-rolistes-podcast",
    "the-rolistes-present",
    "cafe-rolistes",
    "film-studies",
  ];

  let indexPost = 0;

  for (let i = 0; i < categories.length; i++) {
    indexPost = searchPostBasedOnCategory(posts, categories[i]);

    podcast.push({
      ...posts[indexPost],
      latest: true,
      id: i + 1,
    });
  }

  return podcast;
}
