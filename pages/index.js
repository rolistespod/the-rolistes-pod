import { useEffect } from "react";
import HomeLayout from "../Layout/HomeLayout/HomeLayout";
import { searchLatest, searchLatestPodcast } from "../helpers/api-util.js";
import { loadPosts } from "../helpers/load-posts.js";

function HomePage(props) {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return <HomeLayout {...props} />;
}

export async function getStaticProps() {
  const fetchedPosts = await loadPosts();
  const latestNews = await searchLatest(fetchedPosts.news, 5);
  const latestPodcast = await searchLatestPodcast(fetchedPosts.podcast, 5);
  const latestComingSoon = fetchedPosts.comingSoon[0];

  return {
    props: {
      latestNews: latestNews,
      latestPodcast: latestPodcast,
      latestComingSoon: latestComingSoon,
    },
  };
}

export default HomePage;
