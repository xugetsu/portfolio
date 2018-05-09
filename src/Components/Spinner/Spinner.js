import React from 'react';
import classes from './Spinner.css';

const spinner = (props) => {
    
    if (props.error) {
        console.log(props.error);
        // When the loader has errored
        return <div>Error!</div>;
    }else if(props.timedOut) {
        // When the loader has taken longer than the timeout
        return (<div className={classes.Spinner}>
                    <div className={classes.Loader}></div>
                    <div>Taking a long time to load ...</div>
                </div>);
    }else if(props.pastDelay) {
        // When the loader has taken longer than the delay
        return (<div className={classes.Spinner}>
                    <div className={classes.Loader}></div>
                    <p>{props.send? 'Sending...' : 'Loading...'}</p>
                </div>);       
    }else{
        // When the loader has just started
         return null;
    }
};

export default spinner;