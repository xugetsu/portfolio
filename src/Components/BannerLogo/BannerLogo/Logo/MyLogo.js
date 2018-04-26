import React, {Component} from 'react';
import styles from './MyLogo.css';
import LogoFragment1 from './LogoFragments/LogoFragment1/LogoFragment1';
import LogoFragment2 from './LogoFragments/LogoFragment2/LogoFragment2';
import LogoFragment3 from './LogoFragments/LogoFragment3/LogoFragment3';
// import Icons from './Icons/Icons';
class Logo extends Component{
    render(){
        const width = this.props.windowWidth/4;
        const height = this.props.windowWidth/5;
        const d = width/8 + 'px';
        const f = width/2 + 'px';
        const x = -height/1.8 + 'px'
        const s = -width/2 + 'px';

        return(
            <div className={styles.MyLogo} id ='logo' style={{height:( height+ height/10 )}}>
                <LogoFragment1  s = {s} d = {d} f = {f} width = {width}  height= {height}/>
                <LogoFragment2  s = {s} x = {x} d = {d} f = {f}  width = {width} height= {height}/>
                <LogoFragment3  s = {s} d = {d} f = {f} width = {width}  height= {height} x = {x}/>
              {/*   <Icons 
                    iconIndex = {this.props.iconIndex} 
                    switchIcon = {this.props.switchIcon}
                    width = {width} /> */}
                </div>
                
            
        );
    }
}



export default Logo;

// // // // // // // // // // // // // // // // // // // // // //
//https://css-tricks.com/transforms-on-svg-elements/
// 
// The main thing that works differently between HTML elements and SVG elements 
// is the local coordinate system of the element. Every element, whether we're 
// talking about HTML elements or SVG elements, has one. 
// For HTML elements, this coordinate system originates at the 50% 50% point of
// the element. For SVG elements, the origin is, assuming we have no transform 
// applied on the element itself or any of its ancestors inside the <svg> element, 
// at the 0 0 point of the SVG canvas. This will cause different results following 
// rotate, scale, or skew transforms if the 50% 50% point of the SVG element 
// doesn't coincide with the 0 0 point of the SVG canvas.