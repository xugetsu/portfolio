import React, {Component} from 'react';
import styles from './CustomScrollbars.css';
import { Scrollbars } from 'react-custom-scrollbars';

class CustomScrollbars extends Component{
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }



  renderThumbV = (defaultStyles, props) => <div {...props} 
                                                onClick = { (e) => e.stopPropagation() }
                                                className={this.props.style1 ? styles.ThumbVertical1 : styles.ThumbVertical} 
                                                style={{...defaultStyles,zIndex:this.props.zindex+1}}/>

  renderTrackV  = (defaultStyles, props) => <div {...props} 
                                                onClick = { (e) => e.stopPropagation() }
                                                className={this.props.style1 ? styles.TrackVertical1 : styles.TrackVertical} 
                                                style={{...defaultStyles,zIndex:this.props.zindex}}/>

  renderThumbH = (defaultStyles, props) => <div {...props} 
                                                onClick = { (e) => e.stopPropagation() }
                                                className={this.props.style1 ? styles.ThumbHorizantal1 : styles.ThumbHorizantal} 
                                                style={{...defaultStyles,zIndex:this.props.zindex+1}}/>

  renderTrackH  = (defaultStyles, props) => <div {...props} 
                                                onClick = { (e) => e.stopPropagation() }
                                                className={this.props.style1 ? styles.TrackHorizantal1 : styles.TrackHorizantal} 
                                                style={{...defaultStyles,zIndex:this.props.zindex}}/>
  scrollTop (top) {
    const scrollbars = this.myRef.current;
    scrollbars.scrollTop(top);
  }

  render() {
    return (
      <Scrollbars ref={this.myRef} 
                  style={{ width:this.props.width, height: this.props.height}}
                  renderTrackVertical={this.renderTrackV}    
                  renderThumbVertical={this.renderThumbV}
                //  renderThumbHorizontal={this.renderThumbH}
               ///   renderTrackHorizontal={this.renderTrackH}    
                 // onScrollStop ={()=>console.log(this.myRef.current.getValues())}
                  >       
        {this.props.children}
      </Scrollbars>
    );
  }   
}

 


export default CustomScrollbars;

// componentDidMount = () =>{
  //   if(this.props.scrollId===0){
     
  //     const contactPos = document.getElementById('contact').offsetTop;
  //     const prortfolioPos = document.getElementById('portfolio').offsetTop;
  //     console.log('prortfolioPos',prortfolioPos);
  //     console.log('contactPos',contactPos);
  //     console.log('this.props.children',this.props.children[0].props);
  //     this.myRef.current.scrollTop(prortfolioPos-50);
   //   The HTMLElement.offsetTop read-only property returns the distance of the current element relative to the top of the offsetParent node.
  //}
    
      //   const LastVerticalThumbPosition = this.getScrollLocalStorageData().scrollTop;
  //   if(LastVerticalThumbPosition) {this.myRef.current.scrollTop(LastVerticalThumbPosition);}
  //   console.log('LastVerticalThumbPosition',LastVerticalThumbPosition);
   // console.log( this.myRef.current.getValues());
   // console.log(this.getScrollLocalStorageData());
  //}
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