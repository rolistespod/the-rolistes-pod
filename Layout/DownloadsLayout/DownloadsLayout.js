import { Fragment } from "react";
import Posts from "../../containers/Posts/Posts";
import { Col, Container, Row } from "react-bootstrap";
import Footer from "../../components/Footer/Footer";
import Head from "next/head";
import globalClasses from "../../styles/App.module.css";

const DownloadsLayout = (props) => (
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
          <Posts {...props} type="DOWNLOADS" />

          {/* <div className={globalClasses.item_box_left}> */}
          <Posts {...props} type="DOWNLOADSPERTITLE" />
          {/* </div> */}
        </Col>
      </Row>
    </Container>
    <Footer />
  </Fragment>
);

export default DownloadsLayout;
