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
                    <a href='#GeneralInfo'>Home</a>
                    <a href='#GitMyCareer'>My Career</a>
                    <a href='#BannerLogo'>Portfolio</a>
                </nav>    
            </div>
        );
    
}

export default navBar;