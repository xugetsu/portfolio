import React from 'react';
import styles from './LogoFragment2.css';
import variables from 'react-css-variables';

const logoFragment2 = (props) => { 

    const h = 500;
    const height = h/2.825; 
    const thikness = height/4.5;
    const width = h/2.825*1.2;
    const x0 = 0, y0 = 0;
    const y12 = y0 + thikness/2; 
    const poly21 =  [[x0 + width/2, thikness + y12], 
                    [x0, y12 + height], 
                    [x0, y12 + height - 1.2*thikness],
                    [x0 + width/2, y12], 
                    [x0 + width, y12 + height - thikness], 
                    [x0 + width, y12 + height]]; // "<<" / >

    const viewBox  = [5, 0, 200, 210].join(' ');

    return (
    <svg    className={styles.Fragment2}
            viewBox={viewBox} 
            height={props.height} 
            width={props.width}>

        <defs>
            <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="50%">
            <stop offset="0%" style={{stopColor:'#00bcf2', stopOpacity:'1'}} />
            <stop offset="100%" style={{stopColor:'#2bade7', stopOpacity:'1'}} />
            </linearGradient>
        </defs>
        <polygon className = 'Polygone2' points={poly21} fill="url(#grad2)" />
    </svg>
    );
}
export default variables('s', 'd', 'f')(logoFragment2);