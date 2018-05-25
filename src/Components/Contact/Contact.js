import React from 'react';
import styles from './Contact.css';
import MyLogo from '../MyLogoRAW/MyLogo';
import facebook from '../../Assets/Icons/svgs/facebook.svg';
import googelplus from '../../Assets/Icons/svgs/googleplus.svg';
import linkedin2 from '../../Assets/Icons/svgs/linkedin2.svg';
import stackoverflow from '../../Assets/Icons/svgs/stackoverflow.svg';
import github2 from '../../Assets/Icons/svgs/github2.svg';
import ContactData from './ContactData/ContactData';

const contact = () => {
        const iconSize = 50;
        return (
            <div className= {styles.Contact}>
                <h1>Contact</h1>

                <ContactData />
                <div className={styles.SomeInfos}>
                    <h3>MAIL:</h3>
                    <h4>othmanixali@gmail.com</h4>
                    <h3>PHONE:</h3>
                    <h4>(216) 24 49 71 62</h4>
                </div>
                <div className= {styles.MyLogoRaw}>
                    <MyLogo height = {200} width={250} id={2}
                                openTagStopColor1='#2989d8'  openTagStopColor2='#2bade7'
                                closeTagStopColor1='#00bcf2' closeTagStopColor2='#2bade7'
                                slashStopColor1='#ebebeb'    slashStopColor2='#888888' />
                </div>

                <div className={styles.Bar}></div>

                <div className= {styles.Social}>
                    <a href='https://www.linkedin.com/in/ali-othmani-11873707/' target="_blank" rel="noopener noreferrer" ><img src={linkedin2} height={iconSize} alt='linkedin'/></a>
                    <a href='https://github.com/xugetsu' target="_blank" rel="noopener noreferrer" ><img src={github2} height={iconSize} alt='github'/></a>
                    {/* <a href='https://www.facebook.com/people/Othmani-Ali/100007321429385' target="_blank" rel="noopener noreferrer" ><img src={facebook} height={iconSize} alt='facebook'/></a> */}
                    <a href='https://plus.google.com/115571394054300448150' target="_blank" rel="noopener noreferrer" ><img src={googelplus} height={iconSize} alt='googelplus'/></a>
                    <a href='https://stackoverflow.com/users/9393392/othmani-ali' target="_blank" rel="noopener noreferrer" ><img src={stackoverflow} height={iconSize} alt='stackoverflow'/></a>
                </div>
                <div className={styles.Footer}>
                   Made with love - Ali Othmani - 2018
                </div>
            </div>
        ); 
}
export default contact;

