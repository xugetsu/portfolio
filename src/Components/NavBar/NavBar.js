import React from 'react';
import styles from './NavBar.css';
import RawLogo from './MyLogoRaw2';
const navBar = () => {
        return(
            <div>
                <div className={styles.RawLogoWrapper}> 
                    <RawLogo className={styles.RawLogo}logoHeight={130}/>
                </div>
                <nav className={styles.NavBar}>
                    <a href='/'>Home</a>
                    <a href='/'>About</a>
                    <a href='/'>Portfolio</a>
                </nav>    
            </div>
        );
    
}

export default navBar;