import React from 'react';
import styles from './NormalType.css';
import Button from '../Button/Button';

const normalType = (props) =>{
        const _Button = !props.Btn ? null: <Button className = {styles.NormalButton}
                                                content = {props.content} 
                                                active  = {props.active}
                                                clicked = {props.clicked} /> 
    return (
        <div key={props.key} className= {styles.NormalType} style={props.inlineStyle}>
                {_Button}
        </div>);
} 
export default normalType;
