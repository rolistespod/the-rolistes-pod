import { Fragment } from "react";
import DownloadsPost from "../../components/DownloadsPost/DownloadsPost";
import DownloadsPerTitlePost from "../../components/DownloadsPerTitlePost/DownloadsPerTitlePost";
import { Col, Container, Row } from "react-bootstrap";
import Footer from "../../components/Footer/Footer";
import Head from "next/head";
import globalClasses from "../../styles/App.module.css";

const DownloadsLayout = (props) => (
  <Fragment>
    <Head>
      <title>The Rolistes Podcast - Downloads</title>
      <meta name="description" content="" />
    </Head>
    <Container>
      <Row>
        <Col
          xs={12}
          className={[
            globalClasses.no_padding_right,
            globalClasses.no_padding_smallscreen,
          ].join(" ")}
        >
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
