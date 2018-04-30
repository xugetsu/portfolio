import React from 'react';
import styles from './RobotSketchFab.css';

const robotSketchFab = () => {
    return (
        <div className= {styles.RobotSketchFab}>
            <iframe width="640" 
                    height="480" 
                    src="https://sketchfab.com/models/27cadc08b84f4affa616d41cbb1d9ac1/embed" 
                    frameborder="0" 
                    allowvr 
                    allowfullscreen 
                    mozallowfullscreen="true" 
                    webkitallowfullscreen="true" 
                    onmousewheel="">
            </iframe> 
        </div>
    );
}
export default robotSketchFab;

        /* <p style="font-size: 13px; font-weight: normal; margin: 5px; color: #4A4A4A;"> 
            <a href="https://sketchfab.com/models/27cadc08b84f4affa616d41cbb1d9ac1?utm_medium=embed&utm_source=website&utm_campain=share-popup" 
               target="_blank" 
               style="font-weight: bold; color: #1CAAD9;">
               Filament Winding Robot</a> 
               by 
               <a href="https://sketchfab.com/xugetsu?utm_medium=embed&utm_source=website&utm_campain=share-popup" 
               target="_blank" 
               style="font-weight: bold; color: #1CAAD9;">
               othmani ali</a> 
               on 
               <a href="https://sketchfab.com?utm_medium=embed&utm_source=website&utm_campain=share-popup" 
               target="_blank" 
               style="font-weight: bold; color: #1CAAD9;">
               Sketchfab</a> 
            </p> */