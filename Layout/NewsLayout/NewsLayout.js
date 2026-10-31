import { Fragment, useEffect, useState } from "react";
import PostList from "../../components/PostList/PostList";
import classes from "./NewsLayout.module.css";
import Ads from "../../components/UI/Ads/Ads";
import PaginationList from "../../components/UI/PaginationList/PaginationList";
import { Col, Container, Row } from "react-bootstrap";
import Follow from "../../components/side/Follow/Follow";
import Support from "../../components/side/Support/Support";
import Footer from "../../components/Footer/Footer";
import Subscribe from "../../components/side/Subscribe/Subscribe";
import Head from "next/head";

import globalClasses from "../../styles/App.module.css";

const NewsLayout = (props) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  const [currentPage, setCurrentPage] = useState(1);

  const postPerPage = 10;
  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;

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
        <title>The Rolistes Podcast - News</title>
        <meta name="description" content="" />
      </Head>
      <Container>
        <Ads />
        <Row>
          <Col
            lg={8}
            xs={12}
            className={[
              globalClasses.no_padding_right,
              globalClasses.no_padding_smallscreen,
            ].join(" ")}
          >
            <div className={globalClasses.item_box_left}>
              <h1 className={globalClasses.section_title}>News</h1>
              <PostList
                posts={props.news.slice(indexOfFirstPost, indexOfLastPost)}
              />
              <PaginationList
                totalRecords={props.news.length}
                pageLimit={postPerPage}
                clicked={setCurrentPage}
                currentPage={currentPage}
              />
            </div>
          </Col>

          <Col lg={4} xs={12}>
            <Row>
              <Col xs={12} className={globalClasses.no_padding_smallscreen}>
                <Follow />
              </Col>
              <Col xs={12} className={globalClasses.no_padding_smallscreen}>
                <Support />
              </Col>
              {/* <Col xs={12} className={globalClasses.no_padding_smallscreen}>
                                <Subscribe />
                            </Col>                                         */}
            </Row>
          </Col>
        </Row>
      </Container>
      <Footer />
    </Fragment>
  );
};

export default NewsLayout;
