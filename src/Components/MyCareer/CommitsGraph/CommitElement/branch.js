import React from 'react';
import branchSVG from '../../../../Assets/Icons/svgs/branch.svg';

const branch = (props) => {
    return( 
        <div style={{border:'1px solid '+props.color,transform: (props.branchType === 'branch1' ? 'rotateX(0)' : 'rotateX(180deg)')} }>
            <img    draggable = {false}  
                    alt='' 
                    src={branchSVG} 
                    width={props.width} 
                    height={60}/> 
        </div>  
    );
 };

 export default branch;

