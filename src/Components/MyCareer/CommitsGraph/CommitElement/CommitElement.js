import React from 'react';
import CommitStyles from './CommitElement.css';
import BranchStyles from './BranchElement.css';
import Branch from './branch';
const commit = (props) =>{

    let color = null;
    switch (props.commit.branchName){
        case  "master": color = '#ffa600'; break;
        case  "webDev": color = '#ff3c00'; break;
        case  "amideast": color = '#0077ff'; break;
        default: color = '#111';
    }
    const inlineStyle = {borderBottomColor:color, width: props.width};

    let classStyle = CommitStyles;
    let newBranch = null;
    if(props.elementForm !== "normal"){
        classStyle =  BranchStyles;
        newBranch = <Branch color = {color} width={props.width} branchType={props.elementForm}/>;
    }
   
    return (
        <div key={props.key} className= {classStyle.Commit} style={inlineStyle}>
            <span onClick = {props.clicked} 
                  style={{background:props.active ? '#0099ff':'#2b2b2b',
                          transform: props.active ? 'scale(1.2)':''}}>
                <div  className= {classStyle.Details} >
                    {props.commit.content[1].slice(4)}
                </div>
            </span>
            {newBranch}
        </div> );
} 
export default commit;

