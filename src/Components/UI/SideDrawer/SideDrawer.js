import React from 'react';
import styles from './SideDrawer.css';
import Backdrop from '../../UI/Backdrop/Backdrop';
import A from '../../../hoc/A/A';

const sideDrawer = (props) => {
    const SideDrawerStyles = [styles.SideDrawer, (props.open? styles.Open : styles.Close)].join(' ');
    return (
        <A>
            {/* <Backdrop show={props.open} clicked={props.closeSideDrawer}/> */}
            <div  className={SideDrawerStyles}>
                <nav>
                </nav>
            </div>
        </A>
    );
};

export default sideDrawer;