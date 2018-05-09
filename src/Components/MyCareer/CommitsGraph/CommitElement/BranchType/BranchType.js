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
    const flip = {transform: (props.branchType === 'branch1' ? 'rotateX(0)' : 'rotateX(180deg)')};
    return( 
        <div key={props.key} className= {styles.Branch} style={props.inlineStyle}>
            {_Button}
            <div style={flip}>
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