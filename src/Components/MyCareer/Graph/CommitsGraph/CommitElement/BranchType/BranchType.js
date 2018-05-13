import React from 'react';
import branch1 from '../../../../../../Assets/Icons/svgs/branch1.svg';
import branch2 from '../../../../../../Assets/Icons/svgs/branch2.svg';
import branch3 from '../../../../../../Assets/Icons/svgs/branch3.svg';
import branch4 from '../../../../../../Assets/Icons/svgs/branch4.svg';
import styles from './BranchType.css';
import Button from '../Button/Button';

const branchType = (props) => {
    let branchsrc = null; 
    const _Button = !props.Btn ? null: <Button className= {props.branchType === 'branch1' ? styles.BranchButtonBottom : styles.BranchButtonTop}
                                                content = {props.content} 
                                                active  = {props.active}
                                                clicked = {props.clicked} /> 
    const imgStyles = (props.branchType ==='branch0Up' || props.branchType ==='branch1Up' ) ? styles.ImgBranchUp : styles.ImgBranchDown ;
   
    if(props.branchType ==='branch0Up' || props.branchType ==='branch0Down' ){
        branchsrc = props.color === '#0077ff' ? branch1 : branch4;
    }else{
        branchsrc = props.color === '#0077ff' ? branch2 : branch3;
    }
    return( 
        <div key={props.key} className= {styles.Branch}>
            {_Button}
            <div  className={imgStyles}>
                <img    draggable = {false}  
                        alt='' 
                        src={branchsrc} 
                        width={props.width} 
                        height={55}/> 
            </div>  
        </div> 
    );
 };

 export default branchType;