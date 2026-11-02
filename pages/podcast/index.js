import PodcastLayout from "../../layouts/PodcastLayout/PodcastLayout";

import { searchPostsBasedOnCategory } from "../../helpers/api-util";
import { loadPosts } from "../../helpers/load-posts";
import { toPodcastSummary } from "../../helpers/normalize";

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
