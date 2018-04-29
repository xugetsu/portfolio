import React from 'react';
import styles from './GitMyCareer.css';
import gitsvm from '../../Assets/Icons/pngs/gitsvm.png';
import Commit from './Commit/Commit';
import Branch from './Branch/Branch';
import Grid from 'react-css-grid';
import GridLayout from 'react-grid-layout';
import Draggable from 'react-draggable';

const gitMyCareer = () => {
    var layout = [
        {i: 'c1', x: 0, y: 0, w: 1, h: 1, static: true},
        {i: 'c2', x: 1, y: 0, w: 1, h: 1, static: true},
        {i: 'c3', x: 2, y: 0, w: 1, h: 1, static: true},
        {i: 'c4', x: 3, y: 0, w: 2, h: 1, static: true},
        {i: 'b1', x: 3, y: 1, w: 1, h: 1, static: true},
        {i: 'c5', x: 4, y: 1, w: 1, h: 1, static: true},
        {i: 'c6', x: 5, y: 1, w: 1, h: 1, static: true},
        {i: 'c7', x: 6, y: 1, w: 1, h: 1, static: true},
        {i: 'c8', x: 7, y: 2, w: 1, h: 1, static: true},
      ];
    const commits = layout.map( commit => {
        const width = commit.w*50 + 'px';
        const color = commit.y ? (commit.y === 1 ? '#ff3c00' : '#ff5c50' ) : null;
        const cmp = (commit.i[0] === 'b') ? <Branch content={commit.i}/> : 
                                            <Commit width={width} color={color} content={commit.i}/>;
        return <div key={commit.i}> {cmp}</div>;
        });
    return (
        <div className= {styles.GitMyCareer}>
            <img className= {styles.GitSvm} src={gitsvm} width={200} />
            <h1>Git - My Career</h1>
            <div className={styles.Layout} >
            <Draggable
                //axis="both"
                handle=".handle"
                defaultPosition={{x: 0, y: 0}}
                bounds={{bottom: 100, left: -300, right: 100, top: -300}}
                position={null}
                onStart={this.handleStart} onDrag={this.handleDrag} onStop={this.handleStop}
                
                >
                <div className={['handle', styles.Handle].join(' ')}>
                    <GridLayout margin={[0,0]} layout={layout} cols={9} rowHeight={55} width={450} >
                            {commits}
                    </GridLayout>   
                </div>
            </Draggable>   
            </div>
            <div className={styles.GitLog} >
               
            </div>
        </div>
    );
}

export default gitMyCareer;