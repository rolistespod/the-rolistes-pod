import { Fragment } from "react";
import {
  faTwitch,
  faTiktok,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classes from "../Footer.module.css";
import { Row, Col } from "react-bootstrap";
import { SOCIAL_LINKS } from "../../../helpers/social-links.js";

const Watch = (props) => {
  return (
    <Fragment>
      <div className="item_box_footer">
        <Row>
          <Col xs={12}>
            <h2 className="section_title_footer">Watch</h2>
          </Col>
        </Row>
        <Row>
          <Col xs={4}>
            <a
              href={SOCIAL_LINKS.youtube}
              className={classes.FooterLink}
            >
              <span>
                <FontAwesomeIcon icon={faYoutube} aria-hidden="true" />
              </span>
            </a>
          </Col>

          <Col xs={4}>
            <a
              href={SOCIAL_LINKS.twitch}
              className={classes.FooterLink}
            >
              <span>
                <FontAwesomeIcon icon={faTwitch} aria-hidden="true" />
              </span>
            </a>
          </Col>

          <Col xs={4}>
            <a
              href={SOCIAL_LINKS.tiktok}
              className={classes.FooterLink}
            >
              <span>
                <FontAwesomeIcon icon={faTiktok} aria-hidden="true" />
              </span>
            </a>
          </Col>
        </Row>
      </div>
    </Fragment>
  );
};

export default Watch;
