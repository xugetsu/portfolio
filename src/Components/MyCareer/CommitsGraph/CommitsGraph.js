import React from 'react';
import styles from './CommitsGraph.css';
import GridLayout from 'react-grid-layout';
import Draggable from 'react-draggable';
import CommitElement from './CommitElement/CommitElement';

const commitsGraph = (props) => {
    const gridWidth = 50; // grid Width
    const rowHeight = 55; // grid Height you can't change the height until you fix branch svg's relation between its height and width
    const layout = props.layout;
   // console.log(layout);

    const commita1 = layout[0];
    const commita3 = layout[2];
    const commitElementa1  = <CommitElement commit = {commita1} 
                                            clicked = {() => props.loadCommitLog(commita1.rank)}
                                            width = { commita1.w* gridWidth + 'px'}
                                            Height = {rowHeight}
                                            active = {commita1.i === props.currentHash}
                                            elementForm = {commita1.commitForm}/>;
    const commitElementa3  = <CommitElement commit = {commita3} 
                                            clicked = {() => props.loadCommitLog(commita3.rank)}
                                            width = { commita3.w * gridWidth + 'px'}
                                            Height = {rowHeight}
                                            active = {commita3.i === props.currentHash}
                                            elementForm = {commita3.commitForm}/>;

    const commits = layout.map( commit => {
        let elementWidth = commit.w * gridWidth + 'px';
        // if( commit.i === 'a2'  ){
        //      elementWidth = 2* gridWidth + 'px' ;
        // }
        //const commitInfo = {rank:commit.rank,hash:commit.i,content:commit.content};
        const commita1 = commit.i === 'm13' ? commitElementa1 : null;    
        const commita3 = commit.i === 'm15' ? commitElementa3 : null; 
        let isActive = commit.i === props.currentHash;
        if(commit.i === 'm12' ){isActive = props.currentHash === 'a01' ? true : false };
        if(commit.i === 'm16' ){isActive = props.currentHash === 'a03' ? true : false };
        if(commit.i === 'm17' ){isActive = props.currentHash === 'w13' ? true : false };
        const commitx  = (commit.i === 'a01' || commit.i === 'a03' )?
                            null
                            : <CommitElement  commit = {commit} 
                                        clicked = {() => props.loadCommitLog(commit.rank)}
                                        width = {elementWidth}
                                        Height = {rowHeight}
                                        Btn = {commit.btn}
                                        active = {isActive}
                                        elementForm = {commit.commitForm}
                            />
        return  <div key={commit.i} style={{position:'relative'}}>
                    <div style={{position:'absolute',bottom:'-5px'}}>{commita1}</div>
                    <div style={{position:'absolute',bottom:'-6px',left:'6px'}}>{commita3}</div>
                    {commitx}
                </div>;
     });
    const currentDraggableXPosition = props.currentCommit.x < 3 ? 0 : - 50*(props.currentCommit.x - 3);
    return (
        <div className={styles.CommitsGraph} >
            <Draggable  handle=".handle"
                        defaultPosition={{x: 0, y: 0 }}
                        bounds={{bottom: 0, left: -100, right: 100, top: -50}}
                        position={null}
                        onStart={this.handleStart} 
                        onDrag={this.handleDrag} 
                        onStop={this.handleStop}>
                <div className={['handle', styles.Handle].join(' ')}
                style={{marginLeft:currentDraggableXPosition}}
                >
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

