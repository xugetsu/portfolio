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
        console.log('switchIcon');
        // if(this.state.animationIteration === 0){this.setState({ animationIteration: 1}); }
        // else{
            this.setState({
                iconIndex: this.state.iconIndex + 1 === 5 ? 0 : this.state.iconIndex + 1,
               // animationIteration: 0
            }); 
      //      }
    } 
    render(){
      const windowWidth =  window.innerWidth > 1000 ? 1000 : window.innerWidth*0.8 ;
      const style = {height: windowWidth/2};
      const wrapper = (          
                <div className={styles.Wrapper}>
                    <h1 className={styles.H1} >I'm familiar with ...</h1>
                    <MyLogo windowWidth = {windowWidth*0.5} 
                            iconIndex = {this.state.iconIndex} 
                            animationIteration = {this.state.animationIteration} 
                            switchIcon = {this.switchIcon} />
                    <Competence />
                </div>);
      return (
        <div className={styles.BannerLogo} style={style}>
            <ParallaxBanner
                className={styles.ParallaxBanner}
                layers={[
                    {
                        children: wrapper,
                        amount: 0.1,
                        slowerScrollRate: true,
                        expanded:false
                    }
                ]}
                style={style}
            >
            </ParallaxBanner>
        </div>
        );

    }
}


export default BannerLogo;