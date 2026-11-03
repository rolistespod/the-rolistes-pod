import { Fragment } from "react";
import Footer from "../../components/Footer/Footer";
import { Container } from "react-bootstrap";
import Seo from "../../components/Seo/Seo";
import ComingSoon from "../../components/ComingSoon/ComingSoon";
import Banner from "../../components/UI/Banner/Banner";
import LatestPodcast from "../../components/Latest/LatestPodcast/LatestPodcast";
import Ads from "../../components/UI/Ads/Ads";
import LatestNews from "../../components/Latest/LatestNews/LatestNews";

const HomeLayout = (props) => (
  <Fragment>
    <Seo
      title="The Rolistes Podcast - Home"
      description="London-based tabletop RPG podcasts showcasing fans across the Channel, the Pond and beyond: discussions, actual plays, interviews and convention reports."
      path="/"
    />
    <Container>
      {props.latestComingSoon && (
        <ComingSoon latestComingSoon={props.latestComingSoon} />
      )}
      <Banner />
      {props.latestPodcast.length > 0 && (
        <LatestPodcast podcast={props.latestPodcast} />
      )}
      <Ads />
      {props.latestNews.length > 0 && <LatestNews news={props.latestNews} />}
    </Container>
    <Footer />
  </Fragment>
);

export default HomeLayout;
