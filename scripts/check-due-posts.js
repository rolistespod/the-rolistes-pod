// Tells the scheduled CI run whether a scheduled ("future") post went live
// recently, so the site and the RSS feed are only rebuilt when needed.
// Writes "due=true" or "due=false" to $GITHUB_OUTPUT (or prints it locally).
const fs = require("fs");
const path = require("path");

// Wider than the hourly schedule, because GitHub can delay or skip a scheduled run
const WINDOW_MS = 3 * 60 * 60 * 1000;

const xml = fs.readFileSync(
  path.join(process.cwd(), "data", "therolistespodcast.xml"),
  "utf8"
);
const now = Date.now();

const duePosts = xml
  .split("<item>")
  .slice(1)
  .filter((item) => /<wp:status>(<!\[CDATA\[)?future\b/.test(item))
  .map((item) => ({
    name: (item.match(
      /<wp:post_name>(?:<!\[CDATA\[)?(.*?)(?:\]\]>)?<\/wp:post_name>/
    ) || [])[1],
    date: new Date((item.match(/<pubDate>(.*?)<\/pubDate>/) || [])[1]),
  }))
  .filter(
    ({ date }) => date.getTime() <= now && now - date.getTime() < WINDOW_MS
  );

duePosts.forEach(({ name, date }) =>
  console.log(`Went live: ${name} (${date.toISOString()})`)
);

const output = `due=${duePosts.length > 0}\n`;
if (process.env.GITHUB_OUTPUT) {
  fs.appendFileSync(process.env.GITHUB_OUTPUT, output);
}
console.log(output.trim());
