import { useEffect } from "react";
import PostLayout from "../../Layout/PostLayout/PostLayout";
import Spinner from "../../components/UI/Spinner/Spinner";
import { useRouter } from "next/router";

import {
  searchPost,
  searchLatest,
  searchRecommendedPosts,
} from "../../helpers/api-util.js";
import { loadPosts } from "../../helpers/load-posts.js";

function NewsPage(props) {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  const router = useRouter();

  useEffect(() => {}, [router.isReady]);

  return <PostLayout {...props} type="FULLPOST" />;

  // return newsId ? (
  //   <PostLayout {...props} type="FULLPOST" postId={newsId} />
  // ) : (
  //   <Spinner />
  // );
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
      recommendedPosts: recommendedPosts,
      recentPosts: recentPosts,
      fullPost: fullPost,
      type: fullPostType,
      fullPostType: fullPostType
    },
  };
}

export async function getStaticPaths() {

  const fetchedPosts = await loadPosts();

  const ids = fetchedPosts.news.map(news =>news["wp:post_name"][0]);
  const pathsWithParams = ids.map(id=>({params:{newsId:id}}));

  return {
    paths: pathsWithParams,
    fallback: "blocking",
  };
}

export default NewsPage;
