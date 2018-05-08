import React, {Component} from 'react';
import classes from './Layout.css';
import SideDrawer from '../SideDrawer/SideDrawer';
import NavBar from '../../NavBar/NavBar';
import SpringScrollbars from '../CustomScrollbars/SpringScrollbars';

class Layout extends Component{

    constructor(props) {
        super(props);
        this.myRef = React.createRef();
        this.state = {
          shrink: false,
          open: false
        }
    }

    navigateTo = (i) => {
        const scrollbars = this.myRef.current;
        const elementIds = ['GeneralInfo','MyCareer','Competence','Portfolio','Contact'];
        const elementOffsetTop =document.getElementById(elementIds[i]).offsetTop;
            scrollbars.scrollTop(elementOffsetTop - 50); // 50 is the height of the NavBar
    }

    HandelScroll = () => {
        const scrollbars = this.myRef.current;
        if(scrollbars.getScrollTop() > 50 && !this.state.shrink){
            this.setState({shrink:true});
        }
        if(scrollbars.getScrollTop() < 50 && this.state.shrink){
            this.setState({shrink:false});
        }
    }
    closeSideDrawerHandler = () => {
        this.setState({open: false});
    }
    openSideDrawerHandler = () => {
        this.setState({open: true});
    }
    render(){
        return (
            <SpringScrollbars   ref={this.myRef}  
                                onScroll = {this.HandelScroll} 
                                scrollid={0} 
                                width = {'100vw'} 
                                height = {'100vh'} 
                                zindex={11} >     
            {/*----------------------Children-------------------------*/}   
                <NavBar navigateTo = {(i) => this.navigateTo(i)} 
                        shrink = {this.state.shrink} 
                        showDrawer = {this.openSideDrawerHandler}/>
                <SideDrawer open={this.state.open} 
                            navigateTo = {(i) => this.navigateTo(i)}
                            closeSideDrawer={this.closeSideDrawerHandler}/>
                {this.props.children}
            {/*-------------------------------------------------------*/}
            </SpringScrollbars>
        );
    };
}

export default Layout;