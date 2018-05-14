import React from 'react';
import styles from './NormalType.css';
import Button from '../Button/Button';

const normalType = (props) => {
        let button = null;
        if(props.Btn){
            let position = {left:'50%'};
            switch (props.Btn){
                case 'start':  position = {left:'0px'};break;
                case 'end':    position = {right:'0px'};break;
                default:break;
            }
            button = <Button  className = {styles.NormalButton}
                              position = {position}
                              content = {props.content} 
                              active  = {props.active}
                              clicked = {props.clicked} /> ;
        }
    return (
        <div className = {styles.NormalType} style= {props.inlineStyle}>
                {button}
        </div>);
} 
export default normalType;
