import React from 'react';
import CustomScrollbars from '../../../../UI/CustomScrollbars/CustomScrollbars';
import omac from '../../../../../Assets/Images/omac.png';

const commit = (props) => {
    return (
        <CustomScrollbars scrollId={props.hash} width = {'100%'} height={'450px'} zindex={2} >
            <article>
                <img style={{width:'100%',height:'250px',display:'block',margin:'10px auto 50px auto'}}src={omac} />
            </article>
        </CustomScrollbars> 
    );
}
export default commit;
