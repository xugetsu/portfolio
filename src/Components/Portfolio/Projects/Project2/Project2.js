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
            <article className= {styles.Article}>
                <div className= {styles.TryIt}>
                    <a  rel='noopener noreferrer' target='_blank' href='https://xugetsu.github.io/Burger-Builder/'><img  src={redirect} />
                    <span>proceed to the project</span></a>
                </div>
                <h2>Burger Builder App</h2>  
                <p>I have built this project throughout a  
                    <a rel='noopener noreferrer' target='_blank' href='https://www.udemy.com/react-the-complete-guide-incl-redux/?couponCode=ACADEMIND_REACT'> React Course</a> made by the react developer 
                    <a rel='noopener noreferrer' target='_blank' href='https://www.udemy.com/user/maximilian-schwarzmuller/'> Maximilian Schwarzmüller</a> 
                </p>
                <p>This project is a great evidence of my skills in using React with advanced features like form validation, routing, single page application, redux and how to reach out to the web with react applications.</p>
                <p><b>Development State : </b>Under construction</p>
            </article>
        </div>
    );
}

export default project1;

