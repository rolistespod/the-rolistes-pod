import { useEffect } from "react";
import AboutUsLayout from "../../Layout/AboutUsLayout/AboutUsLayout";

import { loadPosts } from "../../helpers/load-posts.js";

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
      about: fetchedPosts.about,
      theTeam: fetchedPosts.theTeam,
    },
  };
}

export default AboutPage;
