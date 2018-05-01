import React from 'react';
import styles from './CommitDetails.css';
import CustomScrollbars from '../../UI/CustomScrollbars/CustomScrollbars';
import Loadable from 'react-loadable';
import Spinner from '../../Spinner/Spinner';

const commitDetails = (props) => {
    const Commit = Loadable({
        loader: () => import('./Commits/Commit' + props.hash),
        loading: Spinner,
    });
    return (
      <div className={styles.CommitDetails} >
         <CustomScrollbars height={'100%'}>
            <div className= {styles.Commit}>
               <h2 className={styles.Message}> {props.title} <span>{props.date}</span></h2>
               <Commit />
            </div>
         </CustomScrollbars>
      </div>
    );
}
export default commitDetails;

