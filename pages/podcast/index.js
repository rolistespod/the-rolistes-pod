import { useEffect } from "react";
import PodcastLayout from "../../Layout/PodcastLayout/PodcastLayout";

import { searchPostsBasedOnCategory } from "../../helpers/api-util.js";
import { loadPosts } from "../../helpers/load-posts.js";
import { toPodcastSummary } from "../../helpers/normalize.js";

function PodcastListPage(props) {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return <PodcastLayout {...props} />;
}

export async function getStaticProps() {
  const fetchedPosts = await loadPosts();
  const allPodcast = await searchPostsBasedOnCategory(
    fetchedPosts.podcast,
    "podcast"
  );

  return {
    props: {
      podcasts: allPodcast.map(toPodcastSummary),
    },
  };
}

export default PodcastListPage;
