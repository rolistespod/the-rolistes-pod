import classes from "./Toolbar.module.css";

import NavigationItems from "../NavigationItems/NavigationItems";
import DrawerToggle from "../SideDrawer/DrawerToggle/DrawerToggle";
import { Container } from "react-bootstrap";

const Toolbar = (props) => (
  <header className={classes.Toolbar}>
    <Container>
      <nav>
        <div className={classes.DesktopOnly}>
          <NavigationItems />
        </div>
      </nav>

      <DrawerToggle clicked={props.drawerToggleClicked} />
    </Container>
  </header>
);

export default Toolbar;
