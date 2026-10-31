import { useEffect } from "react";
import AboutUsLayout from "../../Layout/AboutUsLayout/AboutUsLayout";

import { loadPosts } from "../../helpers/load-posts.js";
import { toArticle } from "../../helpers/normalize.js";

function AboutPage(props) {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

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
