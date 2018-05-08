import React, {Component} from 'react';
import styles from './MyCareer.css';
import gitsvm from '../../Assets/Icons/pngs/gitsvm.png';

import CommitsGraph from './CommitsGraph/CommitsGraph';
import CommitWrapper from './CommitDetails/CommitWrapper';
import CommitsData from './CommitDetails/CommitsData';
class MyCareer extends Component {
    state = {
        hash: 'w5'
    }

    loadCommitLog = (hash) =>   this.setState({hash: hash});
    generateBranchData = (branchName, branchData, type = 'master', x0, y0, _w0 = 1, h0 = 1) => {
            const branch = Object.keys(branchData).map(
                (commitKey, index, kayArray) => {
                    let w0 = _w0;
                    let commitForm = 'normal';
                    const date = branchData[commitKey].date;
                    const title = branchData[commitKey].title;
                    if(type !== 'master' && (index === 0 || index === (kayArray.length - 1))) {
                        w0 = 2;
                        commitForm = type === 'newBranchUp' ? index === 0 ? 'branch0' : 'branch1'
                                                            : index === 0 ? 'branch1' : 'branch0'; }
                    return {branchName: branchName,
                            i: commitKey, 
                            content: [title,date],
                            commitForm: commitForm, 
                            x:x0+index, y:y0, w:w0, h:h0, 
                            static: true}
            });
        return branch;
    }
    generateLayoutData = (CommitsData) =>{
        const layout = Object.keys(CommitsData).map(
            branchKey => this.generateBranchData(branchKey,
                                                 CommitsData[branchKey].commits,
                                                 CommitsData[branchKey].config.branchType,
                                                 CommitsData[branchKey].config.startPoint,
                                                 CommitsData[branchKey].config.rowLevel)
        ).reduce( (currentElement, outputArray) => outputArray.concat(currentElement) ,[]);
        return layout;
    }
    render () {
        const hash =this.state.hash;
        return (
        <div id='MyCareer' className= {styles.MyCareer}>
        
            <img className= {styles.GitSvm} src={gitsvm} alt='Git'/>

            <h1>My Career Repository</h1>
            <CommitsGraph   currentHash = {hash} 
                            layout = {this.generateLayoutData(CommitsData)} 
                            loadCommitLog = {(hash) => this.loadCommitLog(hash)}/>
            {/* <CommitWrapper 
                title={CommitsData[hash-1].content[0]} 
                date= {CommitsData[hash-1].content[1]} 
                hash = {hash} />  */}
        </div>
        );
    }
}

export default MyCareer;