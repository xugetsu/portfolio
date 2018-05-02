import React, {Component} from 'react';
import styles from './CustomScrollbars.css';
import { Scrollbars } from 'react-custom-scrollbars';

class CustomScrollbars extends Component{
  // constructor(props) {
  //   super(props);
  //   //this.myRef = React.createRef();
  // }

  // componentDidMount = () =>{
  //   const LastVerticalThumbPosition = this.getScrollLocalStorageData().scrollTop;
  //   if(LastVerticalThumbPosition) {this.myRef.current.scrollTop(LastVerticalThumbPosition);}
  //   console.log('LastVerticalThumbPosition',LastVerticalThumbPosition);
   // console.log( this.myRef.current.getValues());
   // console.log(this.getScrollLocalStorageData());
  //}
  // componentDidUpdate = () => {
  //   const LastVerticalThumbPosition = this.getScrollLocalStorageData().scrollTop;
  //  // console.log('LastVerticalThumbPosition',LastVerticalThumbPosition);
  // //  console.log( this.myRef.current.getValues());
  // //  console.log(this.getScrollLocalStorageData());
  // }
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
    const VerticalThumb = (style,props) => <div {...props} 
                                                className={styles.ThumbVertical} 
                                                style={{...style}}/>
    const VerticalTrack = (props) => <div {...props} 
                                          className={styles.TrackVertical} 
                                          style={style}/>
    const style = {zIndex: this.props.zIndex};
    return (
      <Scrollbars //ref={this.myRef} 
                  style={{ width:this.props.width, height: this.props.height}}
                  renderTrackVertical={VerticalTrack}    
                  renderThumbVertical={VerticalThumb}>       
        {this.props.children}
      </Scrollbars>
    );
  }   
}

 


export default CustomScrollbars;

