
import React from 'react';
import redirect from '../../../Assets/Icons/svgs/externalink.svg'
import styles from './proceedAnchor.css';
const proceedAnchor = (props) => {
    const {href, position = 'absolute', top = '20px', right = '20px'} = props;
    return (<div className= {styles.TryIt} 
                 style={{position, top, right}}>
                <a  rel='noopener noreferrer' target='_blank' 
                    href={href}>
                    <img  src={redirect} />
                    <span>proceed to the project</span>
                </a>
           </div>);
};

export default proceedAnchor;