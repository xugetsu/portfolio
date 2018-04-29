import React , {Component} from 'react';
import React from 'react';
import styles from './A.css';

const a = () => {
    return (
        <div className= {styles.A}>

        </div>
    );
}

class A extends Component{
    render(){
        return(
            <div className= {styles.A}>

            </div>
        );
    };
}

export default A;
export default a;

