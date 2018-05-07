import React from 'react';

const myLogo = (props) => {

    const h = 500/2.825;
    const height = h; 
    const thikness = 30;
    const width = h*1.2;
    const y0 = 0;
    const y2 = y0 + height/2.2;
    
    const slashs = (x0,chamfer,slope) =>   [[x0 - chamfer , y2], 
                                            [x0, y2 + thikness], 
                                            [x0 + width + chamfer, y2 + slope + thikness], 
                                            [x0 + width , y2 + slope  ]]; // "/"

    const tag = (x0, y0, e) => [[x0 + width/2, thikness + y0 + e], 
                                [x0, y0 + e + height], 
                                [x0, y0 + e + height - 1.2*thikness],
                                [x0 + width/2, y0 + e], 
                                [x0 + width, y0 + e + height - thikness], 
                                [x0 + width, y0 + e + height]]; // ">"

    const slash = slashs(0, h/8, height/5);
    const openTag  = tag(0,0,0);                       
    const closeTag = tag(0,0,25);   

    const viewBox = [5, 0, 200, 210].join(' ');
    return (
    <svg    viewBox={viewBox}      
            height={props.height} 
            width={props.width} >
        <defs> 
            <linearGradient id={"openTag"+props.id} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%"   style={{stopColor: props.openTagStopColor1, stopOpacity:'1'}} />
            <stop offset="100%" style={{stopColor: props.openTagStopColor2, stopOpacity:'1'}} />
            </linearGradient>
            <linearGradient id={"closeTag"+props.id} x1="0%" y1="50%" x2="80%" y2="20%">
            <stop offset="0%"   style={{stopColor: props.closeTagStopColor1, stopOpacity:'1'}} />
            <stop offset="100%" style={{stopColor: props.closeTagStopColor2, stopOpacity:'1'}} />
            </linearGradient>
            <linearGradient id={"slash"+props.id} x1="0%" y1="0%" x2="80%" y2="80%">
                <stop offset="0%"   style={{stopColor: props.slashStopColor1, stopOpacity:'1'}} />
                <stop offset="100%" style={{stopColor: props.slashStopColor2, stopOpacity:'1'}} />
            </linearGradient>
        </defs>
        <polygon points={closeTag}  fill={"url(#closeTag"+props.id+")"} />
        <polygon points={slash}     fill={"url(#slash"+props.id+")"}  />
        <polygon points={openTag}   fill={"url(#openTag"+props.id+")"} />

    </svg>
    );
}

export default myLogo;