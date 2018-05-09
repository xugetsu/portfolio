import React from 'react';
import branchSVGRed from '../../../../../Assets/Icons/svgs/branchR.svg';
import branchSVGYellow from '../../../../../Assets/Icons/svgs/branchY.svg';
import branchSVGBlue from '../../../../../Assets/Icons/svgs/branchB.svg';
import styles from './BranchType.css';
import Button from '../Button/Button';

const branchType = (props) => {
    let branchsrc = null;
    switch (props.color) {
        case '#ffa600': branchsrc = branchSVGYellow;   break;
        case '#ff3c00': branchsrc = branchSVGRed;   break;
        case '#0077ff': branchsrc = branchSVGBlue;   break;
        default: branchsrc = branchSVGYellow;  break;
    }
    const _Button = !props.Btn ? null: <Button className= {props.branchType === 'branch1' ? styles.BranchButtonBottom : styles.BranchButtonTop}
                                                content = {props.content} 
                                                active  = {props.active}
                                                clicked = {props.clicked} /> 
    const imgStyles = [styles.ImgBranch, (props.branchType ==='branch1' ? styles.FlipXY : styles.FlipX)].join(' ');// loool flipxy this how it works for the best branch chape  shhhh...

    return( 
        <div key={props.key} className= {styles.Branch} style={props.inlineStyle}>
            {_Button}
            <div className={imgStyles}>
                <img    draggable = {false}  
                        alt='' 
                        src={branchsrc} 
                        width={props.width} 
                        height={60}/> 
            </div>  
        </div> 
    );
 };

 export default branchType;