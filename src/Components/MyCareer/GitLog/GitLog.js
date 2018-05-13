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
            let backgroundColor = '#006ab142';
            if(commit.hash[0] === 'm'){ backgroundColor =  '#fbff0042'}
            if(commit.hash[0] === 'w'){ backgroundColor =  '#ff3c0042'}
            if(props.currentrank === commit.rank ){ 
                if(commit.hash[0] === 'm'){ backgroundColor =  '#fea511'}
                else if(commit.hash[0] === 'w'){ backgroundColor =  '#ff5a00e3'}
                else { backgroundColor =  '#0077ff'}
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
            <CustomScrollbars  style1 width= '100%'  height= '280px' zindex={10}>
                {log}
           </CustomScrollbars>
        </div>
    );
}

export default gitLog;
