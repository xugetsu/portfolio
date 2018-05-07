import React, {Component} from 'react';
import styles from './MyCareer.css';
import gitsvm from '../../Assets/Icons/pngs/gitsvm.png';

import CommitsGraph from './CommitsGraph/CommitsGraph';
import CommitWrapper from './CommitDetails/CommitWrapper';
import CommitData from './CommitDetails/CommitsData';
class MyCareer extends Component {
    state = {
        hash: 5
    }

    loadCommitLog = (hash) =>   this.setState({hash: hash});

    render () {

        const hash =this.state.hash;
        return (
        <div id='MyCareer' className= {styles.MyCareer}>
        
            <img className= {styles.GitSvm} src={gitsvm} alt='Git'/>

            <h1>My Career Repository</h1>
            <CommitsGraph currentHash = {hash} 
                  layout = {CommitData} 
                  loadCommitLog = {(hash) => this.loadCommitLog(hash)}/>
            <CommitWrapper 
                title={CommitData[hash-1].content[0]} 
                date= {CommitData[hash-1].content[1]} 
                hash = {hash} /> 


        </div>
        );
    }
}

export default MyCareer;