import { Fragment } from "react";
import Head from "next/head";
import Link from "next/link";
import { Container } from "react-bootstrap";
import Footer from "../components/Footer/Footer";

function NotFoundPage() {
  return (
    <Fragment>
      <Head>
        <title>The Rolistes Podcast - Page not found</title>
      </Head>
      <Container>
        <div className="item_box">
          <h1 className="section_title">Page not found</h1>
          <p>Sorry, this page doesn&apos;t exist or has moved.</p>
          <p>
            <Link href="/">Back to the home page</Link> or{" "}
            <Link href="/podcast">browse all the episodes</Link>.
          </p>
        </div>
      </Container>
      <Footer />
    </Fragment>
  );
}

export default NotFoundPage;
