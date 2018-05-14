import React from 'react';
import firstproject from '../../../../../Assets/Images/firstproject.PNG';
import styles from '../commonStyles.css';

const commit6 = () => {
    return (
        <article className={styles.Article}>
            <p>First time developing a website / project portfolio.</p>
            <img style={{maxWidth:'100%',display:'block',margin:'10px auto'}}src={firstproject} />
        </article>
    );
}
export default commit6;
