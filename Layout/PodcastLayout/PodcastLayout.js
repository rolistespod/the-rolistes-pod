import React, { Fragment, useEffect } from "react";
import Button from "../../components/UI/Button/Button";
import classes from "./PodcastLayout.module.css";
import { Col, Container, Row } from "react-bootstrap";
import PodcastTile from "../../components/PodcastTile/PodcastTile";
import Ads from "../../components/UI/Ads/Ads";
import Footer from "../../components/Footer/Footer";
import PaginationList from "../../components/UI/PaginationList/PaginationList";
import { useState } from "react";
import { useRouter } from 'next/router'
// import { useParams } from 'react-router-dom';
import Head from "next/head";

import globalClasses from "../../styles/App.module.css";

const PodcastLayout = (props) => {
  const router =useRouter();
  const categoryId = router.query.cat;

  let activePagePodcast = props.podcast;

  switch (categoryId) {
    case "the-rolistes-podcast":
      activePagePodcast = props.rolistesPodcast;        
      break;

    case "the-rolistes-present":
      activePagePodcast = props.rolistesPresent;
      break;

    case "cafe-rolistes":
      activePagePodcast = props.cafeRolistes;
      break;

    case "film-studies":
      activePagePodcast = props.filmStudies;
      break;

    default:
      activePagePodcast = props.podcast;
  }
  const [currentPage, setCurrentPage] = useState(1);

  const currentCategorySize = activePagePodcast.length;
  const postPerPage = 24;
  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;

  const btnType = "filter";
  const [btnState, setBtnState] = useState({
    allIsDisabled: true,
    rolistesPodIsDisabled: false,
    rolistesPresentIsDisabled: false,
    cafeRolistesIsDisabled: false,
    filmStudiesIsDisabled: false,
  });

  useEffect(() => {
    switch (categoryId) {
      case "the-rolistes-podcast":
        setBtnState({
          allIsDisabled: false,
          rolistesPodIsDisabled: true,
          rolistesPresentIsDisabled: false,
          cafeRolistesIsDisabled: false,
          filmStudiesIsDisabled: false,
        });  
        break;

      case "the-rolistes-present":
        setBtnState({
          allIsDisabled: false,
          rolistesPodIsDisabled: false,
          rolistesPresentIsDisabled: true,
          cafeRolistesIsDisabled: false,
          filmStudiesIsDisabled: false,
        });
        break;

      case "cafe-rolistes":
        setBtnState({
          allIsDisabled: false,
          rolistesPodIsDisabled: false,
          rolistesPresentIsDisabled: false,
          cafeRolistesIsDisabled: true,
          filmStudiesIsDisabled: false,
        });
        break;

      case "film-studies":
        setBtnState({
          allIsDisabled: false,
          rolistesPodIsDisabled: false,
          rolistesPresentIsDisabled: false,
          cafeRolistesIsDisabled: false,
          filmStudiesIsDisabled: true,
        });
        break;

      default:
        setBtnState({
          allIsDisabled: true,
          rolistesPodIsDisabled: false,
          rolistesPresentIsDisabled: false,
          cafeRolistesIsDisabled: false,
          filmStudiesIsDisabled: false,
        });
    }
    setCurrentPage(1);
    window.scrollTo(0, 0);
  }, [router.query]);

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const filterAll = () => {
    paginate(1);
    setBtnState({
      allIsDisabled: true,
      rolistesPodIsDisabled: false,
      rolistesPresentIsDisabled: false,
      cafeRolistesIsDisabled: false,
      filmStudiesIsDisabled: false,
    });
    router.push({ pathname: "/podcast", query: { cat: "podcast" } });
  };

  const filterRolistesPod = () => {
    paginate(1);
    setBtnState({
      allIsDisabled: false,
      rolistesPodIsDisabled: true,
      rolistesPresentIsDisabled: false,
      cafeRolistesIsDisabled: false,
      filmStudiesIsDisabled: false,
    });
    router.push({ pathname: "/podcast", query: { cat: "the-rolistes-podcast" } });
  };

  const filterRolistesPresent = () => {
    paginate(1);
    setBtnState({
      allIsDisabled: false,
      rolistesPodIsDisabled: false,
      rolistesPresentIsDisabled: true,
      cafeRolistesIsDisabled: false,
      filmStudiesIsDisabled: false,
    });
    router.push({ pathname: "/podcast", query: { cat: "the-rolistes-present" } });
  };

  const filterCafeRolistes = () => {
    paginate(1);
    setBtnState({
      allIsDisabled: false,
      rolistesPodIsDisabled: false,
      rolistesPresentIsDisabled: false,
      cafeRolistesIsDisabled: true,
      filmStudiesIsDisabled: false,
    });
    router.push({ pathname: "/podcast", query: { cat: "cafe-rolistes" } });
  };
  const filterFilmStudies = () => {
    paginate(1);
    setBtnState({
      allIsDisabled: false,
      rolistesPodIsDisabled: false,
      rolistesPresentIsDisabled: false,
      cafeRolistesIsDisabled: false,
      filmStudiesIsDisabled: true,
    });
    router.push({ pathname: "/podcast", query: { cat: "film-studies" } });
  };

  return (
    <Fragment>
      <Head>
        {/* Global Site Tag (gtag.js) - Google Analytics */}
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
              page_path: window.location.pathname,
            });
          `,
          }}
        />
        <title>The Rolistes Podcast - Podcasts</title>
        <meta name="description" content="" />
      </Head>
      <Container>
        <Ads />
        <div
          className={[
            globalClasses.item_box,
            globalClasses.no_padding_smallscreen,
          ].join(" ")}
        >
          <h1
            className={[
              globalClasses.section_title,
              globalClasses.section_title_podcast,
            ].join(" ")}
          >
            Podcast
          </h1>
          <div className={classes.filters}>
            <Button
              btnType={btnType}
              disabled={btnState.allIsDisabled}
              clicked={filterAll}
            >
              ALL
            </Button>
            <Button
              btnType={btnType}
              disabled={btnState.rolistesPodIsDisabled}
              clicked={filterRolistesPod}
            >
              The Rolistes Podcast
            </Button>
            <Button
              btnType={btnType}
              disabled={btnState.rolistesPresentIsDisabled}
              clicked={filterRolistesPresent}
            >
              The Rolistes Present
            </Button>
            <Button
              btnType={btnType}
              disabled={btnState.cafeRolistesIsDisabled}
              clicked={filterCafeRolistes}
            >
              Cafe Rolistes
            </Button>
            <Button
              btnType={btnType}
              disabled={btnState.filmStudiesIsDisabled}
              clicked={filterFilmStudies}
            >
              Film Studies
            </Button>
          </div>
          <Row>
            {activePagePodcast
              .slice(indexOfFirstPost, indexOfLastPost)
              .map((podcast) => (
                <PodcastTile
                  key={podcast.id}
                  cover={podcast.cover}
                  date={podcast["pubDate"][0]}
                  title={podcast["title"]}
                  url={podcast.url}
                />
              ))}
          </Row>
          <PaginationList
            totalRecords={currentCategorySize}
            pageLimit={postPerPage}
            clicked={paginate}
            currentPage={currentPage}
          />
        </div>
      </Container>
      <Footer />
    </Fragment>
  );
};

export default PodcastLayout;
