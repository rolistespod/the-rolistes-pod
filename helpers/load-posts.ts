// Server-only: import this from getStaticProps / getStaticPaths only, never from a component.
import fs from "fs";
import path from "path";
import { fetchPostsHelper } from "./api-util";
import type { Sections } from "./types";

const DATA_FILE = path.join(process.cwd(), "data", "therolistespodcast.xml");

let cachedPosts: Promise<Sections> | undefined;

export function loadPosts(): Promise<Sections> {
  if (process.env.NODE_ENV === "development") {
    return fetchPostsHelper(fs.readFileSync(DATA_FILE));
  }

  cachedPosts ??= fetchPostsHelper(fs.readFileSync(DATA_FILE));
  return cachedPosts;
}
