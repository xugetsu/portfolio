import React from 'react';
import styles from './CommitsGraph.css';
import GridLayout from 'react-grid-layout';
import Draggable from 'react-draggable';
import CommitElement from './CommitElement/CommitElement';

const commitsGraph = (props) => {
    const gridWidth = 50; // grid Width
    const rowHeight = 55; // grid Height you can't change the height until you fix branch svg's relation between its height and width
    const layout = props.layout;
    const commits = layout.map( commit => {
        return  <div key={commit.i}>
                    <CommitElement commit = {commit} 
                            clicked = {() => props.loadCommitLog(commit.hash)}
                            width = {gridWidth}
                            Height = {rowHeight}
                            active = {commit.hash === props.currentHash}/>
                </div>;
    });
    return (
        <div className={styles.CommitsGraph} >
            <Draggable  handle=".handle"
                        defaultPosition={{x: -100, y: 0 }}
                        bounds={{bottom: 0, left: -100, right: 0, top: -100}}
                        position={null}
                        onStart={this.handleStart} 
                        onDrag={this.handleDrag} 
                        onStop={this.handleStop}>
                <div className={['handle', styles.Handle].join(' ')}>
                    <GridLayout margin = {[0,0]} 
                                layout = {layout} 
                                cols = {layout.length} 
                                rowHeight = {rowHeight} 
                                width = {layout.length*gridWidth} >
                        {commits}
                    </GridLayout>   
                </div>
            </Draggable>   
        </div>
    );
}
export default commitsGraph;

