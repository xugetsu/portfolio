import React from 'react';
import styles from './Project1.css';
import game2048 from '../../../../Assets/Gifs/2048.gif';

const project1 = () => {
    return (
        <div className= {styles.Project1}>
            <img  src={game2048} alt='game 2048 ultra'/>
            <h2>2048 Game Ultra</h2>
            <p>This project was developped to put the knowledge and skills I've learned into practice</p>
            <p>Inspired by the original, I've developped the game logic from scratch using the JavaScript library React.js</p> 
        </div>
    );
}

export default project1;

