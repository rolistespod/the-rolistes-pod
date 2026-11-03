import { Fragment } from "react";
import AboutPost from "../../components/AboutPost/AboutPost";
import TeamPost from "../../components/TeamPost/TeamPost";
import { Col, Container, Row } from "react-bootstrap";
import Footer from "../../components/Footer/Footer";
import Seo from "../../components/Seo/Seo";

const AboutUsLayout = (props) => (
  <Fragment>
    <Seo
      title="The Rolistes Podcast - About Us"
      description="Meet The Rolistes, the London-based team behind The Rolistes Podcast, its tabletop RPG shows and games."
      path="/about_us"
    />
    <Container>
      <Row>
        <Col xs={12} className="no_padding_right no_padding_smallscreen">
          <AboutPost title={props.about.title} content={props.about.content} />

          <div className="item_box_left">
            <h1 className="section_title section_title_article">The Team</h1>
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
