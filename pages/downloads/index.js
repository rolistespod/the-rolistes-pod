import DownloadsLayout from "../../Layout/DownloadsLayout/DownloadsLayout";

import { loadPosts } from "../../helpers/load-posts.js";
import { toArticle } from "../../helpers/normalize.js";

function DownloadsPage(props) {
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
