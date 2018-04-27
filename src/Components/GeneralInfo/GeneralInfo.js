import React from 'react';
import styles from './GeneralInfo.css';
import myPhoto from '../../Assets/Images/ali.jpg';
const generalInfo = () => {
    return (
        <div className= {styles.GeneralInfo}>
            <img  className= {styles.MyPhoto} src={myPhoto} height={300}/>
            <div  className= {styles.Info}>
                <p>I'm a web developper and a mechatronic engineer who studied at the National School of Engineering of Sousse. </p>
            </div>
        </div>
    );
}

export default generalInfo;