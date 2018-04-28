import React from 'react';
import styles from './Modules.css';
import npm from '../BannerLogo/BannerLogo/Logo/Icons/npm.png';
import gitlab from '../BannerLogo/BannerLogo/Logo/Icons/gitlab.png';
import redux from '../BannerLogo/BannerLogo/Logo/Icons/redux.png';
import webpack from '../BannerLogo/BannerLogo/Logo/Icons/svgs/webpack.svg';
import react from '../BannerLogo/BannerLogo/Logo/Icons/svgs/react.svg';
import git from '../BannerLogo/BannerLogo/Logo/Icons/svgs/git.svg';
import github from '../BannerLogo/BannerLogo/Logo/Icons/svgs/github.svg';
import reactRouter from '../BannerLogo/BannerLogo/Logo/Icons/svgs/react-router.svg';
import JavaScript from '../BannerLogo/BannerLogo/Logo/Icons/svgs/javaScript.svg';
import CSS3 from '../BannerLogo/BannerLogo/Logo/Icons/svgs/css3.svg';
import HTML5 from '../BannerLogo/BannerLogo/Logo/Icons/svgs/html5.svg';
import python from '../BannerLogo/BannerLogo/Logo/Icons/svgs/python.svg';

const modules = () => {
    return (
        <section className= {styles.Modules}>
            <ul>
                <li><img src={react} height={50} alt='react'/> <p>React</p></li>
                <li><img src={HTML5} height={50} alt='HTML5'/> <p>HTML5</p></li>
                <li><img src={CSS3} height={50} alt='CSS3'/> <p>CSS3</p></li>
                <li><img src={JavaScript} height={50} alt='JavaScript'/> <p>JavaScript</p></li>
                <li><img src={redux} height={50} alt='redux'/> <p>Redux</p></li>
                <li><img src={webpack} height={50} alt='webpack'/> <p>WebPack</p></li>
                <li><img src={npm} height={20} alt='npm'/> <p>npm</p> </li>
                <li><img src={git} height={50} alt='git'/> <p>GIT</p></li>
                <li><img src={python} height={50} alt='python'/> <p>python</p></li>
                <li><img src={gitlab} height={50} alt='gitlab'/> <p>gitlab</p></li>
                <li><img src={github} height={50} alt='github'/><p>github</p></li>
                <li><img src={reactRouter} height={40} alt='reactRouter'/><p>react-router</p></li>
                <li> <p>create-react-app</p></li>
                <li> <p>react-parallax</p></li>
                <li> <p>react-axios</p></li>
                <li> <p>react-axios</p></li>
            </ul>
        </section>
    );
}


export default modules;