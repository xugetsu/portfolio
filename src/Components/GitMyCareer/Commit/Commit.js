import React from 'react';
import styles from './Commit.css';

const commit = (props) =>{
    const width = props.width,
          color = props.color;      
    // const classes = props.branch ? styles.CommitNewBranch : styles.Commit;
    return ( 
        <div className= {styles.Commit}  style={{borderBottomColor:color?color:'#ff7b00',width:width?width:'50px'}}>
             <span>
                 <div  className= {styles.Details} >
                    {props.content}
                 </div>
             </span>
        </div>);
} 
export default commit;
