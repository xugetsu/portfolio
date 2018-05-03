import React from 'react';
import styles from './Portfolio.css';
import game2048 from '../../Assets/Images/2048b.PNG';
import pportfolio from '../../Assets/Images/portfolio.PNG';
const portfolio = () => {
    return (
        <div className= {styles.Portfolio}>
           <h1>My Portfolio</h1>
           <div className= {styles.Projects}>
                <div  className= {styles.Project}>
                     <img className= {styles.Img} src={game2048} alt='game 2048 ultra'/>
                     <div className= {styles.Window}><p>Game 2048 ultra!</p></div>
                </div>
                <div  className= {styles.Project}>
                     <img className= {styles.Img} src={pportfolio} alt='project portfolio'/>
                     <div className= {styles.Window}><p>My Website</p></div>
                </div>
                <div  className= {styles.Project}>
                     <img className= {styles.Img} src={game2048} alt='game 2048 ultra'/>
                     <div className= {styles.Window}><p>Game 2048 ultra!</p></div>
                </div>

           </div>
        </div>
    );
}

export default portfolio;

