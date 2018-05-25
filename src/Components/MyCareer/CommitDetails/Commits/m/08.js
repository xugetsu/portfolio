import React from 'react';
import c from '../../../../../Assets/Images/c2.PNG';
import CustomScrollbars from '../../../../UI/CustomScrollbars/CustomScrollbars';

const commit = (props) => {
    return (
        <CustomScrollbars scrollId={props.hash} width = {'100%'} height={'450px'} zindex={2} >
            <article>
                <p><br /> <br />More details coming soon.</p>
                <img style={{height:'300px',display:'block',margin:'10px auto'}}src={c} />
            </article>
        </CustomScrollbars> 

    );
}
export default commit;
