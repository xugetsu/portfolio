import React, {Component} from 'react';
import styles from './GitLog.css';
// import CustomScrollbars from '../../UI/CustomScrollbars/CustomScrollbars';
import SpringScrollbars from '../../UI/CustomScrollbars/SpringScrollbars';
import {connect} from 'react-redux';
import {__loadCommit__} from '../../../store/actions/index';
class gitLog extends Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef();
        this.state ={
            currentrank: this.props.currentrank
        }
    }

    componentDidUpdate(){
        const scrollbars = this.myRef.current;
        const N = this.props.commitsLog.length;
        scrollbars.scrollTop(46*(N - this.props.currentrank - 3));
    }


    render () {
        let log = null;
        if(this.props.commitsLog){
        const commits = [...this.props.commitsLog].reverse();
        log = commits.map(
            commit => {
                let color = 'inherit';
                let spanbackground = 'none';
                let background = 'linear-gradient(135deg, #3d464e 0%,#1e5799 100%)';
                let alpha = '75';
                let branchName = null;
                if (this.props.currentrank === commit.rank ){
                    color = '#fff';
                    alpha = 'dd';
                    background = 'linear-gradient(135deg, #1e5799 0%,#1e5799 100%)';
                }
                switch (commit.hash[0]) {
                    case 'm': spanbackground = '#ffd500'; branchName = 'Mechatronic'; break;
                    case 'w': spanbackground = '#ff3c00'; branchName = 'Web'+'\u00A0'+'development '; break;
                    default:  spanbackground = '#0077ff'; branchName = 'Languages'; break;
                }
                if (commit.rank === 26){ // well I have no choice here :/ I must fix this particular case soon !!
                    spanbackground = '#0077ff';
                    branchName = 'Languages';
                }
                return <div onClick={() => this.props.onLoadCommit(commit.rank)} 
                            key={`commit ${commit.rank}`} 
                            id= {`commit ${commit.rank}`} 
                            className={styles.Commit}
                            style = {{background}}>

                            <div className={styles.BranchName} 
                                style={{backgroundColor: (spanbackground+alpha)}}>
                                    {branchName[0]}<span>{branchName.slice(1)}</span>
                            </div>

                            <div className={styles.Details}>
                                <p>{commit.content[0]} </p>
                                <p className={styles.Date}>{'On '+commit.content[1]}</p>
                            </div>

                        </div>
                    }
        )};
        
        return (    
            <div className= {styles.GitLog}>
                <SpringScrollbars  ref={this.myRef} 
                                   /*style1*/ width= '100%'  height= '310px' zindex={10}>
                    {log}
                </SpringScrollbars>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onLoadCommit: (rank) => dispatch(__loadCommit__(rank)),
    };
}

const mapStateToProps = state => {
    return {
        currentrank:  state.career.currentCommit.rank,
        commitsLog:   state.career.commitsLog
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(gitLog);