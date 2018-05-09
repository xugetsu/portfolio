import React from 'react';
import NormalType from './NormalType/NormalType';
import BranchType from './BranchType/BranchType';

const commit = (props) =>{

    let color = null;
    switch (props.commit.branchName){
        case  "master": color = '#ffa600'; break;
        case  "webDev": color = '#ff3c00'; break;
        case  "amideast": color = '#0077ff'; break;
        default: color = '#111';
    }
    const inlineStyle = {borderBottomColor:color, width: props.width};
    let commitElement = null;
    if(props.elementForm !== "normal"){
        commitElement = <BranchType key={props.key}
                                    inlineStyle = {inlineStyle}
                                    color = {color}
                                    branchType = {props.elementForm}
                                    active  = {props.active}
                                    clicked = {props.clicked}
                                    content = {props.commit.content[1].slice(4)}/>;
    }else{
        commitElement = <NormalType key={props.key}
                                    inlineStyle = {inlineStyle} 
                                    active  = {props.active}
                                    clicked = {props.clicked}
                                    content = {props.commit.content[1].slice(4)}/>;
    }
    return commitElement;
} 
export default commit;

