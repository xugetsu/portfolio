import React from 'react';
import classes from './Spinner.css';

const spinner = (props) => {
    
    if (props.error) {
        console.log(props.error);
        // When the loader has errored
        return <div>Error!</div>;
    }else if(props.timedOut) {
        // When the loader has taken longer than the timeout
        return <div>Taking a long time...</div>;
    }else if(props.pastDelay) {
        // When the loader has taken longer than the delay
        return (<div className={classes.Spinner}>
                    <div className={classes.Loader}></div>
                    <p>Loading...</p>
                </div>);       
    }else{
        // When the loader has just started
         return null;
    }
};

export default spinner;