import React from 'react';
import styles from './Button.css';

const button = (props) => {
    const btnStyles = props.active ? styles.Active : styles.Button;

    return (
        <div className = {props.className} style={props.position}>
            <span  className = {btnStyles}
                onClick = {props.clicked}>
                <div  className= {styles.Details}>
                    {props.content}
                </div>
            </span>
        </div>
    );
}


export default button;

