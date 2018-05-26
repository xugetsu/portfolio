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


    componentDidMount(){
        this.props.onGenerateData();     
    }

    loadCommitLog = (rank) =>  this.setState({currentCommit: this.props.commitsLog[rank-1]});


    render () {
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
    

            <CommitWrapper /> 

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