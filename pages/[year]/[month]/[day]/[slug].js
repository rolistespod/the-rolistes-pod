import { useEffect } from "react";
import PostLayout from "../../../../Layout/PostLayout/PostLayout";

import {
  searchPost,
  searchLatest,
  searchRecommendedPosts,
  fetchPostsHelper,
} from "../../../../helpers/api-util.js";

function PodcastPage(props) {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return <PostLayout {...props} type="FULLPOST" />;
}

async function getData() {
  const fs = require("fs");
  const path = require("path");
  const dataToProcess = fs.readFileSync(
    path.join(process.cwd(), "therolistespodcast.xml")
  );
  const fetchedPosts = await fetchPostsHelper(dataToProcess);

  return fetchedPosts;
}

const getDateParams = (podcast) => {
  const tempDate = new Date(podcast["pubDate"][0]);
  return {
    year: String(tempDate.getFullYear()),
    month: String(tempDate.getMonth() + 1),
    day: String(tempDate.getDate()),
  };
};

export async function getStaticProps(context) {
  const { year, month, day, slug } = context.params;

  const fetchedPosts = await getData();

  const key = await searchPost(fetchedPosts.podcast, slug);
  const fullPost = fetchedPosts.podcast[key];

  if (!fullPost) {
    return { notFound: true };
  }

  // The date in the URL must match the episode's publication date
  const expected = getDateParams(fullPost);
  if (
    year !== expected.year ||
    month !== expected.month ||
    day !== expected.day
  ) {
    return { notFound: true };
  }

  const fullPostType = "FULLPOST";
  const recommendedPosts = await searchRecommendedPosts(
    fullPost,
    fetchedPosts.podcast
  );
  const recentPosts = await searchLatest(fetchedPosts.podcast, 2);

  return {
    props: {
      recommendedPosts: recommendedPosts,
      recentPosts: recentPosts,
      fullPost: fullPost,
      type: fullPostType,
      fullPostType: fullPostType,
    },
  };
}

export async function getStaticPaths() {
  const fetchedPosts = await getData();

  const pathsWithParams = fetchedPosts.podcast.map((podcast) => ({
    params: {
      ...getDateParams(podcast),
      slug: podcast["wp:post_name"][0],
    },
  }));

  return {
    paths: pathsWithParams,
    fallback: "blocking",
  };
}

export default PodcastPage;
