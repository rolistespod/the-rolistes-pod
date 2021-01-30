import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './assets/fonts/BellGothicStd-Black.otf';
import './assets/fonts/BellGothicStd-Bold.otf';
import './assets/fonts/BellGothicStd-Light.otf';
import './assets/fonts/Johnston100-Light.ttf';
import './assets/fonts/Johnston100-Medium.ttf';
import './assets/fonts/Johnston100-Regular.ttf';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import postsReducer from './store/reducers/posts';
import globalReducer from './store/reducers/global';
// import 'bootstrap/dist/css/bootstrap.min.css';

// const composeEnhancers = process.env.REACT_APP_NODE_ENVX === "development" ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null || compose;
const composeEnhancers =  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const rootReducer = combineReducers({
  posts: postsReducer,
  global: globalReducer
})

const store =  createStore(rootReducer, composeEnhancers(
  applyMiddleware(thunk)
));

const app = (
  <React.StrictMode>
    <Provider store={store}> 
      <BrowserRouter basename="/the-rolistes-pod">
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>

)

ReactDOM.render(
  app,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
