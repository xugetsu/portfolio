import React from 'react';
import styles from './Graph.css';
import GridLayout from 'react-grid-layout';
import Draggable from 'react-draggable';
import Commit from '../Commit/Commit';

const graph = (props) => {
    const gridWidth = 40; // grid Width
    const rowHeight = 55; // grid Height you can't change the height until you fix branch svg's relation between its height and width
    const layout = [
                    {i: 'c1', x: 0, y: 0, w: 1, h: 1, static: true, content:'123'},
                    {i: 'c2', x: 1, y: 0, w: 1, h: 1, static: true, content:'123'},
                    {i: 'c3', x: 2, y: 0, w: 1, h: 1, static: true, content:'123'},
                    {i: 'c4', x: 3, y: 0, w: 2, h: 1, static: true, content:'123'},
                    {i: 'b5', x: 3, y: 1, w: 1, h: 1, static: true, content:'123'},
                    {i: 'c6', x: 4, y: 1, w: 1, h: 1, static: true, content:'123'},
                    {i: 'c7', x: 5, y: 1, w: 1, h: 1, static: true, content:'123'},
                    {i: 'c8', x: 6, y: 1, w: 1, h: 1, static: true, content:'123'},
                    {i: 'c9', x: 7, y: 1, w: 1, h: 1, static: true, content:'123'},
                    {i: 'c10', x: 5, y: 0, w: 1, h: 1, static: true, content:'123'},
                    {i: 'c11', x: 6, y: 0, w: 1, h: 1, static: true, content:'123'},
                    {i: 'c12', x: 7, y: 0, w: 1, h: 1, static: true, content:'123'},
    ];
    const commits = layout.map( commit => {
        return  <div key={commit.i}>
                    <Commit commit = {commit} 
                            clicked = {() => props.loadCommitLog(+commit.i[1])}
                            width = {gridWidth}
                            Height = {rowHeight}/>
                </div>;
    });
    return (
        <div className={styles.Graph} >
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
export default graph;

