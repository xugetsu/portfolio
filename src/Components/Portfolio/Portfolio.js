import React, {Component} from 'react';
import styles from './Portfolio.css';
import Loadable from 'react-loadable';
import Modal from '../UI/Modal/Modal';
import Spinner from '../Spinner/Spinner';
import Projects from './Projects/Projects';
class Portfolio extends Component{
    state = {
        projectNumber: 1,
        showModal: false
    }
    hideModalHandler = (e) => {
        this.setState({showModal:false});
    }
    showModalHandler = (projectNumber) => {
        this.setState({showModal:true, projectNumber:projectNumber});
    }
    
    render (){
        const n = this.state.projectNumber;
        const Project = Loadable({
            loader: () => import('./Projects/Project'+n+'/Project'+n),
            loading: Spinner,
            delay: 200,
            timeout: 10000, // 10 seconds
        });
        return (
            <div id='Portfolio' className= {styles.Portfolio}>
                <Modal show={this.state.showModal} exit = {this.hideModalHandler}> 
                   <Project />
                </Modal>
                <h1>My Portfolio</h1>
                <Projects showProject = {(i) => this.showModalHandler(i)}/>
            </div>
        );
    }    
}

export default Portfolio;

