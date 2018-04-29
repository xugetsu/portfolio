import React from 'react';
import styles from './Branch.css';
import branch0 from '../../../Assets/Icons/svgs/branch.svg';

const branch = (props) =>{
    const width = props.width,
          color = props.color;
    return ( 
            <div className= {styles.Branch} >
                    <img src={branch0} width={50} height={60}/>  
                        <span> 
                            <div  className= {styles.Details} >
                                {props.content+'d29112017'}
                            </div>
                        </span>
            </div>
            );
} 
export default branch;
