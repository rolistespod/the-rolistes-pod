import GondoLayout from "../../Layout/GondoLayout/GondoLayout";
import { loadPosts } from "../../helpers/load-posts.js";
import { toFullPost, toNewsSummary } from "../../helpers/normalize.js";

function GondoPage(props) {
  return <GondoLayout {...props} />;
}

export async function getStaticProps() {
  const fetchedPosts = await loadPosts();

  return {
    props: {
      introGondo: toFullPost(fetchedPosts.introGondo[0]),
      gondo: fetchedPosts.gondo.map(toNewsSummary),
    },
  };
}

export default GondoPage;
