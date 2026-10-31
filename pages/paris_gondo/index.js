import { useEffect } from "react";
import GondoLayout from "../../Layout/GondoLayout/GondoLayout";

import { searchLatest, searchLatestPodcast } from "../../helpers/api-util.js";
import { loadPosts } from "../../helpers/load-posts.js";

function GondoPage(props) {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return <GondoLayout {...props} />;
}

export async function getStaticProps() {
  const fetchedPosts = await loadPosts();
  const latestNews = await searchLatest(fetchedPosts.news, 5);
  const latestPodcast = await searchLatestPodcast(fetchedPosts.podcast, 5);

  return {
    props: {
      introGondo: fetchedPosts.introGondo,
      gondo: fetchedPosts.gondo,
      latestNews: latestNews,
      latestPodcast: latestPodcast,
    },
  };
}

export default GondoPage;
