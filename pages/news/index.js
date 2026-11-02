import NewsLayout from "../../layouts/NewsLayout/NewsLayout";

import { loadPosts } from "../../helpers/load-posts";
import { toNewsSummary } from "../../helpers/normalize";

function NewsListPage(props) {
  return <NewsLayout {...props} />;
}

export async function getStaticProps() {
  const fetchedPosts = await loadPosts();

  return {
    props: {
      news: fetchedPosts.news.map(toNewsSummary),
    },
  };
}

export default NewsListPage;
