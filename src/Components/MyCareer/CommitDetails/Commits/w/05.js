import React from 'react';
import es6 from '../../../../../Assets/Icons/svgs/es6.svg';
import styles from '../commonStyles.css';
import CustomScrollbars from '../../../../UI/CustomScrollbars/CustomScrollbars';

const commit = (props) => {
    const d= 5;
    return (
      <CustomScrollbars scrollId={props.hash} width = {'100%'} height={'450px'} zindex={2} >
        <article className={styles.Article}>
          <p>
          JavaScripthas evolved and I need to stay up to date !!
          <br/><br/>
          ES6 (ECMA Script6) is a major update to JavaScript that includes dozens of new features. With a focus on simplicity and readability.
          Whether you are building with a framework like React or websites in Vanilla JS, you are going to love everything about ES6.
          <br/><br/>
          ES6's implementation covers a lot of new features like Support for constants, Block Scope, Arrow Functions and more..!
          </p>
          <img style={{height:'150px',display:'block',margin:'10px auto'}} src={es6} alt='EcmaScript6'/>
        </article>
      </CustomScrollbars> 
    );
}
export default commit;
