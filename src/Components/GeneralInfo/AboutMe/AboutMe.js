import React from 'react';
import styles from './AboutMe.css';
import LogoFragment2 from '../../LogoFragments/LogoFragment2/LogoFragment2';

const aboutMe = () => {
    return (
        <div className= {styles.AboutMe}>
            {/* <div className= {styles.SkewMe}></div> */}
            <h1>About Me</h1>
            <ul>
                <li><span><LogoFragment2 h={300}/>
                </span>I'm a React Js web developer and a mechatronic engineer.</li>
                <li><span><LogoFragment2 h={300}/>
                </span>Since I was a mechatronic engineer, I hadn't the oportunity and time to know about 
                web development until I graduated. </li>
                <li><span><LogoFragment2 h={300}/>
                </span>As a self-taught person, I had the chance to broaden my horizon by studying web development  
                and also exploring Python and other non-web-only languages. I have been interested in programming 
                since my high school years. This passion has since lasted and lead to my decision of becoming a web
                developer.</li>
                <li><span><LogoFragment2 h={300}/>
                </span>The first step toward achieving my goal is to have a <strong>permanent job</strong> as a <b>Full-Stack Web Developer</b>.</li>
                <li><span><LogoFragment2 h={300}/></span>This site will mainly show you details related to my experience as a web developer. If you are interrested to know further information about me, please visit my <a target="_blank" rel="noopener noreferrer" href='https://www.linkedin.com/in/ali-othmani-11873707/'>linkedin</a> profile.</li>
            </ul>
        </div>
    );//believing that, someday, I may benefit from both of my specialities together.
}

export default aboutMe;