import React from 'react';
import css3 from '../../../../../Assets/Icons/svgs/css3.svg';
import CustomScrollbars from '../../../../UI/CustomScrollbars/CustomScrollbars';

const commit = (props) => {
  return (
    <CustomScrollbars scrollId={props.hash} width = {'100%'} height={'450px'} zindex={2} >
      <article>
        <p>Starting learning Cascading Style Sheets (CSS).</p>
        <p>CSS is a style sheet language used for describing the presentation of a document written 
        in a markup language like HTML. CSS is a cornerstone technology of the World Wide Web, 
        alongside HTML and JavaScript.</p>
        <br />
        <img style={{height:'150px',display:'block',margin:'10px auto'}} src={css3} height={200} alt='css3' />
      </article>
    </CustomScrollbars> 
  );
}
export default commit;
