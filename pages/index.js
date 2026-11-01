import HomeLayout from "../layouts/HomeLayout/HomeLayout";
import { searchLatest, searchLatestPodcast } from "../helpers/api-util.js";
import { loadPosts } from "../helpers/load-posts.js";
import { toArticle, toNewsSummary, toSummary } from "../helpers/normalize.js";

function HomePage(props) {
  return <HomeLayout {...props} />;
}

export async function getStaticProps() {
  const fetchedPosts = await loadPosts();
  const latestNews = await searchLatest(fetchedPosts.news, 5);
  const latestPodcast = await searchLatestPodcast(fetchedPosts.podcast);
  const latestComingSoon = fetchedPosts.comingSoon[0];

  return {
    props: {
      latestNews: latestNews.map(toNewsSummary),
      latestPodcast: latestPodcast.map(toSummary),
      latestComingSoon: latestComingSoon ? toArticle(latestComingSoon) : null,
    },
  };
}

export default HomePage;
