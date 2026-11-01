import classes from "./NavigationItems.module.css";
import NavigationItem from "./NavigationItem/NavigationItem";
import Logo from "../../Logo/Logo";
// import patreonButton from '../../../public/images/become_a_patron_button_BnW - Black.png';
import Link from "next/link";
import { SOCIAL_LINKS } from "../../../helpers/social-links.js";

const patreonButton = "/images/become_a_patron_button_BnW - Black.png";

const NavigationItems = (props) => (
  <ul className={classes.NavigationItems}>
    <Link href="/" exact="true">
      <Logo />
    </Link>

    <span className={classes.SpacingNav} />
    <NavigationItem link="/news">News</NavigationItem>
    <span className={classes.VerticalLine} />
    <NavigationItem link="/podcast">Podcasts</NavigationItem>
    <span className={classes.VerticalLine} />
    <NavigationItem link="/paris_gondo">Our Games</NavigationItem>
    <span className={classes.VerticalLine} />
    <NavigationItem link="/about_us">About Us</NavigationItem>

    <a href={SOCIAL_LINKS.patreon} className={classes.supportLink}>
      <img
        src={patreonButton}
        alt="Support me on Patreon"
        aria-hidden="true"
        width={320}
        height={81}
      />
    </a>
  </ul>
);

export default NavigationItems;
