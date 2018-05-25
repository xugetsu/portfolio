import React from 'react';
import firstproject from '../../../../../Assets/Images/firstproject.PNG';
import styles from '../commonStyles.css';
import CustomScrollbars from '../../../../UI/CustomScrollbars/CustomScrollbars';


const commit = (props) => {
    return (
        <CustomScrollbars scrollId={props.hash} width = {'100%'} height={'450px'} zindex={2} >
            <article className={styles.Article}>
                <p>First time developing a website / project portfolio.</p>
                <img style={{maxWidth:'100%',display:'block',margin:'10px auto'}}src={firstproject} />
            </article>
        </CustomScrollbars> 
    );
}
export default commit;
