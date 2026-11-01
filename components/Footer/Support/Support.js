import { Fragment } from "react";
import { Row, Col } from "react-bootstrap";
import classes from "../Footer.module.css";
import { SOCIAL_LINKS } from "../../../helpers/social-links.js";

const paypalButton = "/images/Buttons_PayPal_BnW.png";
const patreonButton = "/images/Buttons_Patreon_BnW.png";
const DriveThruRPGButton = "/images/Buttons_DriveThruRPG_BnW.png";
const itchIOButton = "/images/Buttons_Itch.io_BnW.png";

const Support = (props) => {
  return (
    <Fragment>
      <Row>
        <Col xs={12}>
          <div className="item_box_footer">
            <h2 className="section_title_footer">Support Us</h2>
            <Row>
              <Col xs={6} md={3} lg={3}>
                <a
                  href={SOCIAL_LINKS.driveThruRPG}
                  className={classes.supportLink}
                >
                  <img
                    src={DriveThruRPGButton}
                    alt="Donate with Paypal"
                    aria-hidden="true"
                    width={620}
                    height={283}
                    loading="lazy"
                  />
                </a>
              </Col>

              <Col xs={6} md={3} lg={3}>
                <a href={SOCIAL_LINKS.itchIo} className={classes.supportLink}>
                  <img
                    src={itchIOButton}
                    alt="Support on ItchIo"
                    aria-hidden="true"
                    width={620}
                    height={283}
                    loading="lazy"
                  />
                </a>
              </Col>

              <Col xs={6} md={3} lg={3}>
                <a href={SOCIAL_LINKS.paypal} className={classes.supportLink}>
                  <img
                    src={paypalButton}
                    alt="Donate with Paypal"
                    aria-hidden="true"
                    width={620}
                    height={283}
                    loading="lazy"
                  />
                </a>
              </Col>

              <Col xs={6} md={3} lg={3}>
                <a href={SOCIAL_LINKS.patreon} className={classes.supportLink}>
                  <img
                    src={patreonButton}
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
        </Col>
      </Row>
    </Fragment>
  );
};

export default Support;
