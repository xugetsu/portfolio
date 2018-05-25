import React from 'react';
import amideast from '../../../../../Assets/Images/amideast.PNG';
import CustomScrollbars from '../../../../UI/CustomScrollbars/CustomScrollbars';

const commit = (props) => {
    const ImgStyle = {display:'block',margin:'0 auto',maxWidth:'100%'};
    return (
        <CustomScrollbars scrollId={props.hash} width = {'100%'} height={'450px'} zindex={2} >
            <article>
                <img style={ImgStyle} src={amideast} alt='certificat Amideast' />    
            </article>
        </CustomScrollbars> 

    );
}
export default commit;
