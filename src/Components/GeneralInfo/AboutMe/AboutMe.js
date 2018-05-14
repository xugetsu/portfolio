import React from 'react';
import styles from './AboutMe.css';
import LogoFragment2 from '../../LogoFragments/LogoFragment2/LogoFragment2';

const aboutMe = () => {
    return (
        <div className= {styles.AboutMe}>
            {/* <div className= {styles.SkewMe}></div> */}
            <h1>About Me</h1>
            <ul>
                <li><span><LogoFragment2 h={300}/></span>I'm a React Js web developer and a mechatronic engineer.</li>
                <li><span><LogoFragment2 h={300}/></span>I studied at the National School of Engineering of Sousse as a mechatronic engineer and, after graduation, I started learning about web development.</li>
                <li><span><LogoFragment2 h={300}/></span>I was, and still am, very passionate about web development. This passion lead to my firm decision to keep going in this career path believing that, someday, I can benefit from both of my specialities together.</li>
                <li><span><LogoFragment2 h={300}/></span>The first step toward achieving my goal is to have a <strong>permanent job</strong> as a <b>Full-Stack Web Developer</b>.</li>
                <li><span><LogoFragment2 h={300}/></span>This site will mainly show you details related to my experience as a web developer. If you are interrested to know further information about me, please visit my <a target="_blank" rel="noopener noreferrer" href='https://www.linkedin.com/in/ali-othmani-11873707/'>linkedin</a> profile.</li>
            </ul>
        </div>
    );
}

export default aboutMe;