import React from 'react';
import html5 from '../../../../../Assets/Icons/pngs/html5.png';
import styles from '../commonStyles.css';
const commit1 = () => {
    return (
        <article className={styles.Article}>
            <p> I started learning html (Hyper Text Markup Language) through 
            <a rel="noopener noreferrer" target='_blank' href='https://www.w3schools.com/'><b> w3schools</b></a> and many other websites.</p>
            <img style={{display:'block',margin:'10px auto'}} src={html5} height={200} alt='html5' />
        </article>
    );
}
export default commit1;
