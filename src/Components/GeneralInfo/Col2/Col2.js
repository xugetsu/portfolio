import React from 'react';
import styles from './Col2.css';
import gitlab from '../../../Assets/Icons/pngs/gitlab.png';
import fb from '../../../Assets/Icons/svgs/fb.svg';
import linkedin from '../../../Assets/Icons/svgs/linkedin.svg';
import gplus from '../../../Assets/Icons/svgs/gplus.svg';
import github from '../../../Assets/Icons/svgs/github.svg';
import LogoFragment1 from '../../LogoFragments/LogoFragment1/LogoFragment1';
import LogoFragment2 from '../../LogoFragments/LogoFragment2/LogoFragment2';
import LogoFragment3 from '../../LogoFragments/LogoFragment3/LogoFragment3';
const col2 = () => {
    const iconSize = 35;
    return (
        <div  className= {styles.Col2}>
            <h1>Hi!, I'm Ali Othmani</h1>
            <h3><span><LogoFragment1/></span>
                React.js Web Developper
                <span><LogoFragment3/></span>
                Mechatronic Engineer
                <span><LogoFragment2 h={500}/></span>
            </h3>
            <ul  className= {styles.Social}>
                <li><a target="_blank" rel="noopener noreferrer" href='https://www.linkedin.com/in/ali-othmani-11873707/'><img src={linkedin} height={iconSize} alt='linkedin'/></a></li>
                <li><a target="_blank" rel="noopener noreferrer" href='https://gitlab.com/Xugetsu'><img src={gitlab} height={iconSize} alt='gitlab'/></a></li>
                <li><a target="_blank" rel="noopener noreferrer" href='https://github.com/xugetsu'><img src={github} height={iconSize} alt='github'/></a></li>
                {/* <li><a target="_blank" rel="noopener noreferrer" href='https://www.facebook.com/people/Othmani-Ali/100007321429385'><img src={fb} height={iconSize} alt='Facebook'/></a></li> */}
                <li><a target="_blank" rel="noopener noreferrer" href='https://plus.google.com/115571394054300448150'><img src={gplus} height={iconSize} alt='google Plus'/></a></li>
            </ul>
        </div>
    );
}


export default col2;