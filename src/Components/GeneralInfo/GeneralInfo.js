import React from 'react';
import styles from './GeneralInfo.css';
import myPhoto from '../../Assets/Images/ali.jpg';
// import gear from '../../Assets/Icons/svgs/gear.svg';
import Col2 from './Col2/Col2';
import AboutMe from './AboutMe/AboutMe';
import MyLogo from '../MyLogoRAW/MyLogo';
// import { Parallax, ParallaxProvider } from 'react-scroll-parallax';

const generalInfo = () => {
    
    return (

        <div id='GeneralInfo' className= {styles.GeneralInfoWrapper}>
            <div className= {styles.SkewMe}></div>
            {/* <img  draggable = {false} alt='' className= {styles.Gear} src={gear} height={800}/> */}
            <div className= {styles.GeneralInfo}>
                    <div className= {styles.Logo} >
                        <MyLogo height = {400} width={500} id={1}
                                openTagStopColor1='#202324'  openTagStopColor2='#202324'
                                closeTagStopColor1='#1f2324' closeTagStopColor2='#202324'
                                slashStopColor1='#202324'    slashStopColor2='#36383a9a' />
                    </div>   
                    <img  className= {styles.MyPhoto} alt='ali othmani' src={myPhoto} height={200}/>
                    <ul className= {styles.Info} >
                        <li><b>{'"general-Info" : {'}</b></li>
                        <li><span>" FULL NAME " :</span> " Ali Othmani "<b> ,</b></li>
                        <li><span>" BORN " :</span> " [3, 9, 1992] "<b> ,</b></li>
                        <li><span>" EMAIL " :</span> " othmanixali@gmail.com "<b>,</b></li>
                        <li><span>" ADDRESS " :</span> " Sousse - TN "<b> ,</b></li>
                        <li><span>" PHONE " :</span> "24497162"</li>{/*parseInt('175CC0A', 16)*/}
                        <li><b>{'}'}</b></li>
                    </ul>
                    <Col2 />
                    <AboutMe /> 
            </div>
        </div>
    );
}

export default generalInfo;