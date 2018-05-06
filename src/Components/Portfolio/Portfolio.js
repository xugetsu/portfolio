import React, {Component} from 'react';
import styles from './Portfolio.css';
import Modal from '../UI/Modal/Modal';
import Projects from './Projects/Projects';
import Project1 from './Projects/Project1/Project1';
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
        return (
            <div id='Portfolio' className= {styles.Portfolio}>
                    <Modal show={this.state.showModal} exit = {this.hideModalHandler}> 
                        <Project1 />
                    </Modal>
               <h1>My Portfolio</h1>
               <Projects showProject = {(i) => this.showModalHandler(i)}/>
            </div>
        );
    }    
}

export default Portfolio;

