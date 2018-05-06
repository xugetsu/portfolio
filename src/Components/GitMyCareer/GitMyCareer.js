import React, {Component} from 'react';
import styles from './GitMyCareer.css';
import gitsvm from '../../Assets/Icons/pngs/gitsvm.png';

import Graph from './Graph/Graph';
import CommitDetails from './CommitDetails/CommitDetails';
import CommitData from './CommitsData';
class GitMyCareer extends Component {
    state = {
        hash: 1
    }

    loadCommitLog = (hash) =>   this.setState({hash: hash});

    render () {

        const hash =this.state.hash;
        return (
        <div className= {styles.GitMyCareer}>
        
            <img className= {styles.GitSvm} src={gitsvm} alt='Git'/>

            <h1>My Career Repository</h1>
            <Graph currentHash = {hash} 
                  layout = {CommitData} 
                  loadCommitLog = {(hash) => this.loadCommitLog(hash)}/>
            <CommitDetails 
                title={CommitData[hash-1].content[0]} 
                date= {CommitData[hash-1].content[1]} 
                hash = {hash} /> 


        </div>
        );
    }
}

export default GitMyCareer;