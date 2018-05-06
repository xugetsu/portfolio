import React, { Component } from 'react';
import MyLogo from './BannerLogo/Logo/MyLogo';
import Competence from '../Competence/Competence';
import { ParallaxBanner } from 'react-scroll-parallax';
import styles from './BannerLogo.css';

class BannerLogo extends Component{
    state = {
        iconIndex: 0,
     //   animationIteration: 0,
    }
    componentDidMount () {  
        window.addEventListener("resize", () => this.forceUpdate());
    }
    componentWillUnmount () { 
        window.removeEventListener("resize", () => this.forceUpdate());
    }
    switchIcon = (e) => {
            this.setState({
                iconIndex: this.state.iconIndex + 1 === 5 ? 0 : this.state.iconIndex + 1,
            }); 
    } 
    render(){
        let h = 1000;
        const innerWidth = window.innerWidth;
        if (innerWidth>600){ h =950;}
        else if (innerWidth>500){ h =800;}
        else { h = 500;}

      return (
        <div className={styles.BannerLogo}>
            <h1 className={styles.H1} >I'm familiar with ...</h1>
            <MyLogo h = {h} 
                    iconIndex = {this.state.iconIndex} 
                    animationIteration = {this.state.animationIteration} 
                    switchIcon = {this.switchIcon} />
            <Competence />
        </div>
        );

    }
}


export default BannerLogo;