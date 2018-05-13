import React from 'react';
import styles from './CommitWrapper.css';
import CustomScrollbars from '../../UI/CustomScrollbars/CustomScrollbars';
import Loadable from 'react-loadable';
import Spinner from '../../Spinner/Spinner';
import next from '../../../Assets/Icons/svgs/next.svg';
import prev from '../../../Assets/Icons/svgs/prev.svg';

const commitWrapper = (props) => {
    const Commit = Loadable({
        loader: () => import('./Commits/'+props.hash[0]+'/'+props.hash.slice(1)),
        //.catch( error => console.log('Handled Error :',error) ),
        loading: Spinner,
        // Issue to fix : Unhandled Rejection when import failed...
        // If we use catch with import as commented above, the error will no longer 
        // transmited to Spinner's props. Which is unwanted behavior.
        timeout: 10000, // 10 seconds
        render(loaded, props){
            let LoadedComponent = loaded.default;
            return  (<CustomScrollbars scrollId={props.hash} width = {'auto'} height={'380px'} zindex={2} >
                        <LoadedComponent />
                    </CustomScrollbars>);
        }
    });
    const date= props.date;
    return (
        <div className={styles.CommitWrapper} >            
            <div className={styles.ButtonWrapper} >
                <button onClick={props.prevCommit}><img width='20px' alt='prev' src={prev}/></button>  
                <button onClick={props.nextCommit}><img width='20px' alt='next' src={next}/></button>         
            </div>    
            <h2 className={styles.Message}> {props.title} 
                <span>
                    {'On, '+date.slice(0,3)+'. '+date.slice(4,6)+' '+date.slice(7,10)+', '+date.slice(11)}
                </span>
            </h2>
            <br/> <Commit />
        </div>
    );      
}
export default commitWrapper;

