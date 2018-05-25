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
                <p>It is time to dive deeper into web development by learning React.
                <br />
                <div className={styles.ReactLogoWrapper}>
                    <img height='200px' src={research} alt='research'/>
                    <img className={styles.ReactLogo} src={logo} alt='logo'/>
                </div>
                 <br />React is a powerful JavaScript library ideal for building interactive, 
                data-driven user interfaces, and it’s used by some of the most successful brands in the world, 
                including Facebook, Netflix, Airbnb, and more.</p>
                <p>I Started learning React Fundamentals by taking the official React site's tutorial: <a href='https://reactjs.org/tutorial/tutorial.html' target="_blank" rel="noopener noreferrer"> Intro To React </a>
                and later I dived deeper into React's advanced features by taking <a href='https://reactjs.org/tutorial/tutorial.html' target="_blank" rel="noopener noreferrer"> React 16 - The Complete Guide </a>
                course which also includes 
                <b><Anchor href='https://reacttraining.com/react-router/' color={'#55b2ff'}> Router 4 </Anchor></b> and 
                <b><Anchor href='https://redux.js.org/' color={'#a557ff'}> Redux.js </Anchor></b>.
                </p>
            </article>
        </CustomScrollbars> 
    );
}
export default commit;
