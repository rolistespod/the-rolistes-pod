// Server-only: import this from getStaticProps / getStaticPaths only, never from a component.
import fs from "fs";
import path from "path";
import { fetchPostsHelper } from "./api-util.js";

const DATA_FILE = path.join(process.cwd(), "therolistespodcast.xml");

let cachedPosts;

export function loadPosts() {
  if (process.env.NODE_ENV === "development") {
    return fetchPostsHelper(fs.readFileSync(DATA_FILE));
  }

  cachedPosts ??= fetchPostsHelper(fs.readFileSync(DATA_FILE));
  return cachedPosts;
}
