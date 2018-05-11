import React from 'react';
import styles from './GitLog.css';
import { Scrollbars } from 'react-custom-scrollbars';

const gitLog = (props) => {
    let log = null;
   
    if(props.commitsLog){
    const c = [...props.commitsLog].reverse();
    log = c.map(
        commit => <div onClick={() => props.clicked(commit.rank)} 
                       key={commit.rank} 
                       style={(props.currentrank === commit.rank ? {color: '#9acd32'}: {})}
                       className={styles.Commit}>
                       {commit.content[0]+' - '+commit.content[1]}
                  </div>
    )};
    
    return (
        <div className= {styles.GitLog}>
         <h4>$ Career log --all --oneline </h4>
            <Scrollbars style={{ width: '45vw', height: '280px'}}>
                {log}
           </Scrollbars>
        </div>
    );
}

export default gitLog;
