import React, {Component} from 'react';
import styles from './MyCareer.css';
import gitsvm from '../../Assets/Icons/pngs/gitsvm.png';
import Graph from './Graph/Graph';
import CommitWrapper from './CommitDetails/CommitWrapper';
import CommitsData from './CommitDetails/CommitsData';
import GitLog from './GitLog/GitLog';
import next from '../../Assets/Icons/svgs/next.svg';
import prev from '../../Assets/Icons/svgs/prev.svg';

class MyCareer extends Component {

    state = {
        loading:true,
        resize:false,
        currentCommit:{
            rank:10,
            hash:'w01',
            content:['Start learning HTML','Thu/16/Nov/2017'],
            p: 10
        },
        layout:null,
        commitsLog: null,
    }

    componentDidMount(){
        const layout = this.generateLayoutData(CommitsData);
        const commitsLog = this.generateCommitsLog(layout);
       // console.log('layout',layout);
        //console.log('commitsLog',commitsLog);
        this.setState({
            loading: false,
            layout: layout,
            commitsLog: commitsLog,
        });
    }

    generateCommitsLog = (layout) => {
        const commitsLog = Array(26).fill();
        for( let i = 1; i <= 26; i++ ){
            const commit = layout.find( e => e.rank === i);
            commitsLog[i] = {content:commit.content, hash:commit.i, rank:i,p:(commit.x+commit.w) };
        }
        return commitsLog.slice(1);
    }
    loadCommitLog = (rank) =>  this.setState({currentCommit: this.state.commitsLog[rank-1]});
    generateBranchData = (branchName, branchData, type = 'master', _x0, _y0,open = true, _w0 = 1, h0 = 1) => {
            const branch = Object.keys(branchData).map(
                (commitKey, index, kayArray) => {
                    const btn = branchData[commitKey].btn === undefined ? 'middle' : branchData[commitKey].btn;
                    const x0 = branchData[commitKey].x === undefined ? _x0 + index :  branchData[commitKey].x;
                    const w0 = branchData[commitKey].w === undefined ? _w0 : branchData[commitKey].w ;
                    let commitForm = 'normal';
                    const date = branchData[commitKey].date;
                    const title = branchData[commitKey].title;
                    if(type !== 'master' && (index === 0 || index === (kayArray.length - 1))) {
                        commitForm = type === 'branchUp' ? index === 0 ? 'branch0Up' : open? 'normal':'branch1Up'
                                                         : index === 0 ? 'branch1Down' : open? 'normal':'branch0Down';

                    }                                  
                    return {branchName: branchName,
                            i: commitKey, 
                            rank: branchData[commitKey].rank,
                            content: [title,date],
                            commitForm: commitForm, 
                            x:x0, y:_y0, w:w0, h:h0, 
                            btn: btn,
                            static: true}
            });
        return branch;
    }
    generateLayoutData = (CommitsData) =>{
        const layout = Object.keys(CommitsData).map(branch =>
               this.generateBranchData( branch,
                                        CommitsData[branch].commits,
                                        CommitsData[branch].config.branchType,
                                        CommitsData[branch].config.startPoint,
                                        CommitsData[branch].config.rowLevel,
                                        CommitsData[branch].config.open)
        ).reduce( (currentElement, outputArray) => outputArray.concat(currentElement) ,[]);
        //console.log(layout);
        return layout;
    }

    nextCommitHandler = () => {
        if(this.state.currentCommit.rank === 26){
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
    resizeHandler = () => {
        this.setState({resize: !this.state.resize});
    }

    render () {
        // console.log(this.state.currentCommit);
        const style= {gridTemplateColumns: (this.state.resize ? '74% 25%' : '54% 45%')};
       
        const graph = this.state.loading ? null 
            : <Graph  currentHash = {this.state.currentCommit.hash} 
                    currentCommit = {this.state.currentCommit} 
                    layout = {this.state.layout} 
                    loadCommitLog = {(currentCommit) => this.loadCommitLog(currentCommit)}/>;
        return (
        <div id='MyCareer' className= {styles.MyCareer} style={style}>

            <h1>My Career Repository</h1>

            {graph}
    

            <CommitWrapper 
                title = {this.state.currentCommit.content[0]} 
                date = {this.state.currentCommit.content[1]} 
                hash = {this.state.currentCommit.hash} 
                prevCommit = {this.prevCommitHandler}
                nextCommit = {this.nextCommitHandler}
                resize = {this.state.resize} 
                onResize = {this.resizeHandler}/> 

            <GitLog commitsLog={this.state.commitsLog} 
                    clicked = {(rank) => this.loadCommitLog(rank)}
                    currentrank = {this.state.currentCommit.rank} />

        </div>
        );
    }
}

export default MyCareer;