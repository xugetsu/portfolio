import React from 'react';
import styles from './LogoFragment1.css';
import variables from 'react-css-variables';

const logoFragment1 = (props) => { 

    const h = 500;
    const height = h/2.825; 
    const thikness = height/4.5;
    const width = h/2.825*1.2;
    const x0 = 0, y0 = 0; 
    const poly2 =  [[x0 + width/2, thikness + y0], 
                    [x0, y0 + height], 
                    [x0, y0 + height - thikness],
                    [x0 + width/2, y0], 
                    [x0 + width, y0 + height - thikness], 
                    [x0 + width, y0 + height]]; // "<" / >
               
    const viewBox = [5, 0, 200, 210].join(' ');
    return (
    <svg    className={styles.Fragment1}
            viewBox={viewBox} 
            height={props.height} 
            width={props.width}>

        <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%"   style={{stopColor:'rgb(41,137,216)', stopOpacity:'1'}} />
            <stop offset="100%" style={{stopColor:'#2bade7', stopOpacity:'1'}} />
            </linearGradient>
        </defs>
        <polygon points={poly2} fill="url(#grad1)" />
    </svg>
    );
}
export default variables('s','s1', 'd', 'd1', 'f')(logoFragment1);