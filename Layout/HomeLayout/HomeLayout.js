import React, { Fragment } from "react";
import Footer from "../../components/Footer/Footer";
import { Container } from "react-bootstrap";
import Posts from "../../containers/Posts/Posts";
import Head from "next/head";

const HomeLayout = (props) => (
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
      <title>The Rolistes Podcast - Home</title>
      <meta name="description" content="" />
    </Head>
    <Container>
      <Posts {...props} type="LATEST" />
    </Container>
    <Footer />
  </Fragment>
);

export default HomeLayout;
