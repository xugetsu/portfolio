import React from 'react';
import styles from './LogoFragment3.css';
import variables from 'react-css-variables';
const logoFragment3 = (props) => { 

    const h = 500;
    const height = h/2.825; 
    const thikness = height/5;
    const width = h/2.825*1.2;
    const x0 = 0, y0 = 0; 
    const x1 = x0, y11 = y0 + height*1.11765 - h/500*130;
    const poly11 = [[x1 - h/25, y11], 
                   [x1, y11 + thikness*0.8 ], 
                   [x1 + width + h/25, y11 + height*4/17 + thikness*0.8], 
                   [x1 + width , y11 + height*4/17  ]]; // < "/" >
                   
    const viewBox = [5, 0, 200, 210].join(' ');
    return (
    <svg    className={styles.Fragment3}
            viewBox={viewBox}
            height={props.height} 
            width={props.width}>

        <defs>
            <linearGradient id="grad3" x1="0%" y1="0%" x2="100%" y2="50%">
                <stop offset="0%" style={{stopColor:'rgb(235, 235, 235)', stopOpacity:'1'}} />
                <stop offset="100%" style={{stopColor:'rgb(235, 235, 235)', stopOpacity:'1'}} />
            </linearGradient>
        </defs>
        <polygon  points={poly11} fill="url(#grad3)" />
     </svg>
    );
}
export default variables('s', 'x', 'd', 'f')(logoFragment3);