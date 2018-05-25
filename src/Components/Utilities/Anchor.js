import React from 'react';

const Anchor = (props) => {
    const color  = props.color;
    return <a style={{color}}
        href={props.href} target="_blank" rel="noopener noreferrer">{props.children}</a>
}

export default Anchor;