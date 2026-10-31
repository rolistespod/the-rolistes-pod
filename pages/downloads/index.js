import { useEffect } from "react";
import DownloadsLayout from "../../Layout/DownloadsLayout/DownloadsLayout";

import { loadPosts } from "../../helpers/load-posts.js";

function DownloadsPage(props) {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return <DownloadsLayout {...props} />;
}

export async function getStaticProps() {
  const fetchedPosts = await loadPosts();

  return {
    props: {
      downloads: fetchedPosts.downloads,
      downloadsPerTitle: fetchedPosts.downloadsPerTitle,
    },
  };
}

export default DownloadsPage;
