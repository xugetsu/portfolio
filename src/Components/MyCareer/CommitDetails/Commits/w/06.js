import React from 'react';
import CustomScrollbars from '../../../../UI/CustomScrollbars/CustomScrollbars';
import research from '../../../../../Assets/Icons/svgs/research.svg';
import logo from '../../../../../Assets/Icons/svgs/logo.svg';
import Anchor from '../../../../Utilities/Anchor';
import styles from '../commonStyles.css';

const commit = (props) => {
    return (
        <CustomScrollbars scrollId={props.hash} width = {'100%'} height={'450px'} zindex={2} >
            <article>
                <p>It is time to dive deeper into the web's awesomeness and broaden my horizon by learning React !
                <br />
                <div className={styles.ReactLogoWrapper}>
                    <img height='200px' src={research} alt='research'/>
                    <img className={styles.ReactLogo} src={logo} alt='logo'/>
                </div>
                 <br />React is a powerful JavaScript library ideal for building interactive, 
                data-driven user interfaces, and it’s used by some of the most successful brands in the world, 
                including Facebook, Netflix, Airbnb, and more.</p>
                <p>I Started learning React Fundamentals with the provided tutorial in the official React's site : <a href='https://reactjs.org/tutorial/tutorial.html' target="_blank" rel="noopener noreferrer"> Intro To React </a>
                and later I dived deeper into React's advanced features by taking <a href='https://www.udemy.com/react-the-complete-guide-incl-redux' target="_blank" rel="noopener noreferrer"> the React 16 - The Complete Guide </a>
                course which also includes working with the well known dependencies like
                <b><Anchor href='https://reacttraining.com/react-router/' color={'none'}> Router 4 </Anchor></b> and 
                <b><Anchor href='https://redux.js.org/' color={'none'}> Redux.js </Anchor></b> .
                </p>
            </article>
        </CustomScrollbars> 
    );
}
export default commit;
