import AboutUsLayout from "../../layouts/AboutUsLayout/AboutUsLayout";

import { loadPosts } from "../../helpers/load-posts";
import { toArticle } from "../../helpers/normalize";

function AboutPage(props) {
  return <AboutUsLayout {...props} />;
}
//
export async function getStaticProps() {
  const fetchedPosts = await loadPosts();

  return {
    props: {
      about: toArticle(fetchedPosts.about[0]),
      theTeam: fetchedPosts.theTeam.map((member) => ({
        ...toArticle(member),
        cover: member.cover,
      })),
    },
  };
}

export default AboutPage;
