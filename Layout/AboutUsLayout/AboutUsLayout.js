import { Fragment } from "react";
import AboutPost from "../../components/AboutPost/AboutPost";
import TeamPost from "../../components/TeamPost/TeamPost";
import { Col, Container, Row } from "react-bootstrap";
import Footer from "../../components/Footer/Footer";
import Head from "next/head";
import globalClasses from "../../styles/App.module.css";

const AboutUsLayout = (props) => (
  <Fragment>
    <Head>
      <title>The Rolistes Podcast - About Us</title>
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
          <AboutPost
            title={props.about.title}
            content={props.about.content}
          />

          <div className={globalClasses.item_box_left}>
            <h1
              className={[
                globalClasses.section_title,
                globalClasses.section_title_article,
              ].join(" ")}
            >
              The Team
            </h1>
            {props.theTeam.map((member) => (
              <TeamPost
                key={member.id}
                cover={member.cover}
                title={member.title}
                content={member.content}
              />
            ))}
          </div>
        </Col>
      </Row>
    </Container>
    <Footer />
  </Fragment>
);

export default AboutUsLayout;
