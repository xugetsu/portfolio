import React, {Component} from 'react';
import SideDrawer from '../SideDrawer/SideDrawer';
import NavBar from '../../NavBar/NavBar';
import SpringScrollbars from '../CustomScrollbars/SpringScrollbars';
import {connect} from 'react-redux';
import * as actionCreator from '../../../store/actions/index';

class Layout extends Component{

    constructor(props) {
        super(props);
        this.myRef = React.createRef();
        this.state = {
          open: false,
        }
    }

    componentDidMount(){
        window.addEventListener("resize", () => {
            if( window.innerWidth > 700){
                this.props.onSetOffsetTop()
            };
        });
        this.props.onInitOffsetTop(this.myRef);
    }

    componentWillUnmount () { 
        window.removeEventListener("resize", () => {
            if( window.innerWidth > 700){
                this.props.onSetOffsetTop()
            };
        });
    }

    navigateTo = (i) => {
        const scrollbars = this.myRef.current;
        scrollbars.scrollTop(this.props.offsetTop[i] - 50); // 50 is the height of the NavBar
    }

    scrollHandler = () => {
        if( window.innerWidth > 700){
            this.props.onScroll();
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

const mapDispatchToProps = dispatch => {
    return {
        onInitOffsetTop: (ref) => dispatch(actionCreator.__initOffsetTop__(ref)),
        onSetOffsetTop: () => dispatch(actionCreator.__setOffsetTop__()),
        onScroll: () => dispatch(actionCreator.__handelScroll__()),
    };
};

const mapStateToProps = state => {
    return {
        offsetTop: state.layout.offsetTop,
        shrink: state.layout.shrink,
        currentActive: state.layout.currentActive,
        pass: state.layout.pass,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Layout);