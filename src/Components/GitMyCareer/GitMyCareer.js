import React, {Component} from 'react';
import styles from './GitMyCareer.css';
import gitsvm from '../../Assets/Icons/pngs/gitsvm.png';
import Grid from 'react-css-grid';
import Graph from './Graph/Graph';
import CommitDetails from './CommitDetails/CommitDetails';

class GitMyCareer extends Component {
    state = {
        hash: 1
    }

    loadCommitLog = (hash) =>   this.setState({hash: hash});

    render () {
        const title = 'Robot Design Improvement';
        const date = 'On, Sun. Jan 1, 2017, 9:59 PM';
        return (
        <div className= {styles.GitMyCareer}>
        
            <img className= {styles.GitSvm} src={gitsvm} width={200} />

            <h1>My Career Repository</h1>

            <CommitDetails 
                title={title} 
                date={date} 
                hash = {this.state.hash} /> 

            <Graph loadCommitLog = {(hash) => this.loadCommitLog(hash)}/>
        </div>
        );
    }
}

export default GitMyCareer;