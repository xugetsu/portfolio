import React from 'react';
import styles from './Projects.css';
import game2048 from '../../../Assets/Images/2048b.PNG';
import pportfolio from '../../../Assets/Images/portfolio.PNG';
import zoom from '../../../Assets/Icons/svgs/zoom.svg';
const projects = (props) => {
    return (
            <div className= {styles.Projects}>
                <div  className= {styles.Project}>
                    <img className= {styles.Img} 
                         src={game2048} 
                         alt='game 2048 ultra'/>
                    <div className= {styles.Window} 
                         onClick = {() => props.showProject(1)}>
                         <p>Game 2048 ultra!</p>
                         <img className= {styles.zoom} src={zoom} alt='zoom'/>
                    </div>
                </div>
                <div  className= {styles.Project}>
                    <img className= {styles.Img} 
                         src={pportfolio} 
                         alt='project portfolio'/>
                    <div className= {styles.Window}
                         onClick = {() => props.showProject(2)}>
                         <p>My Website</p>
                         <img  className= {styles.zoom} src={zoom} alt='zoom'/>
                    </div>
                </div>
                <div  className= {styles.Project}>
                    <img className= {styles.Img} 
                         src={game2048} 
                         alt='game 2048 ultra'/>
                    <div className= {styles.Window}
                         onClick = {() => props.showProject(3)}>
                         <p>Game 2048 ultra!</p>
                         <img className= {styles.zoom} src={zoom} alt='zoom'/>
                    </div>
                </div>
            </div>
    );
}

export default projects;

