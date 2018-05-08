import React from 'react';
import styles from './Projects.css';
import game2048 from '../../../Assets/Images/2048b.PNG';
// import pportfolio from '../../../Assets/Images/portfolio.PNG';
import zoom from '../../../Assets/Icons/svgs/zoom.svg';
import burger from '../../../Assets/Images/burgerbuilder.PNG';
import career from '../../../Assets/Images/career.PNG';
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
                         src={burger} 
                         alt='Burger Builder App'/>
                    <div className= {styles.Window}
                         onClick = {() => props.showProject(2)}>
                         <p>Burger Builder App</p>
                         <img  className= {styles.zoom} src={zoom} alt='zoom'/>
                    </div>
                </div>
                <div  className= {styles.Project}>
                    <img className= {styles.Img} 
                         src={career} 
                         alt='My career repository'/>
                    <div className= {styles.Window}
                         onClick = {() => props.showProject(3)}>
                         <p>My career repository App</p>
                         <img className= {styles.zoom} src={zoom} alt='zoom'/>
                    </div>
                </div>
            </div>
    );
}

export default projects;

