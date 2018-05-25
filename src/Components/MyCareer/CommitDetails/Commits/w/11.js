import React from 'react';
import html5 from '../../../../../Assets/Icons/pngs/html5.png';
import burger from '../../../../../Assets/Images/burgerbuilder.PNG';
import styles from '../commonStyles.css';
import CustomScrollbars from '../../../../UI/CustomScrollbars/CustomScrollbars';

const commit1 = (props) => {
  return (
    <CustomScrollbars scrollId={props.hash} width = {'100%'} height={'450px'} zindex={2} >
      <article className={styles.Article}>
          <h2>Burger Builder App</h2>  
          <p>I have built this project throughout a  
              <a rel='noopener noreferrer' target='_blank' href='https://www.udemy.com/react-the-complete-guide-incl-redux/?couponCode=ACADEMIND_REACT'> React Course</a> made by the react developer 
              <a rel='noopener noreferrer' target='_blank' href='https://www.udemy.com/user/maximilian-schwarzmuller/'> Maximilian Schwarzmüller</a> 
          </p>
          <p>This project is a great evidence of my skills in using React with advanced features like form validation, routing, single page application, redux and how to reach out to the web with react applications.</p>
                
          <img  style={{display:'block',margin:'0 auto',maxHeight:'300px'}}  src={burger} alt='burger builder app'/>
        </article>
    </CustomScrollbars> 
  );
}
export default commit1;
