import { Fragment } from "react";
import classes from "./Banner.module.css";

const bannerImg = "/images/rollinKunzArt/Banner.jpg";

const Banner = (props) => (
  <Fragment>
    <img
      src={bannerImg}
      alt="banner"
      className={classes.banner}
      width={1500}
      height={500}
    />
  </Fragment>
);

export default Banner;
