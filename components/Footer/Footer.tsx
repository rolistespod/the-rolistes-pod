import { Fragment, useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classes from "./Footer.module.css";
import Follow from "./Follow/Follow";
import Watch from "./Watch/Watch";
import Listen from "./Listen/Listen";
import Contact from "./Contact/Contact";
import Support from "./Support/Support";
import Subscribe from "./Subscribe/Subscribe";

// Scroll distance, in pixels, after which the "back to top" bar slides in
const SCROLL_THRESHOLD = 50;

const Footer = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  // Listens to the scroll once, and stops listening when the footer is removed
  useEffect(() => {
    const updateIsScrolled = () =>
      setIsScrolled(window.scrollY > SCROLL_THRESHOLD);

    updateIsScrolled();
    window.addEventListener("scroll", updateIsScrolled, { passive: true });
    return () => window.removeEventListener("scroll", updateIsScrolled);
  }, []);

  return (
    <Fragment>
      <footer>
        <Container className={classes.footer}>
          <Row>
            <Col xs={12} lg={7}>
              <Listen />
            </Col>
            <Col xs={6} lg={true}>
              <Watch />
            </Col>
            <Col xs={6} lg={true}>
              <Follow />
            </Col>
          </Row>
          <Row>
            <Col xs={12} lg={7}>
              <Support />
            </Col>
            <Col xs={6} lg={true}>
              <Contact />
            </Col>
            <Col xs={6} lg={true}>
              <Subscribe />
            </Col>
          </Row>
        </Container>

        <div className={isScrolled ? classes.navUp : classes.navDown}>
          <a href="#top" className={classes.topLink}>
            <FontAwesomeIcon icon={faArrowUp} aria-hidden="true" />
          </a>
        </div>
      </footer>
    </Fragment>
  );
};

export default Footer;
