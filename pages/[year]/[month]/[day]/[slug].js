import PostLayout from "../../../../layouts/PostLayout/PostLayout";

import {
  searchPost,
  searchLatest,
  searchRecommendedPosts,
} from "../../../../helpers/api-util.js";
import { loadPosts } from "../../../../helpers/load-posts.js";
import { toFullPost, toSummary } from "../../../../helpers/normalize.js";

function PodcastPage(props) {
  return <PostLayout {...props} type="FULLPOST" />;
}

const getDateParams = (podcast) => {
  const [year, month, day] = podcast.url.split("/").filter(Boolean);
  return { year, month, day };
};

export async function getStaticProps(context) {
  const { year, month, day, slug } = context.params;

  const fetchedPosts = await loadPosts();

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
      recommendedPosts: recommendedPosts.map(toSummary),
      recentPosts: recentPosts.map(toSummary),
      fullPost: toFullPost(fullPost),
      fullPostType: fullPostType,
    },
  };
}

export async function getStaticPaths() {
  const fetchedPosts = await loadPosts();

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
