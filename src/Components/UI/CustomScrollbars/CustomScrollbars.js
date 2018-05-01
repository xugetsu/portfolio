import React from 'react';
import styles from './CustomScrollbars.css';
import { Scrollbars } from 'react-custom-scrollbars';

const customScrollbars = (props) => {
    const style = {cursor: 'pointer', zIndex: props.zIndex};
    // const scrollColor = props.scrollColor;
    return (
        <Scrollbars style={{ width: '100%', height: props.height}}
          //autoHeight
          //  renderTrackHorizontal={props => <div {...props} />}//className="track-horizontal"
          //  renderThumbHorizontal={(style,props) => <div {...props} style={{ ...style, backgroundColor: 'blue' }} />}//className="thumb-horizontal"
            renderTrackVertical= { (props) => <div {...props} className={styles.TrackVertical} style={style}/>}    
            renderThumbVertical= { (style,props) => <div {...props} className={styles.ThumbVertical} style={{...style}}/>}
         //   renderView={props => <div {...props} />}//className="view"
            >
            {props.children}
        </Scrollbars>
    );
}

export default customScrollbars;

