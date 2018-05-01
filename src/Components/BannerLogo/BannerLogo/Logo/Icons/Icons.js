import React from 'react';
import styles from './Icons.css';
import reactpng from '../../../../../Assets/Icons/pngs/react2.png';
import html5 from '../../../../../Assets/Icons/svgs/html5.svg';
import css3 from '../../../../../Assets/Icons/svgs/css3.svg';
import javaScript from '../../../../../Assets/Icons/svgs/javaScript.svg';
import python from '../../../../../Assets/Icons/svgs/python.svg';
import python2 from '../../../../../Assets/Icons/svgs/python2.svg';
import redux from '../../../../../Assets/Icons/svgs/redux.svg';


const icons = (props) => {

  const lolipop = [
        <img src={reactpng} alt={'react'} style={{width:props.width/1.4}}/>, 
        <img src={html5} alt={'HTML5'} style={{width:props.width/1.8}}/>, 
        <img src={redux} alt={'redux'} style={{width:props.width/1.4}}/>, 
        <img src={css3} alt={'CSS3'} style={{width:props.width/1.8}}/>, 
        [
          <img key = {'1'} src={python2} alt={'Python2'} style={{position:'absolute',bottom:'-50%',left:'-25%',width:props.width/1.2}}/>, 
          <img key = {'2'} src={python} alt={'Python2'} style={{width:props.width/1.8}}/>
        ], 
        <img src={javaScript} alt={'JavaScript'} style={{width:props.width/1.8}}/>, 

        ];

  return(
      <div  className ={styles.Icons} 
            style={{right:-props.width/4}} 
            onAnimationIteration = {props.switchIcon}>
        {lolipop[props.iconIndex]}
      </div>
  );
}
export default icons;