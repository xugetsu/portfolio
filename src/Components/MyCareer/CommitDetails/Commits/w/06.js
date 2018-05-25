import React from 'react';
import CustomScrollbars from '../../../../UI/CustomScrollbars/CustomScrollbars';

const commit = (props) => {
    return (
        <CustomScrollbars scrollId={props.hash} width = {'100%'} height={'450px'} zindex={2} >
            <article>
                <p>Start Learning React.
                <br /> <br />More details coming soon.</p>
            </article>
        </CustomScrollbars> 
    );
}
export default commit;
