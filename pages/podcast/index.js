import PodcastLayout from "../../layouts/PodcastLayout/PodcastLayout";

import { searchPostsBasedOnCategory } from "../../helpers/api-util.js";
import { loadPosts } from "../../helpers/load-posts.js";
import { toPodcastSummary } from "../../helpers/normalize.js";

function PodcastListPage(props) {
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
