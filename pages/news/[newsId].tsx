import type {
  GetStaticPaths,
  GetStaticProps,
  InferGetStaticPropsType,
} from "next";
import PostLayout from "../../layouts/PostLayout/PostLayout";

import {
  searchPost,
  searchLatest,
  searchRecommendedPosts,
} from "../../helpers/api-util";
import { loadPosts } from "../../helpers/load-posts";
import {
  toFullPost,
  toSummary,
  type FullPost,
  type Summary,
} from "../../helpers/normalize";

type Params = { newsId: string };

type Props = {
  recommendedPosts: Summary[];
  recentPosts: Summary[];
  fullPost: FullPost;
  fullPostType: string;
};

function NewsPage(props: InferGetStaticPropsType<typeof getStaticProps>) {
  return <PostLayout {...props} type="FULLPOST" />;
}

export const getStaticProps: GetStaticProps<Props, Params> = async (
  context
) => {
  const pageTitle = context.params!.newsId;

  const fetchedPosts = await loadPosts();

  const key = await searchPost(fetchedPosts.news, pageTitle);
  const fullPost = key === undefined ? undefined : fetchedPosts.news[key];

  if (!fullPost) {
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

// Every news is generated at build time; any other address is a 404
export const getStaticPaths: GetStaticPaths<Params> = async () => {
  const fetchedPosts = await loadPosts();

  const ids = fetchedPosts.news.map((news) => news["wp:post_name"][0]);
  const pathsWithParams = ids.map((id) => ({ params: { newsId: id } }));

  return {
    paths: pathsWithParams,
    fallback: false,
  };
};

export default NewsPage;
