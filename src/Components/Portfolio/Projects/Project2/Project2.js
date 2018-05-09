import React from 'react';
import styles from './Project2.css';
import Loadable from 'react-loadable';
import Spinner from '../../../Spinner/Spinner';
import redirect from '../../../../Assets/Icons/svgs/externalink.svg';
const project1 = () => {
    const Gif = Loadable({
        loader: () => import('./GifBurger'),
        loading: () => Spinner,
        delay: 10,
        });

    return (
        <div className= {styles.Project1}>
            <div style={{height:'500px',width:'500px'}}>
                <Gif />
            </div>
            <article>
                <div className= {styles.TryIt}>
                    <a  rel='noopener noreferrer' target='_blank' href='https://xugetsu.github.io/Burger-Builder/'><img  src={redirect} /></a>
                    <span>try it!</span>
                </div>
                <h2>Burger Builder App</h2>  
                <p>This project was developed through a  
                    <a rel='noopener noreferrer' target='_blank' href='https://www.udemy.com/react-the-complete-guide-incl-redux/?couponCode=ACADEMIND_REACT'> React tutorial</a> made by the react developer 
                    <a rel='noopener noreferrer' target='_blank' href='https://www.udemy.com/user/maximilian-schwarzmuller/'> Maximilian Schwarzmüller</a> 
                </p>
                <p><b>Development State : </b>Under construction</p>
            </article>
        </div>
    );
}

export default project1;

