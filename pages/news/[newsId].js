import PostLayout from "../../layouts/PostLayout/PostLayout";

import {
  searchPost,
  searchLatest,
  searchRecommendedPosts,
} from "../../helpers/api-util";
import { loadPosts } from "../../helpers/load-posts";
import { toFullPost, toSummary } from "../../helpers/normalize";

function NewsPage(props) {
  return <PostLayout {...props} type="FULLPOST" />;
}

export async function getStaticProps(context) {
  const pageTitle = context.params.newsId;

  const fetchedPosts = await loadPosts();

  const key = await searchPost(fetchedPosts.news, pageTitle);
  const fullPost = fetchedPosts.news[key];

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
}

export async function getStaticPaths() {
  const fetchedPosts = await loadPosts();

  const ids = fetchedPosts.news.map((news) => news["wp:post_name"][0]);
  const pathsWithParams = ids.map((id) => ({ params: { newsId: id } }));

  return {
    paths: pathsWithParams,
    fallback: "blocking",
  };
}

export default NewsPage;
