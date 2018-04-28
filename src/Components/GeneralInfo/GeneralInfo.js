import React from 'react';
import styles from './GeneralInfo.css';
import myPhoto from '../../Assets/Images/ali.jpg';
import gear from '../../Assets/Icons/svgs/gear.svg';
import Col2 from './Col2/Col2';
import AboutMe from './AboutMe/AboutMe';
import MyLogoRaw from '../MyLogoRAW/MyLogoRaw';
// import { Parallax, ParallaxProvider } from 'react-scroll-parallax';

const generalInfo = () => {
    
    return (
        <div className= {styles.GeneralInfo}>
                <div className= {styles.Logo} >
                        <MyLogoRaw colorFill1 = {'#23262b'} colorFill2 = {'#1f2227'} logoHeight = {900}/>
                </div>   
                <img  className= {styles.MyPhoto} src={myPhoto} height={200}/>
                <img  className= {styles.Gear} src={gear} height={800}/>
                <ul className= {styles.Info} >
                    <b>{'\{ '}</b>
                    <li><span>" FULL NAME " :</span> " Ali Othmani "<b> ,</b></li>
                    <li><span>" BORN " :</span> " [3, 9, 1992] "<b> ,</b></li>
                    <li><span>" EMAIL " :</span> " othmanixali@gmail.com "<b> ,</b></li>
                    <li><span>" ADDRESS " :</span> " Sousse - TN "<b> ,</b></li>
                    <li><span>" PHONE " :</span> " parseInt('175CC0A', 16) "</li>
                    <b>{' \}'}</b>
                </ul>
                <Col2 />
                <AboutMe /> 

        </div>
    );
}

export default generalInfo;