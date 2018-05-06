import React, {Component} from 'react';
import styles from './CustomScrollbars.css';
import NavBar from '../../NavBar/NavBar';
import A from '../../../hoc/A/A';
import SpringScrollbars from './SpringScrollbars ';

class Scrollbars extends Component{
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }

  navigateTo = (i) => {
    const scrollbars = this.myRef.current;
    const elementIds = ['GeneralInfo','MyCareer','Competence','Portfolio','Contact'];
    const elementOffsetTop = document.getElementById(elementIds[i]).offsetTop;
    const scrollHeight = scrollbars.getScrollHeight();
        scrollbars.scrollTop(elementOffsetTop-50);// 5 0 is the height of the NavBar
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
        <SpringScrollbars ref={this.myRef} 
                    style={{ width:this.props.width, height: this.props.height}}
                    renderTrackVertical={VerticalTrack}    
                    renderThumbVertical={VerticalThumb}
                    >       
            <NavBar navigateTo = {(i) => this.navigateTo(i)} />
            {this.props.children}
        </SpringScrollbars>
    );
  }   
}

 


export default Scrollbars;

