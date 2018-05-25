import React from 'react';
import html5 from '../../../../../Assets/Icons/pngs/html5.png';
import styles from '../commonStyles.css';
import CustomScrollbars from '../../../../UI/CustomScrollbars/CustomScrollbars';

const commit1 = (props) => {
    return (
        <CustomScrollbars scrollId={props.hash} width = {'100%'} height={'450px'} zindex={2} >
            <article className={styles.Article}>
                <p> I started learning Hyper Text Markup Language (HTML) through 
                <a rel="noopener noreferrer" target='_blank' href='https://www.w3schools.com/'><b> w3schools</b></a> and many other websites.</p>
                <p>HTML is the skeleton and the foundation of all web pages. It's often the first language learned by designers and is core to front-end development work.</p>
                <img style={{display:'block',margin:'10px auto'}} src={html5} height={200} alt='html5' />
            </article>
        </CustomScrollbars> 
    );
}
export default commit1;
