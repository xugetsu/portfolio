import React from 'react';
import styles from './Graph.css';
import Draggable from 'react-draggable';
import CommitsGraph from './CommitsGraph/CommitsGraph';
import {connect} from 'react-redux';
import {__loadCommit__} from '../../../store/actions/index';

const graph = (props) => {
    const p =  props.currentCommit.p;
    const currentDraggableXPosition = (p < 3 )? 0 : - 50*(p  - 3);
    const commitsGraph = (<div className={['handle', styles.CommitsGraph].join(' ')}
                            style={{marginLeft:currentDraggableXPosition}}>                     
                            <CommitsGraph layout = {props.layout}
                                        currentHash = {props.currentCommit.hash}
                                        currentCommit = {props.currentCommit}
                                        loadCommitLog = {(rank) => props.onLoadCommit(rank)}/>
                        </div>);
    return props.loading? null : (<div className={styles.Graph} >
                                        <Draggable  handle=".handle"
                                                    defaultPosition={{x: 0, y:0 }}
                                                    bounds={{bottom: 0, left: -100, right: 100, top: -30}}
                                                    position={null}
                                                    onStart={this.handleStart} 
                                                    onDrag={this.handleDrag} 
                                                    onStop={this.handleStop}>
                                            {commitsGraph}
                                        </Draggable>   
                                    </div>);
}

const mapDispatchToProps = dispatch => {
    return {
        onLoadCommit: (rank) => dispatch(__loadCommit__(rank)),
    };
}
const mapStateToProps = state => {
    return {
        loading: state.career.loading,
        layout: state.career.layout,
        currentCommit: state.career.currentCommit
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(graph);