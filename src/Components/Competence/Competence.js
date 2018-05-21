import React from 'react';
import styles from './Competence.css';
// import GridLayout from 'react-grid-layout';
import npm from '../../Assets/Icons/svgs/npm.svg';
import gitlab from '../../Assets/Icons/pngs/gitlab.png';
import redux from '../../Assets/Icons/pngs/redux.png';
import webpack from '../../Assets/Icons/svgs//webpack.svg';
import react from '../../Assets/Icons/svgs//react.svg';
import git from '../../Assets/Icons/svgs//git.svg';
import github from '../../Assets/Icons/svgs//github.svg';
// import reactRouter from '../../Assets/Icons/svgs//react-router.svg';
import JavaScript from '../../Assets/Icons/svgs/javaScript.svg';
import CSS3 from '../../Assets/Icons/svgs/css3.svg';
import HTML5 from '../../Assets/Icons/svgs/html5.svg';
import python from '../../Assets/Icons/svgs/python.svg';
import java from '../../Assets/Icons/svgs/java.svg';
import wolfram from '../../Assets/Icons/pngs/wolfram.png';

const  competence  = () => {
    // layout is an array of objects, see the demo for more complete usage
    // const layout = [
    //                 {i: 'b', x: 0, y: 0, w: 3, h: 4, static: true},
    //                 {i: 'g', x: 3, y: 0, w: 3, h: 4, static: true},
    //                 {i: 'r', x: 6, y: 0, w: 3, h: 4, static: true},
    //                 {i: 'y', x: 1, y: 4, w: 7, h: 3, static: true},
    //];
    return (
        <div id='Competences' className={styles.Competence}>
            <div className={styles.Git}>
                <h2>Git and hosting services</h2>
                <ul> 
                    <li><img src={git}      alt='git'/> <p>GIT</p></li>
                    <li><img src={gitlab}   alt='gitlab'/> <p>gitlab</p></li>
                    <li><img src={github}   alt='github'/><p>github</p></li>  
                </ul>              
            </div>
            <div className={styles.Basic}>
                <h2>Basic Web Developpment Languages</h2>
                <ul> 
                    <li><img src={HTML5}  alt='HTML5'/></li>
                    <li><img src={CSS3}  alt='CSS3'/></li>
                    <li><img src={JavaScript}   alt='JavaScript'/></li>
                </ul>
            </div>       
            <div className={styles.Other}>
                <h2>Other Programming Languages</h2>
                <ul> 
                    <li><img src={java}  alt='Java'/> <p>Java</p></li>
                    <li><img src={python}  alt='Python'/> <p>Python</p></li>
                    <li><img src={wolfram}  alt='Wolfram'/> <p>Wolfram</p></li>
                </ul>
            </div>         
            <div className={styles.Advanced}>
                <h2>Libraries Related to<br/> JavaScript</h2>
                <ul>
                    <li><img src={react}  alt='react'/> <p>React</p></li>
                    <li><img src={redux}  alt='redux'/> <p>Redux</p></li>
                    <li><img src={webpack}  alt='webpack'/> <p>WebPack</p></li>
                    <li><img src={npm}  alt='npm'/> <p>npm</p> </li>
                </ul>
            </div>
            <div className={styles.Dependencies}>
                <h2>Dependencies / Packages Related to React</h2>
                <ul>
                    <li> <p>create-react-app</p></li>
                    <li> <p>react-router</p></li>
                    <li> <p>react-loadable</p></li>
                    <li> <p>react-redux</p></li>
                    <li> <p>react-axios</p></li>
                    <li> <p>react-custom-scrollbars</p></li>
                    <li> <p>react-css-variables</p></li>
                    <li> <p>react-parallax</p></li>
                    <li> <p>react-draggable</p></li>
                    <li> <p>react-grid-layout</p></li>
                    <li> <p>react-lazyload</p></li>
                </ul>
            </div>    
        </div>
        //         <li><img src={python} height={50} alt='python'/> <p>python</p></li>
        //   <li><img src={reactRouter} height={40} alt='reactRouter'/><p>react-router</p></li>

 
    );
}


export default competence;