import React, { Component } from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import { SpringSystem } from 'rebound';
import styles from './CustomScrollbars.css';
export default class SpringScrollbars extends Component {

    componentDidMount() {
        this.springSystem = new SpringSystem();
        this.spring = this.springSystem.createSpring(100, 13);
        this.spring.addListener({ onSpringUpdate: this.handleSpringUpdate });
    }
   // more about springsystem :  https://tympanus.net/codrops/2016/03/08/spring-loaders-rebound-canvas/
    componentWillUnmount() {
        this.springSystem.deregisterSpring(this.spring);
        this.springSystem.removeAllListeners();
        this.springSystem = undefined;
        this.spring.destroy();
        this.spring = undefined;
    }

    getScrollTop    = () => this.refs.scrollbars.getScrollTop();
    getScrollHeight = () => this.refs.scrollbars.getScrollHeight();
    getHeight       = () => this.refs.scrollbars.getHeight();
   
    scrollTop(top) {
        const { scrollbars } = this.refs;
        const currentscrollPosition = scrollbars.getScrollTop();
        this.spring.setCurrentValue(currentscrollPosition).setAtRest();
        this.spring.setEndValue(top);
    }

    handleSpringUpdate = (spring) => {
        const { scrollbars } = this.refs;
        const val = spring.getCurrentValue();
        scrollbars.scrollTop(val);
    }

    render() {
        const zIndex = this.props.zindex;
        const VerticalThumb = (defaultStyles, props) => <div {...props} 
                                                    onClick = { (e) => e.stopPropagation() } // this added to not exit from  a backdrop when you click on the thumb
                                                    className={styles.ThumbVertical} 
                                                    style={{...defaultStyles,zIndex:zIndex}}/>
        const VerticalTrack = (defaultStyles, props) => <div {...props} 
                                              onClick = { (e) => e.stopPropagation() }// this added to not exit from  a backdrop when you click on the truck
                                              className={styles.TrackVertical} 
                                              style={{...defaultStyles,zIndex:zIndex+1}}/>
        
        return (
            <Scrollbars  {...this.props} ref="scrollbars"
                    style={{ width:this.props.width, height: this.props.height}}
                    renderTrackVertical={VerticalTrack}    
                    renderThumbVertical={VerticalThumb}/>
        );
    }
}