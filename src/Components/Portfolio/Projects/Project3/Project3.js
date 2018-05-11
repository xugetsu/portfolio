import React from 'react';
import styles from './Project3.css';
import Loadable from 'react-loadable';
import Spinner from '../../../Spinner/Spinner';

const project1 = () => {
    const Gif = Loadable({
        loader: () => import('./careerImg'),
        loading: () => Spinner,
        delay: 10,
        });

    return (
        <div className= {styles.Project1}>
              <div style={{height:'100%',width:'100%'}}>
                <Gif />
            </div>
            <article>
                <h2>My Creer Repository</h2>
                <p>A creative way to represent my career progress
                <br/><br/>
                 I started developping this project in 1 May 2018
                 and it will have more awsome updates very soon. Stay tuned ;) ..
                 <br/><br/><b>Development State : </b>Under construction<br/></p>
            </article>
        </div>
    );
}

export default project1;

