import React, {Component} from 'react';
import styles from './CustomScrollbars.css';
import { Scrollbars } from 'react-custom-scrollbars';
import NavBar from '../../NavBar/NavBar';
import A from '../../../hoc/A/A';

class CustomScrollbars extends Component{
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }

  navigateTo = (i) => {
    const elementIds = ['GeneralInfo','MyCareer','Competence','Portfolio','Contact'];
    const elementOffsetTop = document.getElementById(elementIds[i]).offsetTop;
    this.myRef.current.scrollTop(elementOffsetTop-100);
  }
  render() {
    const zIndex = this.props.zIndex;
    const VerticalThumb = (defaultStyles, props) => <div {...props} 
                                                onClick = { (e) => e.stopPropagation() }
                                                className={styles.ThumbVertical} 
                                                style={{...defaultStyles,zIndex:zIndex}}/>
    const VerticalTrack = (defaultStyles, props) => <div {...props} 
                                          onClick = { (e) => e.stopPropagation() }
                                          className={styles.TrackVertical} 
                                          style={{...defaultStyles,zIndex:zIndex+1}}/>
    
    return (
        <Scrollbars ref={this.myRef} 
                    style={{ width:this.props.width, height: this.props.height}}
                    renderTrackVertical={VerticalTrack}    
                    renderThumbVertical={VerticalThumb}
                    >       
            <NavBar navigateTo = {(i) => this.navigateTo(i)} />
            {this.props.children}
        </Scrollbars>
    );
  }   
}

 


export default CustomScrollbars;

