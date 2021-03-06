import React from 'react';
import styles from './RobotSketchFab.css';
//import LazyLoad from 'react-lazyload';
//import Spinner from '../Spinner/Spinner';

const robotSketchFab = () => {
    //const spinner = (props) =>  <div {...props}><Spinner/></div>;
    return (
        // <LazyLoad   height ={100}
        //             once
       //            /* placeholder = {spinner}*/>
            <iframe className= {styles.RobotSketchFab}
                    title = "Robot SketchFab"
                    width={'95%'} 
                    height={400} 
                    src="https://sketchfab.com/models/27cadc08b84f4affa616d41cbb1d9ac1/embed" 
                    allowFullScreen
                    mozallowfullscreen='true'
                    webkitallowfullscreen='true'>
            </iframe> 
  //    </LazyLoad>
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