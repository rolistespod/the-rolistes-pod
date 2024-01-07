import React, { Fragment, useEffect } from "react";
import Button from "../../components/UI/Button/Button";
import classes from "./PodcastLayout.module.css";
import { Col, Container, Row } from "react-bootstrap";
import Posts from "../../containers/Posts/Posts";
import Ads from "../../components/UI/Ads/Ads";
import Footer from "../../components/Footer/Footer";
import PaginationList from "../../components/UI/PaginationList/PaginationList";
import * as actions from "../../store/actions/index";
import { connect } from "react-redux";
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
  const currentCategorySize = activePagePodcast.length;
  const postPerPage = 24;
  const indexOfLastPost = props.currentPagePodcast * postPerPage;
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
    let category = "";
    switch (categoryId) {
      case "the-rolistes-podcast":
        category = categoryId;
        setBtnState({
          allIsDisabled: false,
          rolistesPodIsDisabled: true,
          rolistesPresentIsDisabled: false,
          cafeRolistesIsDisabled: false,
          filmStudiesIsDisabled: false,
        });  
        break;

      case "the-rolistes-present":
        category = categoryId;
        setBtnState({
          allIsDisabled: false,
          rolistesPodIsDisabled: false,
          rolistesPresentIsDisabled: true,
          cafeRolistesIsDisabled: false,
          filmStudiesIsDisabled: false,
        });
        break;

      case "cafe-rolistes":
        category = categoryId;
        setBtnState({
          allIsDisabled: false,
          rolistesPodIsDisabled: false,
          rolistesPresentIsDisabled: false,
          cafeRolistesIsDisabled: true,
          filmStudiesIsDisabled: false,
        });
        break;

      case "film-studies":
        category = categoryId;
        setBtnState({
          allIsDisabled: false,
          rolistesPodIsDisabled: false,
          rolistesPresentIsDisabled: false,
          cafeRolistesIsDisabled: false,
          filmStudiesIsDisabled: true,
        });
        break;

      default:
        category = "podcast";
        setBtnState({
          allIsDisabled: true,
          rolistesPodIsDisabled: false,
          rolistesPresentIsDisabled: false,
          cafeRolistesIsDisabled: false,
          filmStudiesIsDisabled: false,
        });
    }
    console.log(activePagePodcast);
    props.onSetCurrentPagePodcast(1);
    props.onSetCurrentCategoryPodcast(category);
    window.scrollTo(0, 0);
  }, [router.query]);

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  const paginate = (pageNumber) => props.onSetCurrentPagePodcast(pageNumber);

  const filterAll = () => {
    props.onSetCurrentCategoryPodcast("podcast");
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
    props.onSetCurrentCategoryPodcast("the-rolistes-podcast");
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
    props.onSetCurrentCategoryPodcast("the-rolistes-present");
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
    props.onSetCurrentCategoryPodcast("cafe-rolistes");
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
    props.onSetCurrentCategoryPodcast("film-studies");
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
            <Posts
              {...props}
              type="PODCAST"
              activePagePodcast={activePagePodcast}
              filterCategory={props.currentCategoryPodcast}
              indexOfFirstPost={indexOfFirstPost}
              indexOfLastPost={indexOfLastPost}
            />
          </Row>
          <PaginationList
            totalRecords={currentCategorySize}
            pageLimit={postPerPage}
            clicked={paginate}
            currentPage={props.currentPagePodcast}
          />
        </div>
      </Container>
      <Footer />
    </Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    currentPagePodcast: state.posts.currentPagePodcast,
    currentCategoryPodcast: state.posts.currentCategoryPodcast,
    // currentCategorySize: state.posts.currentCategorySize,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSetCurrentPagePodcast: (pageNumber) =>
      dispatch(actions.setCurrentPagePodcast(pageNumber)),
    onSetCurrentCategoryPodcast: (category) =>
      dispatch(actions.setCurrentCategoryPodcast(category)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PodcastLayout);
