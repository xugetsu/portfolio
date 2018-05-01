import React from 'react';
import styles from './AboutMe.css';
import LogoFragment2 from '../../LogoFragments/LogoFragment2/LogoFragment2';

const aboutMe = () => {
    return (
        <div className= {styles.AboutMe}>
            <h1>About Me</h1>
            <ul>
                <li><span><LogoFragment2/></span>I'm a React Js web developer and a mechatronic engineer.</li>
                <li><span><LogoFragment2/></span>I studied at the National School of Engineering of Sousse as a mechatronic engineer and after graduation, I started learning about web development..</li>
                <li><span><LogoFragment2/></span>I was and still very passionate about web development and I have made a firm decision to keep going in this career path beleiving that someday I can benefit from both of my specialities together !! </li>
            </ul>
        </div>
    );
}

export default aboutMe;