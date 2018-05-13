import React from 'react';
import styles from './Modal.css';
import Backdrop from '../Backdrop/Backdrop';
import CustomScrollbars from '../CustomScrollbars/CustomScrollbars';

class Modal extends React.Component{
    shouldComponentUpdate(nextProps, nextState){
        return this.props.showModal !== nextProps.showModal || 
               this.props.children !== nextProps.children
    }
    render(){
        return (
             <Backdrop show = {this.props.show}  
                   clicked = {this.props.exit}>
                <CustomScrollbars 
                    scrollId={3} width = {'100vw'} height = {'100vh'} zindex={110}>
                    <div className = {styles.Modal} 
                         onMouseDown = { (e) => e.stopPropagation() }> 
                        <div className = {styles.ExitBtn} onClick = {this.props.exit}>
                            <div className = {styles.A}></div>
                            <div className = {styles.B}></div>
                        </div>
                        {this.props.children}
                    </div>
                </CustomScrollbars>                 
           </Backdrop>
        );        
    }
}

export default Modal;

