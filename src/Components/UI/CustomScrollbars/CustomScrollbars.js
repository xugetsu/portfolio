import React, {Component} from 'react';
import styles from './CustomScrollbars.css';
import { Scrollbars } from 'react-custom-scrollbars';

class CustomScrollbars extends Component{
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }

   componentDidMount = () =>{
 //   this.myRef.current.scrollToBottom();
  //   const LastVerticalThumbPosition = this.getScrollLocalStorageData().scrollTop;
  //   if(LastVerticalThumbPosition) {this.myRef.current.scrollTop(LastVerticalThumbPosition);}
  //   console.log('LastVerticalThumbPosition',LastVerticalThumbPosition);
   // console.log( this.myRef.current.getValues());
   // console.log(this.getScrollLocalStorageData());
  }
  //componentDidUpdate = () => {
    
   // const LastVerticalThumbPosition = this.getScrollLocalStorageData().scrollTop;
   // console.log('LastVerticalThumbPosition',LastVerticalThumbPosition);
  //  console.log( this.myRef.current.getValues());
  //  console.log(this.getScrollLocalStorageData());
  //}
  // componentWillUnmount = () =>{
  //   this.setScrollLocalStorageData(this.myRef.current.getValues())
  // }
  // setScrollLocalStorageData  = (scrollData) => {
  //   console.log('setScrollLocalStorageData');
  //   localStorage.setItem("CustomScrollBarsValues"+this.props.scrollId, JSON.stringify(scrollData));
  // }
  // getScrollLocalStorageData = () =>{
  //   const scrollData = JSON.parse(localStorage.getItem("CustomScrollBarsValues"+this.props.scrollId));
  //   return scrollData;
  //  }

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
                  renderThumbVertical={VerticalThumb}>       
        {this.props.children}
      </Scrollbars>
    );
  }   
}

 


export default CustomScrollbars;

