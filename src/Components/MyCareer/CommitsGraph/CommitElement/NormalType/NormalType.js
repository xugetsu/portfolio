import React from 'react';
import styles from './NormalType.css';
import Button from '../Button/Button';

const normalType = (props) =>{
    return (
        <div key={props.key} className= {styles.NormalType} style={props.inlineStyle}>
                <Button className = {styles.NormalButton}
                        content = {props.content} 
                        active  = {props.active}
                        clicked = {props.clicked} /> 
        </div>);
} 
export default normalType;
