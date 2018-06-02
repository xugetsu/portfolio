import React from 'react';
import styles from './NavBar.css';
import MyLogo from '../MyLogoRAW/MyLogo';
const navBar = (props) => {
    
    const logoWrapperStyles = [styles.LogoWrapper];
    const SideDrawerBtnStyles = [styles.SideDrawerBtn];
    const headerStyles = [''];

    if(props.shrink){
        logoWrapperStyles.push(styles.ShrinkLogo);
        headerStyles.push(styles.Shrink);
        SideDrawerBtnStyles.push(styles.SideDrawerBtnShrink);
        
    }
    const buttonStyles = (i) => {
        if(props.currentActive === i){
             return [styles.NavButton, styles.ActiveNavButton].join(' ');
        }else{
            return styles.NavButton;
        }
    };

    return(
        <header className ={headerStyles.join(' ')}>
            <div className={logoWrapperStyles.join(' ')} onClick={() => props.navigateTo(0)} >
                <span> 
                    <MyLogo  height = {40} width={50} id={2}
                        openTagStopColor1='#2989d8'  openTagStopColor2='#2bade7'
                        closeTagStopColor1='#00bcf2' closeTagStopColor2='#2bade7'
                        slashStopColor1='#ebebeb'    slashStopColor2='#888888' />
                </span>
            </div>
            <nav className={styles.NavBar}>
                <button className={buttonStyles(0)} onClick={() => props.navigateTo(0)} >Home</button>
                <button className={buttonStyles(1)} onClick={() => props.navigateTo(1)}>My Career</button>
                <button className={buttonStyles(2)} onClick={() => props.navigateTo(2)}>Competence</button>
                <button className={buttonStyles(3)} onClick={() => props.navigateTo(3)}>Portfolio</button>
                <button className={buttonStyles(4)} onClick={() => props.navigateTo(4)}>Contact</button>
            </nav>
            <div className={SideDrawerBtnStyles.join(' ')} onClick = {props.showDrawer}>
                <div></div>
                <div></div>
                <div></div>
            </div>    
        </header>
    );

}

export default navBar;