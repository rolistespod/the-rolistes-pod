import { Fragment } from "react";
import {
  faFacebookF,
  faMastodon,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classes from "../Footer.module.css";
import { Row, Col } from "react-bootstrap";
import { SOCIAL_LINKS } from "../../../helpers/social-links.js";

const Follow = (props) => {
  return (
    <Fragment>
      <div className="item_box_footer">
        <Row>
          <Col xs={12}>
            <h2 className="section_title_footer">Follow</h2>
          </Col>
        </Row>
        <Row>
          <Col xs={4}>
            <a href={SOCIAL_LINKS.facebook} className={classes.FooterLink}>
              <span>
                <FontAwesomeIcon icon={faFacebookF} aria-hidden="true" />
              </span>
            </a>
          </Col>

          <Col xs={4}>
            <a href={SOCIAL_LINKS.twitter} className={classes.FooterLink}>
              <span>
                <FontAwesomeIcon icon={faTwitter} aria-hidden="true" />
              </span>
            </a>
          </Col>

          <Col xs={4}>
            <a href={SOCIAL_LINKS.mastodon} className={classes.FooterLink}>
              <span>
                <FontAwesomeIcon icon={faMastodon} aria-hidden="true" />
              </span>
            </a>
          </Col>
        </Row>
      </div>
    </Fragment>
  );
};

export default Follow;
