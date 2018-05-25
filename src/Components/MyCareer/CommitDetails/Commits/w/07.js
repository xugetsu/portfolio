import React from 'react';
import game from '../../../../../Assets/Images/2048b.PNG';
import CustomScrollbars from '../../../../UI/CustomScrollbars/CustomScrollbars';

const commit = (props) => {
    return (
        <CustomScrollbars scrollId={props.hash} width = {'100%'} height={'450px'} zindex={2} >
            <article>
             <h2>2048 Game Ultra</h2>
                <p>This project was developed to put the knowledge and skills I've learned into practice
                <br/>Inspired by the <a target="_blank" rel="noopener noreferrer" href='http://2048game.com/'>original game</a>, I've developped my own game logic from scratch using the JavaScript library React.js</p> 
                <img src={game} style={{maxWidth:'90%',display:'block',margin:'10px auto'}}/>
            </article>
        </CustomScrollbars> 
    );
}
export default commit;
