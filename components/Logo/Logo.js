import classes from "./Logo.module.css";

const imgLogo = "/images/Logo_Nav_Side.jpg";

const Logo = (props) => (
  <div className={classes.LogoSection}>
    <img
      src={imgLogo}
      alt="Logo"
      className={classes.LogoImg}
      width={600}
      height={130}
    />
  </div>
);

export default Logo;
