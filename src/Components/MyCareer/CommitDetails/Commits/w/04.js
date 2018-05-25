import React from 'react';
import java from '../../../../../Assets/Icons/svgs/javaScript.svg';
import styles from '../commonStyles.css';
import CustomScrollbars from '../../../../UI/CustomScrollbars/CustomScrollbars';

const commit = (props) => {
  return (
    <CustomScrollbars scrollId={props.hash} width = {'100%'} height={'450px'} zindex={2} >

    <article className={styles.Article}>
      <p>After my first try to create a website without JavaScript, 
        I immediately realised its importance : Javascript is like the soul to the webpage. It makes its content dynamic 
        and interactive with the user. It handles all the logic of the website and the data flow between 
        client and server.</p>
      <img style={{height:'150px',display:'block',margin:'10px auto'}} src={java} alt='javascript'/>
    </article>
    </CustomScrollbars> 
  );
}
export default commit;