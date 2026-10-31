import { useEffect } from "react";
import DownloadsLayout from "../../Layout/DownloadsLayout/DownloadsLayout";

import { loadPosts } from "../../helpers/load-posts.js";
import { toArticle } from "../../helpers/normalize.js";

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
      downloads: toArticle(fetchedPosts.downloads[0]),
      downloadsPerTitle: fetchedPosts.downloadsPerTitle.map(toArticle),
    },
  };
}

export default DownloadsPage;
