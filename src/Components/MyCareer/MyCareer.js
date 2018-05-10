import React, {Component} from 'react';
import styles from './MyCareer.css';
import gitsvm from '../../Assets/Icons/pngs/gitsvm.png';
import CommitsGraph from './CommitsGraph/CommitsGraph';
import CommitWrapper from './CommitDetails/CommitWrapper';
import CommitsData from './CommitDetails/CommitsData';
class MyCareer extends Component {

    state = {
        loading:true,
        currentCommit:{
            rank:10,
            hash:'w01',
            content:['Start learning HTML','Thu/16/Nov/2017']
        },
        layout:null,
        commitsLog: null,
    }

    componentDidMount(){
        const layout = this.generateLayoutData(CommitsData);
        const commitsLog = this.generateCommitsLog(layout);
        this.setState({
            loading: false,
            layout: layout,
            commitsLog: commitsLog,
        });
    }

    generateCommitsLog = (layout) => {
        const commitsLog = Array(27).fill();
        for( let i = 1; i <= 27; i++ ){
            const commit = layout.find( e => e.rank === i);
            commitsLog[i] = {content:commit.content, hash:commit.i, rank:i};
        }
        return commitsLog.slice(1);
    }
    loadCommitLog = (rank) =>  this.setState({currentCommit: this.state.commitsLog[rank-1]});
    generateBranchData = (branchName, branchData, type = 'master', _x0, _y0, _w0 = 1, h0 = 1) => {
            const branch = Object.keys(branchData).map(
                (commitKey, index, kayArray) => {
                    let y0 = _y0;
                    const btn = branchData[commitKey].btn === undefined ? true : false;
                    const x0 = branchData[commitKey].x === undefined ? _x0 + index :  branchData[commitKey].x;
                    const w0 = branchData[commitKey].w === undefined ? _w0 : branchData[commitKey].w ;
                    let commitForm = 'normal';
                    const date = branchData[commitKey].date;
                    const title = branchData[commitKey].title;
                    if(type !== 'master' && (index === 0 || index === (kayArray.length - 1))) {
             
                        commitForm = type === 'branchUp' ? index === 0 ? 'branch1' : 'branch0'
                                                         : index === 0 ? 'branch0' : 'branch1';

                        y0 = (type === 'branchUp') ? _y0  : _y0 + 1;
                    }                                  
                    return {branchName: branchName,
                            i: commitKey, 
                            rank: branchData[commitKey].rank,
                            content: [title,date],
                            commitForm: commitForm, 
                            x:x0, y:y0, w:w0, h:h0, 
                            btn: btn,
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

    nextCommitHandler = () => {
        if(this.state.currentCommit.rank === 27){
            return null;
        }else{
            this.setState({
                currentCommit: this.state.commitsLog[this.state.currentCommit.rank]
            });
        }
    }

    prevCommitHandler = () => {
        if(this.state.currentCommit.rank === 1){
            return null;
        }else{
            this.setState({
                currentCommit: this.state.commitsLog[this.state.currentCommit.rank - 2]
            });
        }
    }
    render () {
        console.log(this.state.currentCommit);
        const commitGraph = this.state.loading ? null 
            : <CommitsGraph currentHash = {this.state.currentCommit.hash} 
                            layout = {this.state.layout} 
                            loadCommitLog = {(currentCommit) => this.loadCommitLog(currentCommit)}/>;
        return (
        <div id='MyCareer' className= {styles.MyCareer}>
            <img className= {styles.GitSvm} src={gitsvm} alt='Git'/>
            <h1>My Career Repository</h1>
            {commitGraph}
            <CommitWrapper 
                title={this.state.currentCommit.content[0]} 
                date= {this.state.currentCommit.content[1]} 
                hash = {this.state.currentCommit.hash} 
                prevCommit = {this.prevCommitHandler}
                nextCommit = {this.nextCommitHandler}/> 
        </div>
        );
    }
}

export default MyCareer;