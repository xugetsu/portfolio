import React from 'react';
import styles from './Contact.css';
import MyLogoRaw from '../MyLogoRAW/MyLogoRaw';
import facebook from '../../Assets/Icons/svgs/facebook.svg';
import googelplus from '../../Assets/Icons/svgs/googleplus.svg';
import linkedin2 from '../../Assets/Icons/svgs/linkedin2.svg';
import stackoverflow from '../../Assets/Icons/svgs/stackoverflow.svg';
import github2 from '../../Assets/Icons/svgs/github2.svg';
const contact = () => {
    const iconSize = 80;
    return (
        <div className= {styles.Contact}>
            <h1>Contact</h1>
            <div className= {styles.MyLogoRaw}>
                <MyLogoRaw colorFill1={'#1e90ff'} colorFill2={'#f0fff0'} logoHeight = {580}/>
            </div>
            <div className= {styles.Social}>
                <a href='https://www.linkedin.com/in/ali-othmani-11873707/' target="_blank" rel="noopener noreferrer" ><img src={linkedin2} height={iconSize} alt='linkedin'/></a>
                <a href='https://github.com/xugetsu' target="_blank" rel="noopener noreferrer" ><img src={github2} height={iconSize} alt='github'/></a>
                <a href='https://www.facebook.com/people/Othmani-Ali/100007321429385' target="_blank" rel="noopener noreferrer" ><img src={facebook} height={iconSize} alt='facebook'/></a>
                <a href='https://plus.google.com/115571394054300448150' target="_blank" rel="noopener noreferrer" ><img src={googelplus} height={iconSize} alt='googelplus'/></a>
                <a href='https://stackoverflow.com/users/9393392/othmani-ali' target="_blank" rel="noopener noreferrer" ><img src={stackoverflow} height={iconSize} alt='stackoverflow'/></a>
            </div>
        </div>
    );
}

export default contact;

