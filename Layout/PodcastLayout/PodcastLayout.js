import { Fragment, useEffect, useState } from "react";
import Button from "../../components/UI/Button/Button";
import classes from "./PodcastLayout.module.css";
import { Container, Row } from "react-bootstrap";
import PodcastTile from "../../components/PodcastTile/PodcastTile";
import Ads from "../../components/UI/Ads/Ads";
import Footer from "../../components/Footer/Footer";
import PaginationList from "../../components/UI/PaginationList/PaginationList";
import { useRouter } from "next/router";
import Head from "next/head";

import globalClasses from "../../styles/App.module.css";
import { PODCAST_SERIES } from "../../helpers/normalize.js";

const ALL = "podcast";

const FILTERS = [
  { id: ALL, label: "ALL" },
  { id: "the-rolistes-podcast", label: "The Rolistes Podcast" },
  { id: "the-rolistes-present", label: "The Rolistes Present" },
  { id: "cafe-rolistes", label: "Cafe Rolistes" },
  { id: "film-studies", label: "Film Studies" },
];

const postPerPage = 24;

const PodcastLayout = (props) => {
  const router = useRouter();

  const activeCategory = PODCAST_SERIES.includes(router.query.cat)
    ? router.query.cat
    : ALL;

  const activePagePodcast =
    activeCategory === ALL
      ? props.podcasts
      : props.podcasts.filter((podcast) =>
          podcast.series.includes(activeCategory)
        );

  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;

  useEffect(() => {
    setCurrentPage(1);
    window.scrollTo(0, 0);
  }, [activeCategory]);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo(0, 0);
  };

  const selectCategory = (category) =>
    router.push({ pathname: "/podcast", query: { cat: category } });

  return (
    <Fragment>
      <Head>
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
            {FILTERS.map((filter) => (
              <Button
                key={filter.id}
                btnType="filter"
                disabled={filter.id === activeCategory}
                clicked={() => selectCategory(filter.id)}
              >
                {filter.label}
              </Button>
            ))}
          </div>
          <Row>
            {activePagePodcast
              .slice(indexOfFirstPost, indexOfLastPost)
              .map((podcast) => (
                <PodcastTile
                  key={podcast.id}
                  cover={podcast.cover}
                  date={podcast.date}
                  title={podcast.title}
                  url={podcast.url}
                />
              ))}
          </Row>
          <PaginationList
            totalRecords={activePagePodcast.length}
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
