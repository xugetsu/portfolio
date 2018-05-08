import React from 'react';
import styles from './NavBar.css';
import MyLogo from '../MyLogoRAW/MyLogo';
const navBar = (props) => {
        const logoWrapperStyles = [styles.LogoWrapper];
        const headerStyles = [''];
        if(props.shrink){
            logoWrapperStyles.push(styles.ShrinkLogo);
            headerStyles.push(styles.Shrink);
        }
        return(
            <header className ={headerStyles.join(' ')}>
                <div className={logoWrapperStyles.join(' ')} onClick={() => props.navigateTo(0)} >
                    <span className={styles.RawLogo} > <MyLogo  height = {40} width={50} id={2}
                            openTagStopColor1='#2989d8'  openTagStopColor2='#2bade7'
                            closeTagStopColor1='#00bcf2' closeTagStopColor2='#2bade7'
                            slashStopColor1='#ebebeb'    slashStopColor2='#888888' />
                    </span>
                </div>
                <nav className={styles.NavBar}>
                    <button onClick={() => props.navigateTo(0)}>Home</button>
                    <button onClick={() => props.navigateTo(1)}>My Career</button>
                    <button onClick={() => props.navigateTo(2)}>Competence</button>
                    <button onClick={() => props.navigateTo(3)}>Portfolio</button>
                    <button onClick={() => props.navigateTo(4)}>Contact</button>
                </nav>    
            </header>
        );
    
}

export default navBar;

                //    <a href='#GeneralInfo'/* onClick={() => props.navigateTo(0)}*/>Home</a>
                //     <a href='#MyCareer'/* onClick={() => props.navigateTo(1)}*/>My Career</a>
                //     <a href='#Competence' /* onClick={() => props.navigateTo(2)}*/>Competence</a>
                //     <a href='#Portfolio' /* onClick={() => props.navigateTo(2)}*/>Portfolio</a>
                //     <a href='#Contact'  /*onClick={() => props.navigateTo(2)}*/>Contact</a> 