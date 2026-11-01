import { Fragment, useState } from "react";
import PostList from "../../components/PostList/PostList";
import Ads from "../../components/UI/Ads/Ads";
import PaginationList from "../../components/UI/PaginationList/PaginationList";
import { Col, Container, Row } from "react-bootstrap";
import Follow from "../../components/side/Follow/Follow";
import Support from "../../components/side/Support/Support";
import Footer from "../../components/Footer/Footer";
import Head from "next/head";


const NewsLayout = (props) => {
  const [currentPage, setCurrentPage] = useState(1);

  const goToPage = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo(0, 0);
  };

  const postPerPage = 10;
  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;

  return (
    <Fragment>
      <Head>
        <title>The Rolistes Podcast - News</title>
        <meta name="description" content="" />
      </Head>
      <Container>
        <Ads />
        <Row>
          <Col
            lg={8}
            xs={12}
            className="no_padding_right no_padding_smallscreen"
          >
            <div className="item_box_left">
              <h1 className="section_title">News</h1>
              <PostList
                posts={props.news.slice(indexOfFirstPost, indexOfLastPost)}
              />
              <PaginationList
                totalRecords={props.news.length}
                pageLimit={postPerPage}
                clicked={goToPage}
                currentPage={currentPage}
              />
            </div>
          </Col>

          <Col lg={4} xs={12}>
            <Row>
              <Col xs={12} className="no_padding_smallscreen">
                <Follow />
              </Col>
              <Col xs={12} className="no_padding_smallscreen">
                <Support />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      <Footer />
    </Fragment>
  );
};

export default NewsLayout;
