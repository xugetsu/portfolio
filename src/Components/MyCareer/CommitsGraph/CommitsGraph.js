import React from 'react';
import styles from './CommitsGraph.css';
import GridLayout from 'react-grid-layout';
import Draggable from 'react-draggable';
import CommitElement from './CommitElement/CommitElement';

const commitsGraph = (props) => {
    const gridWidth = 50; // grid Width
    const rowHeight = 55; // grid Height you can't change the height until you fix branch svg's relation between its height and width
    const layout = props.layout;
    console.log(layout);

    const commita1 = layout[0];
    const commitInfoa1 = {hash:commita1.i,content:commita1.content};
    const commitElementa1  = <CommitElement commit = {commita1} 
                                            clicked = {() => props.loadCommitLog(commitInfoa1)}
                                            width = { commita1.w * gridWidth + 'px'}
                                            Height = {rowHeight}
                                            active = {commita1.i === props.currentHash}
                                            elementForm = {commita1.commitForm}/>;

    const commits = layout.map( commit => {
        const commitInfo = {hash:commit.i,content:commit.content};
        const commita1 = commit.i === 'm7' ? commitElementa1 : null;    
        const commitx  = commit.i === 'a1' ? null : <CommitElement  commit = {commit} 
                                                        clicked = {() => props.loadCommitLog(commitInfo)}
                                                        width = { commit.w * gridWidth + 'px'}
                                                        Height = {rowHeight}
                                                        active = {commit.i === props.currentHash}
                                                        elementForm = {commit.commitForm}
                                                        />
        return  <div key={commit.i} style={{position:'relative'}}>
                    <div style={{position:'absolute',bottom:'-5px'}}>{commita1}</div>
                    {commitx}
                </div>;
     });

    return (
        <div className={styles.CommitsGraph} >
            <Draggable  handle=".handle"
                        defaultPosition={{x: -100, y: 0 }}
                        bounds={{bottom: 0, left: -400, right: 0, top: 0}}
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

