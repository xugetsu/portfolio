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
    const commita3 = layout[2];
    const commitInfoa1 = {hash:commita1.i,content:commita1.content};
    const commitInfoa3 = {hash:commita3.i,content:commita3.content};
    const commitElementa1  = <CommitElement commit = {commita1} 
                                            clicked = {() => props.loadCommitLog(commitInfoa1)}
                                            width = { commita1.w* gridWidth + 'px'}
                                            Height = {rowHeight}
                                            active = {commita1.i === props.currentHash}
                                            elementForm = {commita1.commitForm}/>;
    const commitElementa3  = <CommitElement commit = {commita3} 
                                            clicked = {() => props.loadCommitLog(commitInfoa1)}
                                            width = { commita3.w * gridWidth + 'px'}
                                            Height = {rowHeight}
                                            active = {commita3.i === props.currentHash}
                                            elementForm = {commita3.commitForm}/>;

    const commits = layout.map( commit => {
        let elementWidth = commit.w * gridWidth + 'px';
        // if( commit.i === 'a2'  ){
        //      elementWidth = 2* gridWidth + 'px' ;
        // }
        const commitInfo = {hash:commit.i,content:commit.content};
        const commita1 = commit.i === 'm13' ? commitElementa1 : null;    
        const commita3 = commit.i === 'm15' ? commitElementa3 : null; 
        const commitx  = (commit.i === 'a1' || commit.i === 'a3' )?
                            null
                            : <CommitElement  commit = {commit} 
                                        clicked = {() => props.loadCommitLog(commitInfo)}
                                        width = {elementWidth}
                                        Height = {rowHeight}
                                        Btn = {commit.btn}
                                        active = {commit.i === props.currentHash}
                                        elementForm = {commit.commitForm}
                            />
        return  <div key={commit.i} style={{position:'relative'}}>
                    <div style={{position:'absolute',bottom:'-5px'}}>{commita1}</div>
                    <div style={{position:'absolute',bottom:'-8px'}}>{commita3}</div>
                    {commitx}
                </div>;
     });

    return (
        <div className={styles.CommitsGraph} >
            <Draggable  handle=".handle"
                        defaultPosition={{x: -100, y: 0 }}
                        bounds={{bottom: 0, left: -1000, right: 0, top: -50}}
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

