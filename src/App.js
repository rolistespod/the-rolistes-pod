import React, { Suspense, useEffect } from 'react';
import Layout from './hoc/Layout/Layout';
import * as actions from './store/actions/index';
import { connect } from 'react-redux';

import { Route, Switch, withRouter } from 'react-router-dom';
import './App.module.css';
import Popup from './components/UI/Popup/Popup';
import Spinner from './components/UI/Spinner/Spinner';


const Home = React.lazy(()=>{
  return import ('./hoc/Layout/HomeLayout/HomeLayout');
});

const Post = React.lazy(()=>{
  return import ('./hoc/Layout/PostLayout/PostLayout');
});

const News = React.lazy(()=>{
  return import ('./hoc/Layout/NewsLayout/NewsLayout');
});

const Gondo = React.lazy(()=>{
  return import ('./hoc/Layout/Gondo/GondoLayout');
});

const Podcast = React.lazy(()=>{
  return import ('./hoc/Layout/PodcastLayout/PodcastLayout');
});

const AboutUs = React.lazy(()=>{
  return import ('./hoc/Layout/AboutUsLayout/AboutUsLayout');
});


const App = props => {

  const { onFetchPosts, onSetShowPopup } = props;

  const showPopup = props.showPopup;
  // const showPopup = true;

    useEffect(()=> {
      onFetchPosts(); 
    }, []);   

  let routes = (
    <Switch>
      <Route path="/news/:pageId" render={(props) =>  <Post {...props} type="FULLPOST"/>}/> 
      <Route path="/news" render={(props) =>  <News {...props}/>} />
      <Route path="/:year/:month/:day/:pageId" render={(props) =>  <Post {...props} type="FULLPOST"/>}/>          
      <Route path="/podcast" exact render={(props) =>  <Podcast {...props}/>}/>          
      <Route path="/paris_gondo/:pageId" render={(props) =>  <Post {...props } type="FULLPOST"/>} />     
      <Route path="/paris_gondo" render={(props) =>  <Gondo {...props }/>} />
      <Route path="/about_us" render={(props) =>  <AboutUs {...props}/>}/>
      <Route path="/" render={(props) =>  <Home {...props}/>}/>            
    </Switch>
  );

  return (
      <Layout>
        {showPopup ? <Popup/>: null}
        <Suspense fallback={<Spinner/>}>
          {routes}          
        </Suspense>        
      </Layout>
  );
}

const mapDispatchToProps = dispatch => {
  return {
      onFetchPosts: () => dispatch (actions.fetchPosts()),
      onSetShowPopup: (showPopup) => dispatch (actions.setShowPopup(showPopup)) 
  };
};

const mapStateToProps = (state) => {
  return {
      showPopup: state.global.showPopup
  };
};

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(App));
