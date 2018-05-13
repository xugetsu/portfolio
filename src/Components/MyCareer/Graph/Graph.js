import React from 'react';
import styles from './Graph.css';
import Draggable from 'react-draggable';
import CommitsGraph from './CommitsGraph/CommitsGraph';

const graph = (props) => {
    const p =  props.currentCommit.p;
    const currentDraggableXPosition = (p < 3 )? 0 : - 50*(p  - 3);
    return (
        <div className={styles.CommitsGraph} >
            <Draggable  handle=".handle"
                        defaultPosition={{x: 0, y:0 }}
                        bounds={{bottom: 0, left: -100, right: 100, top: -30}}
                        position={null}
                        onStart={this.handleStart} 
                        onDrag={this.handleDrag} 
                        onStop={this.handleStop}>
                <div className={['handle', styles.Handle].join(' ')}
                       style={{marginLeft:currentDraggableXPosition}}>                     
                    <CommitsGraph layout = {props.layout}
                                  currentHash = {props.currentHash}
                                  currentCommit = {props.currentCommit}
                                  loadCommitLog = {(currentCommit) => props.loadCommitLog(currentCommit)}/>
                </div>
            </Draggable>   
        </div>
    );
}
export default graph;

