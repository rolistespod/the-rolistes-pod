import { Fragment } from "react";
import DownloadsPost from "../../components/DownloadsPost/DownloadsPost";
import DownloadsPerTitlePost from "../../components/DownloadsPerTitlePost/DownloadsPerTitlePost";
import { Col, Container, Row } from "react-bootstrap";
import Footer from "../../components/Footer/Footer";
import Seo from "../../components/Seo/Seo";

const DownloadsLayout = (props) => (
  <Fragment>
    <Seo
      title="The Rolistes Podcast - Downloads"
      description="Downloads from The Rolistes: material for our tabletop RPG games and episodes."
      path="/downloads"
    />
    <Container>
      <Row>
        <Col xs={12} className="no_padding_right no_padding_smallscreen">
          <DownloadsPost
            title={props.downloads.title}
            content={props.downloads.content}
          />

          {props.downloadsPerTitle.map((post) => (
            <DownloadsPerTitlePost
              key={post.id}
              title={post.title}
              content={post.content}
            />
          ))}
        </Col>
      </Row>
    </Container>
    <Footer />
  </Fragment>
);

export default DownloadsLayout;
