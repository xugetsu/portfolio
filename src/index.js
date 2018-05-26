import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import { thunk } from 'redux-thunk';

import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import careerReducer from './store/reducers/careerReducer';

const rootReducer = combineReducers({
    career: careerReducer,
});

//const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // required for redux devTool
const store = createStore(rootReducer,  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()); //composeEnhancers(applyMiddleware(logger, thunk)));


const app = () => {
  return (
    <Provider store = {store}>
        <App />
    </Provider>
    );
  };

ReactDOM.render(app() , document.getElementById('root'));
registerServiceWorker();