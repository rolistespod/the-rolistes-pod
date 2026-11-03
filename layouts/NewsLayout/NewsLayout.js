import { Fragment } from "react";
import PostList from "../../components/PostList/PostList";
import Ads from "../../components/UI/Ads/Ads";
import PaginationList from "../../components/UI/PaginationList/PaginationList";
import { Col, Container, Row } from "react-bootstrap";
import Follow from "../../components/side/Follow/Follow";
import Support from "../../components/side/Support/Support";
import Footer from "../../components/Footer/Footer";
import Seo from "../../components/Seo/Seo";
import usePagination from "../../hooks/usePagination";

const postPerPage = 10;

const NewsLayout = (props) => {
  const { currentPage, goToPage, pageItems } = usePagination(
    props.news,
    postPerPage
  );

  return (
    <Fragment>
      <Seo
        title="The Rolistes Podcast - News"
        description="News from The Rolistes: new episodes, conventions, live panels and our tabletop RPG games."
        path="/news"
      />
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
              <PostList posts={pageItems} />
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
