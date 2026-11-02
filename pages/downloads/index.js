import DownloadsLayout from "../../layouts/DownloadsLayout/DownloadsLayout";

import { loadPosts } from "../../helpers/load-posts";
import { toArticle } from "../../helpers/normalize";

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
