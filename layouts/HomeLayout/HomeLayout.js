import { Fragment } from "react";
import Footer from "../../components/Footer/Footer";
import { Container } from "react-bootstrap";
import Head from "next/head";
import ComingSoon from "../../components/ComingSoon/ComingSoon";
import Banner from "../../components/UI/Banner/Banner";
import LatestPodcast from "../../components/Latest/LatestPodcast/LatestPodcast";
import Ads from "../../components/UI/Ads/Ads";
import LatestNews from "../../components/Latest/LatestNews/LatestNews";

const HomeLayout = (props) => (
  <Fragment>
    <Head>
      <title>The Rolistes Podcast - Home</title>
      <meta name="description" content="" />
    </Head>
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
