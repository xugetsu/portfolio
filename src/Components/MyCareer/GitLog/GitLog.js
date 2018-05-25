import React from 'react';
import styles from './GitLog.css';
import CustomScrollbars from '../../UI/CustomScrollbars/CustomScrollbars';

const gitLog = (props) => {
    let log = null;

    if(props.commitsLog){
    const c = [...props.commitsLog].reverse();
    log = c.map(
        commit => {
            let color = 'inherit';
            let spanBckColor = 'none';
            let bckColor = 'linear-gradient(135deg, #3d464e 0%,#1e5799 100%)';
            let alpha = '75';
            let branchName = null;
            if (props.currentrank === commit.rank ){
                color = '#fff';
                alpha = 'dd';
                bckColor = 'linear-gradient(135deg, #1e5799 0%,#1e5799 100%)';
            }
            switch (commit.hash[0]) {
                case 'm': spanBckColor = '#ffd500'; branchName = 'Mechatronic'; break;
                case 'w': spanBckColor = '#ff3c00'; branchName = 'Web'+'\u00A0'+'development '; break;
                default:  spanBckColor = '#0077ff'; branchName = 'Languages'; break;
            }
            if (commit.rank === 26){ // well I have no choice here :/ I must fix this particular case soon !!
                spanBckColor = '#0077ff';
                branchName = 'Languages';
            }
            return <div onClick={() => props.clicked(commit.rank)} 
                        key={commit.rank} 
                        className={styles.Commit}
                        style = {{background: bckColor}}>

                        <div className={styles.BranchName} 
                             style={{backgroundColor: (spanBckColor+alpha)}}>
                                {branchName[0]}<span>{branchName.slice(1)}</span>
                        </div>

                        <div className={styles.Details}>
                            <p>{commit.content[0]} </p>
                            <p className={styles.Date}>{'On '+commit.content[1]}</p>
                        </div>

                    </div>
                }
    )};
    
    return (    
        <div className= {styles.GitLog}>
            <CustomScrollbars  style1 width= '100%'  height= '310px' zindex={10}>
                {log}
           </CustomScrollbars>
        </div>
    );
}

export default gitLog;
