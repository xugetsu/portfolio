import React from 'react';
import game from '../../../../../Assets/Images/2048c.PNG';
import CustomScrollbars from '../../../../UI/CustomScrollbars/CustomScrollbars';

const commit = (props) => {
    return (
        <CustomScrollbars scrollId={props.hash} width = {'100%'} height={'410px'} zindex={2} >
            <article>
             <h2>2048 Game Ultra</h2>
                <p>After learning the basics of React, I couldn't help myself from putting my new skills into practice.
                 Inspired by the <a target="_blank" rel="noopener noreferrer" href='http://2048game.com/'>original game</a>, I started developing my own game logic from scratch using the JavaScript library React.js</p> 
                <p>Please check my portfolio section for more information about this project.</p>
                <img src={game} style={{maxWidth:'70%',display:'block',margin:'10px auto'}}/>
            </article>
        </CustomScrollbars> 
    );
}
export default commit;
