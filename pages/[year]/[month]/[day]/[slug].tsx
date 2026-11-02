import type {
  GetStaticPaths,
  GetStaticProps,
  InferGetStaticPropsType,
} from "next";
import PostLayout from "../../../../layouts/PostLayout/PostLayout";

import {
  searchPost,
  searchLatest,
  searchRecommendedPosts,
} from "../../../../helpers/api-util";
import { loadPosts } from "../../../../helpers/load-posts";
import {
  toFullPost,
  toSummary,
  type FullPost,
  type Summary,
} from "../../../../helpers/normalize";
import type { PodcastPost } from "../../../../helpers/types";

type Params = { year: string; month: string; day: string; slug: string };

type Props = {
  recommendedPosts: Summary[];
  recentPosts: Summary[];
  fullPost: FullPost;
  fullPostType: string;
};

function PodcastPage(props: InferGetStaticPropsType<typeof getStaticProps>) {
  return <PostLayout {...props} type="FULLPOST" />;
}

// The episode URL ("/2020/1/24/slug") is the single source of its date
const getDateParams = (podcast: PodcastPost) => {
  const [year, month, day] = podcast.url.split("/").filter(Boolean);
  return { year, month, day };
};

export const getStaticProps: GetStaticProps<Props, Params> = async (
  context
) => {
  const { year, month, day, slug } = context.params!;

  const fetchedPosts = await loadPosts();

  const key = await searchPost(fetchedPosts.podcast, slug);
  const fullPost = key === undefined ? undefined : fetchedPosts.podcast[key];

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
};

// Every episode is generated at build time; any other address is a 404
export const getStaticPaths: GetStaticPaths<Params> = async () => {
  const fetchedPosts = await loadPosts();

  const pathsWithParams = fetchedPosts.podcast.map((podcast) => ({
    params: {
      ...getDateParams(podcast),
      slug: podcast["wp:post_name"][0],
    },
  }));

  return {
    paths: pathsWithParams,
    fallback: false,
  };
};

export default PodcastPage;
