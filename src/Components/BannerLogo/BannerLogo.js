import React, { Component } from 'react';
import MyLogo from './BannerLogo/Logo/MyLogo';
import { ParallaxBanner } from 'react-scroll-parallax';
import styles from './BannerLogo.css';

class BannerLogo extends Component{
    state = {
        iconIndex: 0,
        animationIteration: 0,
    }
    componentDidMount () {  
        window.addEventListener("resize", () => this.forceUpdate());
    }
    componentWillUnmount () { 
        window.removeEventListener("resize", () => this.forceUpdate());
    }
    switchIcon = (e) => {
        if(this.state.animationIteration === 0){this.setState({ animationIteration: 1}); }
        else{this.setState({iconIndex: this.state.iconIndex + 1 === 5 ? 0 : this.state.iconIndex + 1, animationIteration: 0}); }
    } 
    render(){
      const windowWidth =  window.innerWidth > 1000 ? 1000 : window.innerWidth*0.67 ;
      const style = {height: windowWidth/3};
      return (
        <div className={styles.BannerLogo} style={style}>
            <ParallaxBanner
                className="ParallaxBanner"
                layers={[
                    {
                        children:<MyLogo windowWidth = {windowWidth} iconIndex = {this.state.iconIndex} 
                                          animationIteration = {this.state.animationIteration} 
                                          switchIcon = {this.switchIcon} />,
                        amount: 0.5,
                        slowerScrollRate: true,
                        expanded:false
                    },
                ]}
                style={style}
            >
            </ParallaxBanner>
        </div>
        );

    }
}


export default BannerLogo;