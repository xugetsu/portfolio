import React from 'react';
import styles from './Competence.css';
import GridLayout from 'react-grid-layout';
import npm from '../../Assets/Icons/pngs/npm.png';
import gitlab from '../../Assets/Icons/pngs/gitlab.png';
import redux from '../../Assets/Icons/pngs/redux.png';
import webpack from '../../Assets/Icons/svgs//webpack.svg';
import react from '../../Assets/Icons/svgs//react.svg';
import git from '../../Assets/Icons/svgs//git.svg';
import github from '../../Assets/Icons/svgs//github.svg';
import reactRouter from '../../Assets/Icons/svgs//react-router.svg';
import JavaScript from '../../Assets/Icons/svgs/javaScript.svg';
import CSS3 from '../../Assets/Icons/svgs/css3.svg';
import HTML5 from '../../Assets/Icons/svgs/html5.svg';
import python from '../../Assets/Icons/svgs/python.svg';

const  competence  = () => {
    // layout is an array of objects, see the demo for more complete usage
    const layout = [
                    {i: 'b', x: 0, y: 0, w: 3, h: 4, static: true},
                    {i: 'g', x: 3, y: 0, w: 3, h: 4, static: true},
                    {i: 'r', x: 6, y: 0, w: 3, h: 4, static: true},
                    {i: 'y', x: 2, y: 4, w: 5, h: 3, static: true},
    ];
    return (
        <div className={styles.Competence}>
        <GridLayout margin = {[0,0]} 
            layout = {layout} 
            cols = {9} 
            rowHeight = {90} 
            width = {window.innerWidth} >
                <div key="r" className={styles.Basic}>
                    <h2>Git and hosting services</h2>
                    <ul> 
                        <li><img src={git} height={60} alt='git'/> <p>GIT</p></li>
                        <li><img src={gitlab} height={60} alt='gitlab'/> <p>gitlab</p></li>
                        <li><img src={github} height={60} alt='github'/><p>github</p></li>  
                    </ul>              
                </div>
                <div key="b" className={styles.Basic}>
                    <h2>Basic Web Developpment Languages</h2>
                    <ul> 
                        <li><img src={HTML5} height={100} alt='HTML5'/> <p>HTML5</p></li>
                        <li><img src={CSS3} height={100} alt='CSS3'/> <p>CSS3</p></li>
                        <li><img src={JavaScript} height={100} alt='JavaScript'/> <p>JavaScript</p></li>
                    </ul>
                </div>               
                <div key="g" className={styles.Advanced}>
                    <h2>Libraries Related to<br/> JavaScript</h2>
                    <ul>
                        <li><img src={react} height={60} alt='react'/> <p>React</p></li>
                        <li><img src={redux} height={60} alt='redux'/> <p>Redux</p></li>
                        <li><img src={webpack} height={60} alt='webpack'/> <p>WebPack</p></li>
                        <li><img src={npm} height={30} alt='npm'/> <p>npm</p> </li>
                    </ul>
                </div>
                <div key="y" className={styles.Dependencies}>
                    <h2>Dependencies / Packages Related to React</h2>
                    <ul>
                        <li> <p>create-react-app</p></li>
                        <li> <p>react-parallax</p></li>
                        <li> <p>react-axios</p></li>
                        <li> <p>react-css-variables</p></li>
                        <li> <p>react-draggable</p></li>
                        <li> <p>react-loadable</p></li>
                        <li> <p>react-grid-layout</p></li>
                        <li> <p>react-custom-scrollbars</p></li>
                        <li> <p>react-router-dom</p></li>
                        <li> <p>react-lazyload</p></li>
                    </ul>
                </div>
        </GridLayout>    
        </div>
        //         <li><img src={python} height={50} alt='python'/> <p>python</p></li>
        //   <li><img src={reactRouter} height={40} alt='reactRouter'/><p>react-router</p></li>

 
    );
}


export default competence;