import React, { useState } from 'react';
import Aux from '../Auxiliary/Auxiliary';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';


const Layout = props => {

    const [sideDrawerIsVisible, setSideDrawerIsVisible] = useState(false);

    const sideDrawerClosedHandler = () => {
        setSideDrawerIsVisible(false);
    }

    const sideDrawerToggleHandler = () => {
        setSideDrawerIsVisible(!sideDrawerIsVisible);
    }

    return (
        <Aux id="top">
            <Toolbar drawerToggleClicked = {sideDrawerToggleHandler}/>
            <SideDrawer open={sideDrawerIsVisible} closed={sideDrawerClosedHandler}/>

            <main>                
                {props.children}           
            </main>  
        </Aux>
    )
}


export default Layout;
