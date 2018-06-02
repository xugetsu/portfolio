import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk  from 'redux-thunk';

import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import careerReducer from './store/reducers/careerReducer';
import layoutReducer from './store/reducers/layoutReducer';

const rootReducer = combineReducers({
    career: careerReducer,
    layout: layoutReducer,
});


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const reduxStore = createStore( rootReducer,
                                composeEnhancers(
                                    applyMiddleware(thunk))
                    );

const app = () => {
  return (
    <Provider store = {reduxStore}>
        <App />
    </Provider>
    );
  };

ReactDOM.render(app() , document.getElementById('root'));
registerServiceWorker();