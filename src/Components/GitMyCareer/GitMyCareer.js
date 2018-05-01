import React, {Component} from 'react';
import styles from './GitMyCareer.css';
import gitsvm from '../../Assets/Icons/pngs/gitsvm.png';
import Grid from 'react-css-grid';
import Graph from './Graph/Graph';
import CommitDetails from './CommitDetails/CommitDetails';
import CommitData from './CommitsData';
class GitMyCareer extends Component {
    state = {
        hash: 5
    }

    loadCommitLog = (hash) =>   this.setState({hash: hash});

    render () {

        const hash =this.state.hash;
        return (
        <div className= {styles.GitMyCareer}>
        
            <img className= {styles.GitSvm} src={gitsvm} width={200} />

            <h1>My Career Repository</h1>

            <CommitDetails 
                title={CommitData[hash-1].content[0]} 
                date= {CommitData[hash-1].content[1]} 
                hash = {hash} /> 

            <Graph layout = {CommitData} loadCommitLog = {(hash) => this.loadCommitLog(hash)}/>
        </div>
        );
    }
}

export default GitMyCareer;