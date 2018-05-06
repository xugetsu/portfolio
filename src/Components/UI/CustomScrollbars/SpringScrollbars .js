import React, { Component } from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import { SpringSystem, MathUtil } from 'rebound';

export default class SpringScrollbars extends Component {

    constructor(props, ...rest) {
        super(props, ...rest);
        this.handleSpringUpdate = this.handleSpringUpdate.bind(this);
    }

    componentDidMount() {
        this.springSystem = new SpringSystem();
        this.spring = this.springSystem.createSpring();
        this.spring.addListener({ onSpringUpdate: this.handleSpringUpdate });
    }

    componentWillUnmount() {
        this.springSystem.deregisterSpring(this.spring);
        this.springSystem.removeAllListeners();
        this.springSystem = undefined;
        this.spring.destroy();
        this.spring = undefined;
    }

    getScrollTop() {
        return this.refs.scrollbars.getScrollTop();
     }

    getScrollHeight() {
        return this.refs.scrollbars.getScrollHeight();
     }

    getHeight() {
        return this.refs.scrollbars.getHeight();
     }

   
    scrollTop(top) {
        const { scrollbars } = this.refs;
        const scrollTop = scrollbars.getScrollTop();
        const scrollHeight = scrollbars.getScrollHeight();
        const val = MathUtil.mapValueInRange(top, 0, top, top * 0.1, top);
        this.spring.setCurrentValue(scrollTop).setAtRest();
        this.spring.setEndValue(val);
    }

    handleSpringUpdate(spring) {
        const { scrollbars } = this.refs;
        const val = spring.getCurrentValue();
        scrollbars.scrollTop(val);
        
    }

    render() {
        return (
            <Scrollbars  {...this.props}   ref="scrollbars"/>
        );
    }
}