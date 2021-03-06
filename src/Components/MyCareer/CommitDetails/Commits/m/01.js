import React from 'react';
import robot1 from '../../../../../Assets/Images/robot1.png';
import robot2 from '../../../../../Assets/Images/robot2.png';
import robot3 from '../../../../../Assets/Images/robot3.png';
import RobotSketchFab from '../../../../RobotSketchFab/RobotSketchFab';
import CustomScrollbars from '../../../../UI/CustomScrollbars/CustomScrollbars';

const commit1 = (props) => {
    const ImgStyle = {display:'block',margin:'0 auto',width:'80%'};
    return (
        <CustomScrollbars scrollId={props.hash} width = {'100%'} height={'450px'} zindex={2} >
            <article>
                <p>Improving the robot design of the End of study project after graduation.<br/> Used CAD Software: SolidWorks.</p>
                <RobotSketchFab />
                <h2>Before:</h2>
                <img style={ImgStyle} src={robot1} alt='robot before Improvements' />
                <h2>After:</h2>
                <img style={ImgStyle}src={robot2} alt='robot after Improvements' />
                <br/>
                <img style={ImgStyle} src={robot3} alt='robot after Improvements' />    
            </article>
        </CustomScrollbars> 

    );
}
export default commit1;
