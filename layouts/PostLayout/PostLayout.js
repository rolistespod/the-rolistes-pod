import { Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Ads from "../../components/UI/Ads/Ads";
import Follow from "../../components/side/Follow/Follow";
import Support from "../../components/side/Support/Support";
import Footer from "../../components/Footer/Footer";
import FullPost from "../../components/FullPost/FullPost";
import Seo from "../../components/Seo/Seo";
import RecommendedPosts from "../../components/side/Recommended/RecommendedPosts";
import RecentPosts from "../../components/side/Recent/RecentPosts";

const PostLayout = (props) => {
  const { fullPost } = props;

  return (
    <Fragment>
      <Seo
        title={fullPost.title}
        description={fullPost.description}
        path={fullPost.url}
        image={fullPost.image}
        type="article"
      />
      <Container>
        <Ads />
        <Row>
          <Col
            lg={8}
            xs={12}
            className={["no_padding_right", "no_padding_smallscreen"].join(" ")}
          >
            <FullPost
              title={fullPost.title}
              content={fullPost.content}
              date={fullPost.date}
              type={props.fullPostType}
            />
          </Col>
          <Col lg={4} xs={12}>
            <Row>
              <Col xs={12} className={"no_padding_smallscreen"}>
                <Follow />
              </Col>
              <Col xs={12} className={"no_padding_smallscreen"}>
                <Support />
              </Col>
              <Col xs={12} className={"no_padding_smallscreen"}>
                <RecommendedPosts recommendedPosts={props.recommendedPosts} />
              </Col>
              <Col xs={12} className={"no_padding_smallscreen"}>
                <RecentPosts recentPosts={props.recentPosts} />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>

      <Footer />
    </Fragment>
  );
};

export default PostLayout;
