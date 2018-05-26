import React, {Component} from 'react';
import styles from './MyCareer.css';
import gitsvm from '../../Assets/Icons/pngs/gitsvm.png';
import Graph from './Graph/Graph';
import CommitWrapper from './CommitDetails/CommitWrapper';
import CommitsData from './CommitDetails/CommitsData';
import GitLog from './GitLog/GitLog';
import next from '../../Assets/Icons/svgs/next.svg';
import prev from '../../Assets/Icons/svgs/prev.svg';
import {connect} from 'react-redux';
import {__generateData__} from '../../store/actions/index';

class MyCareer extends Component {

    // state = {
    //     //loading:true,
    //     //resize:false,
    //     // currentCommit:{
    //     //     rank:16,
    //     //     hash:'w06',
    //     //     content:['Start Learning React','Wed/17/Jan/2018'],
    //     //     p: 15
    //     // },
    //    // layout:null,
    //    // commitsLog: null,
    // }

    componentDidMount(){
        this.props.onGenerateData();
        // const layout = this.generateLayoutData(CommitsData);
        // const commitsLog = this.generateCommitsLog(layout);
        // this.setState({
        //     loading: false,
        //     layout: layout,
        //     commitsLog: commitsLog,
        // });
    }

    // generateCommitsLog = (layout) => {
    //     const commitsLog = Array(26).fill();
    //     for( let i = 1; i <= 26; i++ ){
    //         const commit = layout.find( e => e.rank === i);
    //         commitsLog[i] = {content:commit.content, hash:commit.i, rank:i,p:(commit.x+commit.w) };
    //     }
    //     return commitsLog.slice(1);
    // }


    // generateBranchData = (branchName, branchData, type = 'master', _x0, _y0,open = true, _w0 = 1, h0 = 1) => {
    //         const branch = Object.keys(branchData).map(
    //             (commitKey, index, kayArray) => {
    //                 const btn = branchData[commitKey].btn === undefined ? 'middle' : branchData[commitKey].btn;
    //                 const x0 = branchData[commitKey].x === undefined ? _x0 + index :  branchData[commitKey].x;
    //                 const w0 = branchData[commitKey].w === undefined ? _w0 : branchData[commitKey].w ;
    //                 let commitForm = 'normal';
    //                 const date = branchData[commitKey].date;
    //                 const title = branchData[commitKey].title;
    //                 if(type !== 'master' && (index === 0 || index === (kayArray.length - 1))) {
    //                     commitForm = type === 'branchUp' ? index === 0 ? 'branch0Up' : open? 'normal':'branch1Up'
    //                                                      : index === 0 ? 'branch1Down' : open? 'normal':'branch0Down';

    //                 }                                  
    //                 return {branchName: branchName,
    //                         i: commitKey, 
    //                         rank: branchData[commitKey].rank,
    //                         content: [title,date],
    //                         commitForm: commitForm, 
    //                         x:x0, y:_y0, w:w0, h:h0, 
    //                         btn: btn,
    //                         static: true}
    //         });
    //     return branch;
    // }

    // generateLayoutData = (CommitsData) =>{
    //     const layout = Object.keys(CommitsData).map(branch =>
    //            this.generateBranchData( branch,
    //                                     CommitsData[branch].commits,
    //                                     CommitsData[branch].config.branchType,
    //                                     CommitsData[branch].config.startPoint,
    //                                     CommitsData[branch].config.rowLevel,
    //                                     CommitsData[branch].config.open)
    //     ).reduce( (currentElement, outputArray) => outputArray.concat(currentElement) ,[]);
    //     return layout;
    // }
    loadCommitLog = (rank) =>  this.setState({currentCommit: this.props.commitsLog[rank-1]});

    nextCommitHandler = () => {
        if(this.props.currentCommit.rank === 26){
            return null;
        }else{
            this.setState({
                currentCommit: this.props.commitsLog[this.props.currentCommit.rank]
            });
        }
    }

    prevCommitHandler = () => {
        if(this.props.currentCommit.rank === 1){
            return null;
        }else{
            this.setState({
                currentCommit: this.props.commitsLog[this.props.currentCommit.rank - 2]
            });
        }
    }

    resizeHandler = () => {
        this.setState({resize: !this.props.resize});
    }

    render () {
        // console.log(this.props.currentCommit);
        const style= {gridTemplateColumns: (this.props.resize ? '74% 25%' : '54% 45%')};
       
        const graph = this.props.loading ? null 
            : <Graph  currentHash = {this.props.currentCommit.hash} 
                    currentCommit = {this.props.currentCommit} 
                    layout = {this.props.layout} 
                    loadCommitLog = {(currentCommit) => this.loadCommitLog(currentCommit)}/>;
        return (
        <div id='MyCareer' className= {styles.MyCareer} style={style}>

            <h1>My Career Repository</h1>

            {graph}
    

            <CommitWrapper 
                title = {this.props.currentCommit.content[0]} 
                date = {this.props.currentCommit.content[1]} 
                hash = {this.props.currentCommit.hash} 
                prevCommit = {this.prevCommitHandler}
                nextCommit = {this.nextCommitHandler}
                resize = {this.props.resize} 
                onResize = {this.resizeHandler}/> 

            <GitLog commitsLog={this.props.commitsLog} 
                    clicked = {(rank) => this.loadCommitLog(rank)}
                    currentrank = {this.props.currentCommit.rank} />

        </div>
        );
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onGenerateData: () => dispatch(__generateData__()),
    };
}

const mapStateToProps = state => {
    return {
        loading: state.career.loading,
        layout: state.career.layout,
        commitsLog: state.career.commitsLog,
        resize: state.career.resize,
        currentCommit: state.career.currentCommit
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MyCareer);