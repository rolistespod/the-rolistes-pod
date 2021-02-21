import React from 'react';
import { Route, Switch } from 'react-router';
 
export default (
    <Switch>
	    <Route path="/news/:pageId"/> 
        <Route path="/news"/>
        <Route path="/:year/:month/:day/:pageId"/>          
        <Route path="/podcast" />          
        <Route path="/paris_gondo/:pageId" />     
        <Route path="/paris_gondo" />
        <Route path="/about_us" />
        <Route path="/" />     
    </Switch>
);