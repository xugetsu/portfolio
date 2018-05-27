import React from 'react';
import gitlogo from '../../../../../Assets/Icons/svgs/Git-logo.svg';
import udacity from '../../../../../Assets/Icons/pngs/udacity.png';
import omac from '../../../../../Assets/Images/omac.jpg';
import styles from '../commonStyles.css';
import CustomScrollbars from '../../../../UI/CustomScrollbars/CustomScrollbars';
import octocat from '../../../../../Assets/Icons/pngs/octocat.png';

const commit = (props) => {
    return (
        <CustomScrollbars scrollId={props.hash} width = {'100%'} height={'410px'} zindex={2} >
        <article >
            <section>
              <p>This is the second part of the One Million Arab Coders - Full Stack Track program.</p>
              <figure>
                  <img width='150px' alt='omac' src={omac} />
              </figure>
            </section>
            <section>
              <p> With this course I have received in-depth instruction on one of 
                  the most powerful tools available to programmers, the version 
                  control system Git, to create code repos, commit changes to code, 
                  and review commits to existing code repos.
              </p>
              <figure>
                    <img src={gitlogo} alt='git' width='150px'/>
                    <figcaption><br/>Version Control System</figcaption>
              </figure>
            </section>
            <section>
                <p>Also, I have learned how to use Github, the hosting service for Git. 
                  I've became able to create remote repositories, to work with others 
                  on a version control project, to plan changes and implement them, 
                  to contribute to an existing repo and to add features on a project 
                  while it's in active development.
                </p>
                <figure>
                    <img src={octocat} alt='github' width='150px'/>
                    <figcaption><br/>Hosting service Github</figcaption>
                </figure>
            </section>
        </article>
        </CustomScrollbars> 
    );
}
export default commit;