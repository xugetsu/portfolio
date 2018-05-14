import React from 'react';
import amideast from '../../../../../Assets/Images/amideast.PNG';
const commit = () => {
    const ImgStyle = {display:'block',margin:'0 auto',maxWidth:'100%'};
    return (
        <article>
            <img style={ImgStyle} src={amideast} alt='certificat Amideast' />    
        </article>
    );
}
export default commit;
