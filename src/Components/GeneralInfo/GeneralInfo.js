import React from 'react';
import styles from './GeneralInfo.css';
import myPhoto from '../../Assets/Images/ali.jpg';
import LogoFragment1 from '../LogoFragments/LogoFragment1/LogoFragment1';
import LogoFragment2 from '../LogoFragments/LogoFragment2/LogoFragment2';
import LogoFragment3 from '../LogoFragments/LogoFragment3/LogoFragment3';
import gitlab from '../BannerLogo/BannerLogo/Logo/Icons/gitlab.png';
import github from '../BannerLogo/BannerLogo/Logo/Icons/svgs/github.svg';
import fb from '../BannerLogo/BannerLogo/Logo/Icons/svgs/fb.svg';
import linkedin from '../BannerLogo/BannerLogo/Logo/Icons/svgs/linkedin.svg';
import gplus from '../BannerLogo/BannerLogo/Logo/Icons/svgs/gplus.svg';
import MyLogoRaw from '../MyLogoRAW/MyLogoRaw';
const generalInfo = () => {
    const iconSize = 35;
    return (
        <div className= {styles.GeneralInfo}>
            <div className= {styles.Logo} >
                <MyLogoRaw colorFill1 = {'#23262b'} colorFill2 = {'#1f2227'} logoHeight = {900}/>
            </div>
            <img  className= {styles.MyPhoto} src={myPhoto} height={200}/>
            <ul className= {styles.Info} >
                <b>{'\{ '}</b>
                <li><span>" FULL NAME " :</span> " Ali Othmani "<b> ,</b></li>
                <li><span>" BORN " :</span> " [3, 9, 1992] "<b> ,</b></li>
                <li><span>" EMAIL " :</span> " othmanixali@gmail.com "<b> ,</b></li>
                <li><span>" ADRESS " :</span> " Susah - TN "<b> ,</b></li>
                <li><span>" PHONE " :</span> " parseInt('175CC0A', 16) "</li>
                <b>{' \}'}</b>
            </ul>
            <div  className= {styles.Col2}>
                <h1>Hi, I'm Ali Othmani</h1>
                <h3><span><LogoFragment1/></span>
                       React.js Developper
                    <span><LogoFragment3/></span>
                       Mechatronic Engineer
                    <span><LogoFragment2/></span>
                </h3>
                <ul  className= {styles.Social}>
                    <li><a href='https://www.linkedin.com/in/ali-othmani-11873707/'><img src={linkedin} height={iconSize} alt='linkedin'/></a></li>
                    <li><a href='https://gitlab.com/Xugetsu'><img src={gitlab} height={iconSize} alt='gitlab'/></a></li>
                    <li><a href='https://github.com/xugetsu'><img src={github} height={iconSize} alt='github'/></a></li>
                    <li><a href='https://www.facebook.com/people/Othmani-Ali/100007321429385'><img src={fb} height={iconSize} alt='Facebook'/></a></li>
                    <li><a href='https://plus.google.com/115571394054300448150'><img src={gplus} height={iconSize} alt='google Plus'/></a></li>
                </ul>
            </div>
            
            <div className= {styles.DetailedInfo}>
                <h1>About Me</h1>
                <ul>
                    <li><span><LogoFragment2/></span>I'm a React Js web developer and a mechatronic engineer.</li>
                    <li><span><LogoFragment2/></span>I studied at the National School of Engineering of Sousse as a mechatronic engineer and after graduation, I started learning about web development..</li>
                    <li><span><LogoFragment2/></span>I was and still very passionate about web development and I have made a firm decision to keep going in this career path beleiving that someday I can benefit from both of my specialities together !! </li>
                </ul>
            </div>
        </div>
    );
}

export default generalInfo;