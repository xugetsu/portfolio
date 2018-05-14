import React from 'react';
import styles from './GitLog.css';
import CustomScrollbars from '../../UI/CustomScrollbars/CustomScrollbars';

const gitLog = (props) => {
    let log = null;

    if(props.commitsLog){
    const c = [...props.commitsLog].reverse();
    log = c.map(
        commit => {
            const color = props.currentrank === commit.rank ? '#fff': 'inherit';
            let backgroundColor = '#8fc3ff29';
            if(commit.hash[0] === 'm'){ backgroundColor =  '#b4a34e38'}
            if(commit.hash[0] === 'w'){ backgroundColor =  '#ff937126'}
            if(props.currentrank === commit.rank ){ 
                if(commit.hash[0] === 'm'){ backgroundColor =  '#fea51180'}
                else if(commit.hash[0] === 'w'){ backgroundColor =  '#ff5a0080'}
                else { backgroundColor =  '#0077ff80'}
            }
            return <div onClick={() => props.clicked(commit.rank)} 
                        key={commit.rank} 
                        style={{color: color, backgroundColor: backgroundColor}}
                        className={styles.Commit}>
                        {commit.content[1]+' • '+commit.content[0]}
                    </div>
                }
    )};
    
    return (
        <div className= {styles.GitLog}>
         <h4>$ Career log --all --oneline </h4>
            <CustomScrollbars  style1 width= '100%'  height= '300px' zindex={10}>
                {log}
           </CustomScrollbars>
        </div>
    );
}

export default gitLog;
