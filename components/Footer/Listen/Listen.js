import { Fragment } from "react";
import classes from "../Footer.module.css";
import { Row, Col } from "react-bootstrap";
import { SOCIAL_LINKS } from "../../../helpers/social-links.js";

const appleButton = "/images/Buttons_Apple_BnW.png";
const spotifyButton = "/images/Buttons_Spotify_BnW.png";
const stitcherButton = "/images/Buttons_Stitcher_BnW.png";
const podchaserButton = "/images/Buttons_Podchaser_BnW.png";
const RSSButton = "/images/Buttons_RSS_BnW.png";

const Listen = (props) => {
  return (
    <Fragment>
      <div className="item_box_footer">
        <Row>
          <Col xs={12}>
            <h2 className="section_title_footer">Listen</h2>
          </Col>
        </Row>
        <Row>
          <Col xs={6} md={true}>
            <a
              href={SOCIAL_LINKS.apple}
              className={classes.supportLink}
            >
              <img
                src={appleButton}
                alt="Donate with Paypal"
                aria-hidden="true"
                width={620}
                height={283}
                loading="lazy"
              />
            </a>
          </Col>

          <Col xs={6} md={true}>
            <a
              href={SOCIAL_LINKS.spotify}
              className={classes.supportLink}
            >
              <img
                src={spotifyButton}
                alt="Support on ItchIo"
                aria-hidden="true"
                width={620}
                height={283}
                loading="lazy"
              />
            </a>
          </Col>

          <Col xs={6} md={true}>
            <a
              href={SOCIAL_LINKS.stitcher}
              className={classes.supportLink}
            >
              <img
                src={stitcherButton}
                alt="Donate with Paypal"
                aria-hidden="true"
                width={620}
                height={283}
                loading="lazy"
              />
            </a>
          </Col>

          <Col xs={6} md={true}>
            <a
              href={SOCIAL_LINKS.podchaser}
              className={classes.supportLink}
            >
              <img
                src={podchaserButton}
                alt="Support me on Patreon"
                aria-hidden="true"
                width={620}
                height={283}
                loading="lazy"
              />
            </a>
          </Col>

          <Col xs={6} md={true}>
            <a
              href={SOCIAL_LINKS.rss}
              className={classes.supportLink}
            >
              <img
                src={RSSButton}
                alt="Support me on Patreon"
                aria-hidden="true"
                width={620}
                height={283}
                loading="lazy"
              />
            </a>
          </Col>
        </Row>
      </div>
    </Fragment>
  );
};

export default Listen;
