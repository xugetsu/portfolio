import React from 'react';
import styles from './NavBar.css'
const navBar = () => {
        return(
            <nav className={styles.NavBar}>
                <a href='/'>Home</a>
                <a href='/'>About</a>
                <a href='/'>Portfolio</a>
            </nav>    
        );
    
}

export default navBar;