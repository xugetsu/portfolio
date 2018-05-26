import React from 'react';
import styles from './CommitWrapper.css';
import CustomScrollbars from '../../UI/CustomScrollbars/CustomScrollbars';
import Loadable from 'react-loadable';
import Spinner from '../../Spinner/Spinner';
import next from '../../../Assets/Icons/svgs/next.svg';
import prev from '../../../Assets/Icons/svgs/prev.svg';
import {connect} from 'react-redux';
import * as actionCreator from '../../../store/actions/index';

const commitWrapper = (props) => {
    const [title, date] = props.currentCommit.content;
    const hash = props.currentCommit.hash;
    const Commit = Loadable({
        loader: () => import('./Commits/'+hash[0]+'/'+hash.slice(1)),
        //.catch( error => console.log('Handled Error :',error) ),
        loading: Spinner,
        // Issue to fix : Unhandled Rejection when import failed...
        // If we use catch with import as commented above, the error will no longer 
        // transmited to Spinner's props. Which is unwanted behavior.
        timeout: 10000, // 10 seconds    
        });

    return (
        <div className={styles.CommitWrapper}>             
            <button className={styles.Resize} onClick = {props.onResize} >
                   <img width='20px' alt='prev' src={props.resize ? prev : next }/>
                </button> 
            <h2 className={styles.Message}> {title} 
                <span>
                    {'On, '+date.slice(0,3)+'. '+date.slice(4,6)+' '+date.slice(7,10)+', '+date.slice(11)}
                </span>
            </h2>
            <br/> 
            <Commit />
            <div className={styles.ButtonWrapper} >
                <button onClick={props.onPrevCommit}><img width='20px' alt='prev' src={prev}/></button>  
                <button onClick={props.onNextCommit}><img width='20px' alt='next' src={next}/></button>     
            </div>        
        </div>
    );      
}

const mapDispatchToProps = dispatch => {
    return {
        onResize:     () => dispatch(actionCreator.__resize__()),
        onPrevCommit: () => dispatch(actionCreator.__prevCommit__()),
        onNextCommit: () => dispatch(actionCreator.__nextCommit__()),
    };
}

const mapStateToProps = state => {
    return {
        resize: state.career.resize,
        currentCommit: state.career.currentCommit
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(commitWrapper);