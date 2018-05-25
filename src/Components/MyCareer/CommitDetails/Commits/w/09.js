import React from 'react';
import git from '../../../../../Assets/Icons/pngs/git.png';
import udacity from '../../../../../Assets/Icons/pngs/udacity.png';
import omac from '../../../../../Assets/Images/omac.jpg';
import styles from '../commonStyles.css';
import CustomScrollbars from '../../../../UI/CustomScrollbars/CustomScrollbars';
import octocat from '../../../../../Assets/Icons/pngs/octocat.png';

const commit = (props) => {
    return (
        <CustomScrollbars scrollId={props.hash} width = {'100%'} height={'450px'} zindex={2} >

        <article >
            <section >
              <p>This is the second part of the One Million Arab Coders - Full Stack Track program.
              <br/>With this course I have received in-depth instruction on one of the most powerful tools available to programmers, 
              the version control system Git.
              <br/>Also, I have learned how I can use Github, the hosting service for Git, to create code repos, 
              commit changes to code, and review commits to existing code repos.</p>
              <img height='150px' style={{alignSelf:'center',margin:'0 0 0 50px'}} src={omac} />
            </section>
            <br/>
            <section >
              <img src={git} alt='git' width='150px' style={{alignSelf:'center',margin:'0 50px'}}/>
              <img src={octocat} alt='github' width='150px' style={{alignSelf:'center',margin:'0 50px'}}/>
            </section >
            
         
            
        </article>
        </CustomScrollbars> 
    );
}
export default commit;
/* This course consist of the folowing lessons:
              <ul className={styles.Ul}>
                  <li>{'LESSON 1 - Purpose & Terminology'}
                      <ul>
                          <li>Learn why developers use version control and discover ways you use version control in your daily life</li>
                          <li>Get an overview of essential Git vocabulary</li>
                          <li>Configure Git using the command line</li>
                      </ul>
                  </li>
                  <br/>
                  <li>{'LESSON 2 - Create a Git Repo'}
                      <ul>
                          <li>Create your first Git repository with git init</li>
                          <li>Copy an existing Git repository with git clone</li>
                          <li>Review the current state of a repository with the powerful git status</li>
                      </ul>
                  </li>
                  <br/>
                  <li>{"LESSON 3 - Review a Repo's History"}
                      <ul>
                          <li>Review a repo's commit history git log</li>
                          <li>Customize git log's output using command line flags in order to reveal more (or less) information about each commit</li>
                          <li>Use the git show command to display just one commit</li>
                      </ul>
                  </li>
                  <br/>
                  <li>{"LESSON 4 - Add Commits to a Repo"}
                      <ul>
                          <li>Master the Git workflow and make commits to an example project</li>
                          <li>Use git diff to identify what parts of a file have been changed in a commit</li>
                          <li>Learn how to mark files as "untracked" using .gitignore</li>
                      </ul>
                  </li>
                  <br/>
                  <li>{"LESSON 5 - Tagging, Branching, and Merging"}
                      <ul>
                          <li>Organize your commits with tags and branches</li>
                          <li>Jump to particular tags and branches using git checkout</li>
                          <li>Learn how to merge together changes on different branches and crush those pesky merge conflicts</li>
                      </ul>
                  </li>
                  <br/>
                  <li>{"LESSON 6 - Undoing Changes"}
                      <ul>
                          <li>Learn how and when to edit or delete an existing commit</li>
                          <li>Use git commit's --amend flag to alter the last commit</li>
                          <li>Use git reset and git revert to undo and erase commits</li>
                      </ul>
                  </li>
              </ul> */