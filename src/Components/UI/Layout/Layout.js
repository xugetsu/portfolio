import React, {Component} from 'react';
// import classes from './Layout.css';
import SideDrawer from '../SideDrawer/SideDrawer';
import NavBar from '../../NavBar/NavBar';
import SpringScrollbars from '../CustomScrollbars/SpringScrollbars';

class Layout extends Component{

    constructor(props) {
        super(props);
        this.myRef = React.createRef();
        this.navigationElementsId = ['GeneralInfo','MyCareer','Competence','Portfolio','Contact'];
        this.state = {
          shrink: false,
          open: false,
          elementOffsetTop: null,
          currentActive: -1,
        }
    }
    componentDidMount(){
        window.addEventListener("resize", () => this.setElementOffsetTop());
        this.setElementOffsetTop();
    }
    componentWillUnmount () { 
        window.removeEventListener("resize", () => this.setElementOffsetTop());
    }

    setElementOffsetTop = () => {
        const elementOffsetTop = this.navigationElementsId.map( elementId => 
            document.getElementById(elementId).offsetTop
        );
        this.setState({elementOffsetTop:elementOffsetTop});
    }

    navigateTo = (i) => {
        const scrollbars = this.myRef.current;
        scrollbars.scrollTop(this.state.elementOffsetTop[i] - 50); // 50 is the height of the NavBar
    }

    scrollHandler = () => {
        const scrollbars = this.myRef.current;
        if(scrollbars.getScrollTop() > 50 && !this.state.shrink){
            this.setState({shrink:true});
        }
        if(scrollbars.getScrollTop() < 50 && this.state.shrink){
            this.setState({shrink:false});
        }
        // if(scrollbars.getScrollTop() < this.state.elementOffsetTop[2] && scrollbars.getScrollTop() > this.state.elementOffsetTop[1] && this.state.currentActive !== 1){
        //     this.setState({currentActive:1});
        // }else if(scrollbars.getScrollTop() < this.state.elementOffsetTop[3] && scrollbars.getScrollTop() > this.state.elementOffsetTop[2] && this.state.currentActive !== 2){
        //     this.setState({currentActive:2});
        // }else if(scrollbars.getScrollTop() < this.state.elementOffsetTop[4] && scrollbars.getScrollTop() > this.state.elementOffsetTop[3] && this.state.currentActive !== 3){
        //     this.setState({currentActive:3});
        // }else if( scrollbars.getScrollTop() > this.state.elementOffsetTop[4] && this.state.currentActive !== 4){
        //     this.setState({currentActive:4});
        // }else{
        //     null;
        // }
    }
    closeSideDrawerHandler = () => {
        this.setState({open: false});
    }
    openSideDrawerHandler = () => {
        this.setState({open: true});
    }
    render(){
        // console.log(this.state.currentActive);
        return (
            <SpringScrollbars   ref={this.myRef}  
                                onScroll = {this.scrollHandler} 
                                scrollid={0} 
                                width = {'100vw'} 
                                height = {'100vh'} 
                                zindex={11} >     
            {/*----------------------Children-------------------------*/}   
                <NavBar navigateTo = {(i) => this.navigateTo(i)} 
                        shrink = {this.state.shrink} 
                        currentActive = {this.state.currentActive}
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