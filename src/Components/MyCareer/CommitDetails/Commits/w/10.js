import React from 'react';
import c4 from '../../../../../Assets/Images/c4.PNG';
import CustomScrollbars from '../../../../UI/CustomScrollbars/CustomScrollbars';

const commit = (props) => {
    return (
        <CustomScrollbars scrollId={props.hash} width = {'100%'} height={'450px'} zindex={2} >
            <article>
                <img style={{maxWidth:'100%',display:'block',margin:'10px auto'}}src={c4} />
            </article>
        </CustomScrollbars> 
    );
}
export default commit;
