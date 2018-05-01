import React from 'react';
import robot1 from '../../../../Assets/Images/robot1.png';
import robot2 from '../../../../Assets/Images/robot2.png';
import robot3 from '../../../../Assets/Images/robot3.png';
import RobotSketchFab from '../../../RobotSketchFab/RobotSketchFab';
import CommitDetails from '../CommitDetails';
const commit1 = () => {
    const title = 'Robot Design Improvement';
    const date = 'On, Sun. Jan 1, 2017, 9:59 PM';
    return (
        <CommitDetails title={title} date={date}>
            <p>Improving the robot design of the End of study project after graduation.<br/> Used CAD Software: SolidWorks.</p>
            <RobotSketchFab />
            <p>Before:</p>
            <img src={robot1} height={100} width={200} alt='robot before Improvements' />
            <p>After:</p>
            <img src={robot2} height={100} width={180} alt='robot after Improvements' />
            <img style={{marginLeft:'10px'}} src={robot3} height={100} width={180} alt='robot after Improvements' />    
        </CommitDetails>
    );
}
export default commit1;
