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

    render () {
        const style= {gridTemplateColumns: (this.props.resize ? '74% 25%' : '54% 45%')};
        return (
        <div id='MyCareer' className= {styles.MyCareer} style={style}>
            <h1>My Career Repository</h1>
            <Graph/>
            <CommitWrapper /> 
            <GitLog />
        </div>
        );
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onGenerateData: () => dispatch(__generateData__()),
    };
};

const mapStateToProps = state => {
    return {
        resize: state.career.resize,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MyCareer);