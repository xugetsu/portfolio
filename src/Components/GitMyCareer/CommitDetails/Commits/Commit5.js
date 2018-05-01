import React from 'react';
import html5 from '../../../../Assets/Icons/pngs/html5.png';

const commit1 = () => {
    return (
        <article>
            <p>Starting My journey to becoming a web developer from scratch.<br /> I started learning html (Hyper Text Markup Language) through <b>w3schools</b> and many other websites.</p>
            <img style={{display:'block',margin:'10px auto'}} src={html5} height={200} alt='html5' />
        </article>
    );
}
export default commit1;
