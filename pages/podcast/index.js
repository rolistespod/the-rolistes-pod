import { useEffect } from "react";
import PodcastLayout from "../../Layout/PodcastLayout/PodcastLayout";

import { searchPostsBasedOnCategory } from "../../helpers/api-util.js";
import { loadPosts } from "../../helpers/load-posts.js";

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
  const rolistesPodcast = await searchPostsBasedOnCategory(
    fetchedPosts.podcast,
    "the-rolistes-podcast"
  );
  const rolistesPresent = await searchPostsBasedOnCategory(
    fetchedPosts.podcast,
    "the-rolistes-present"
  );
  const cafeRolistes = await searchPostsBasedOnCategory(
    fetchedPosts.podcast,
    "cafe-rolistes"
  );
  const filmStudies = await searchPostsBasedOnCategory(
    fetchedPosts.podcast,
    "film-studies"
  );

  const currentCategorySize = allPodcast.length;
  
  return {
    props: {
      podcast: allPodcast,
      rolistesPodcast: rolistesPodcast,
      rolistesPresent: rolistesPresent,
      cafeRolistes: cafeRolistes,
      filmStudies: filmStudies,
      currentCategorySize: currentCategorySize
    },
  };
}

export default PodcastListPage;
