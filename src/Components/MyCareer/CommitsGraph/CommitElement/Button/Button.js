import React from 'react';
import styles from './Button.css';

const button = (props) => {
    return (
        <div className = {props.className}>
            <span  className = {styles.Button}
                onClick = {props.clicked} 
                style = {{background:props.active ? '#0099ff':'#2b2b2b',
                            transform:props.active ? 'scale(1.2)':''}}>
                <div  className= {styles.Details} >
                    {props.content}
                </div>
            </span>
        </div>
    );
}


export default button;

