import { useEffect } from "react";
import NewsLayout from "../../Layout/NewsLayout/NewsLayout";

import { loadPosts } from "../../helpers/load-posts.js";
import { toNewsSummary } from "../../helpers/normalize.js";

function NewsListPage(props) {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

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
