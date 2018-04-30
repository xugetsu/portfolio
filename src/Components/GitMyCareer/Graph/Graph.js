import React from 'react';
import styles from './Graph.css';
import GridLayout from 'react-grid-layout';
import Draggable from 'react-draggable';

const graph = (props) => {
    return (
        <div className={styles.Graph} >
            <Draggable
                handle=".handle"
                defaultPosition={{x: 0, y: 0}}
                bounds={{bottom: 100, left: -300, right: 100, top: -300}}
                position={null}
                onStart={this.handleStart} onDrag={this.handleDrag} onStop={this.handleStop}>
                <div className={['handle', styles.Handle].join(' ')}>
                    <GridLayout margin={[0,0]} layout={props.layout} cols={9} rowHeight={55} width={450} >
                        {props.children}
                    </GridLayout>   
                </div>
            </Draggable>   
        </div>
    );
}
export default graph;

