import { Fragment } from "react";
import FullPost from "../../components/FullPost/FullPost";
import PostList from "../../components/PostList/PostList";
import PaginationList from "../../components/UI/PaginationList/PaginationList";
import { Col, Container, Row } from "react-bootstrap";
import Follow from "../../components/side/Follow/Follow";
import Ads from "../../components/UI/Ads/Ads";
import Support from "../../components/side/Support/Support";
import Footer from "../../components/Footer/Footer";
import Seo from "../../components/Seo/Seo";
import usePagination from "../../hooks/usePagination";

const postPerPage = 10;

const GondoLayout = (props) => {
  const { currentPage, goToPage, pageItems } = usePagination(
    props.gondo,
    postPerPage
  );

  return (
    <Fragment>
      <Seo
        title="The Rolistes Podcast - Paris Gondo"
        description="Paris Gondo – The Life-Saving Magic of Inventorying, the tabletop RPG by The Rolistes: news, conventions and where to find it."
        path="/paris_gondo"
      />
      <Container>
        <Ads />
        <Row>
          <Col
            lg={8}
            xs={12}
            className="no_padding_right no_padding_smallscreen"
          >
            <FullPost
              title={props.introGondo.title}
              content={props.introGondo.content}
              date={props.introGondo.date}
              type="INTROGONDO"
            />
            {/* crash comes from here */}
            {/* <div className={classes.item_box_left_gondo}>
                            <iframe className={classes.gondo_ads} frameBorder="0" src="https://itch.io/embed/1185131?border_width=0&amp;border_color=ffffff" width="206" height="165"><a href="https://rolistespod.itch.io/paris-gondo%22%3EParis Gondo - The Life-Saving Magic of Inventorying by Kalum from The Rolistes Podcast"></a></iframe>                       
                        </div>                           */}

            <div className={"item_box_left"}>
              <h2 className={"section_title"}>Latest Paris Gondo News</h2>
              <PostList posts={pageItems} />
              <PaginationList
                totalRecords={props.gondo.length}
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

export default GondoLayout;
