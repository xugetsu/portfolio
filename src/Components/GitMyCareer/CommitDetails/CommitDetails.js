import React from 'react';
import styles from './CommitDetails.css';
import CustomScrollbars from '../../UI/CustomScrollbars/CustomScrollbars';

const commitDetails = (props) => {
    return (
        <CustomScrollbars>
            <div className= {styles.Commit}>
                <h2 className={styles.Message}>
                    {props.title} <span>{props.date}</span>
                </h2>
                <article>
                    {props.children}
                </article>
            </div>
        </CustomScrollbars>
    );
}
export default commitDetails;

