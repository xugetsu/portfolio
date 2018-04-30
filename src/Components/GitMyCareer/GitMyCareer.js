import React, {Component} from 'react';
import styles from './GitMyCareer.css';
import gitsvm from '../../Assets/Icons/pngs/gitsvm.png';
import Grid from 'react-css-grid';
import Loadable from 'react-loadable';
import Spinner from '../Spinner/Spinner';
import Graph from './Graph/Graph';

class GitMyCareer extends Component {
    state = {
        hash:2
    }
    loadCommitLog = (hash) => {
        this.setState({hash: hash});
    }
    render () {
        const CommitDetails = Loadable({
            loader: () => import('./CommitDetails/Commit'+this.state.hash+'/Commit'+this.state.hash),
            loading: Spinner,
        });
        return (
        <div className= {styles.GitMyCareer}>
            <img className= {styles.GitSvm} src={gitsvm} width={200} />
            <h1>My Career Repository</h1>
            <Graph loadCommitLog = {(hash) => this.loadCommitLog(hash)}/>
            <div className={styles.GitLog} > <CommitDetails /> </div>
        </div>
        );
    }
}

export default GitMyCareer;