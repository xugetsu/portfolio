import React, {Component} from 'react';
import styles from './GitMyCareer.css';
import gitsvm from '../../Assets/Icons/pngs/gitsvm.png';
import Commit from './Commit/Commit';
import Branch from './Branch/Branch';
import Grid from 'react-css-grid';
import Loadable from 'react-loadable';
import Spinner from '../Spinner/Spinner';
import Graph from './Graph/Graph';

class GitMyCareer extends Component {
    state = {
        hash:2
    }
    commitSelectHandler = (hash) => {
        this.setState({hash: hash});
    }
    render () {
        const CommitDetails = Loadable({
            loader: () => import('./CommitDetails/Commit'+this.state.hash+'/Commit'+this.state.hash),
            loading: Spinner,
        });
        var layout = [
            {i: 'c1', x: 0, y: 0, w: 1, h: 1, static: true},
            {i: 'c2', x: 1, y: 0, w: 1, h: 1, static: true},
            {i: 'c3', x: 2, y: 0, w: 1, h: 1, static: true},
            {i: 'c4', x: 3, y: 0, w: 2, h: 1, static: true},
            {i: 'b5', x: 3, y: 1, w: 1, h: 1, static: true},
            {i: 'c6', x: 4, y: 1, w: 1, h: 1, static: true},
            {i: 'c7', x: 5, y: 1, w: 1, h: 1, static: true},
            {i: 'c8', x: 6, y: 1, w: 1, h: 1, static: true},
            {i: 'c9', x: 7, y: 1, w: 1, h: 1, static: true},
            {i: 'c10', x: 5, y: 0, w: 1, h: 1, static: true},
            {i: 'c11', x: 6, y: 0, w: 1, h: 1, static: true},
            {i: 'c12', x: 7, y: 0, w: 1, h: 1, static: true},
          ];
        const commits = layout.map( commit => {
            const width = commit.w*50 + 'px';
            const color = commit.y ? (commit.y === 1 ? '#ff3c00' : '#ff5c50' ) : null;
            const cmp = (commit.i[0] === 'b') ? 
                    <Branch clicked = {() => this.commitSelectHandler(+commit.i[1])} 
                            content={commit.i}/> 
                    : 
                    <Commit clicked = {() => this.commitSelectHandler(+commit.i[1])} 
                            width={width} color={color} content={'d12m02y2017'}/>;
                    return <div key={commit.i}> {cmp}</div>;
            });
        return (
        <div className= {styles.GitMyCareer}>
            <img className= {styles.GitSvm} src={gitsvm} width={200} />
            <h1>Git - My Career</h1>
            <Graph layout={layout}>
                {commits}
            </Graph>
            <div className={styles.GitLog} >
                <CommitDetails />
            </div>
        </div>
        );
    }
}

export default GitMyCareer;