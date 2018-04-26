import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { ParallaxProvider } from 'react-scroll-parallax';

const app = () => {
        return (
            <ParallaxProvider>
                <App />
            </ParallaxProvider>);
        };

ReactDOM.render(app() , document.getElementById('root'));
registerServiceWorker();