import React, {Component} from 'react';
import GridLayout from 'react-grid-layout';
import CommitElement from './CommitElement/CommitElement';

class CommitsGraph extends Component {
//    componentDidUpdate(){
//        console.log('[CommitsGraph] did update')
//    } 
   render() {
    const gridWidth = 50; // grid Width
    const rowHeight = 5;
    const layout = this.props.layout;
    const commits = layout.map( commit => {
        let elementWidth = commit.w * gridWidth + 'px';
        let isActive = commit.i === this.props.currentHash;
        return (<div key={commit.i} style={{position:'relative'}}>
                    <CommitElement
                            commit = {commit} 
                            clicked = {() => this.props.loadCommitLog(commit.rank)}
                            width = {elementWidth}
                            Height = {rowHeight}
                            Btn = {commit.btn}
                            active = {isActive}
                            elementForm = {commit.commitForm}/>
                </div>);  
    });
    return (
        <GridLayout margin = {[0,20]} 
                    layout = {layout} 
                    cols = {layout.length} 
                    rowHeight = {rowHeight} 
                    width = {layout.length*gridWidth} >
            {commits}
        </GridLayout>   
    );}
}
export default CommitsGraph;

