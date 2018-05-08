import React from 'react';
import styles from './SideDrawer.css';
import Backdrop from '../Backdrop/Backdrop';
import A from '../../../hoc/A/A';
import MyLogo from '../../MyLogoRAW/MyLogo';

const sideDrawer = (props) => {
    const SideDrawerStyles = [styles.SideDrawer, (props.open? styles.Open : styles.Close)].join(' ');
    return (
        <A>
             <Backdrop show={props.open} clicked={props.closeSideDrawer}/>
            <div  className={SideDrawerStyles}>
                <nav>
                    <button onClick={() => props.navigateTo(0)}>Home</button>
                    <button onClick={() => props.navigateTo(1)}>My Career</button>
                    <button onClick={() => props.navigateTo(2)}>Competence</button>
                    <button onClick={() => props.navigateTo(3)}>Portfolio</button>
                    <button onClick={() => props.navigateTo(4)}>Contact</button>
                </nav>
                <div className= {styles.MyLogoRaw}>
                    <MyLogo height = {200} width={250} id={2}
                                openTagStopColor1='#2989d8'  openTagStopColor2='#2bade7'
                                closeTagStopColor1='#00bcf2' closeTagStopColor2='#2bade7'
                                slashStopColor1='#ebebeb'    slashStopColor2='#888888' />
                </div>
            </div>
        </A>
    );
};

export default sideDrawer;