import React from 'react';
import git from '../../../../../Assets/Icons/pngs/git.png';
import udacity from '../../../../../Assets/Icons/pngs/udacity.png';
import mac from '../../../../../Assets/Icons/pngs/1mac.png';
import styles from '../commonStyles.css';

const commit = () => {
    return (
        <article >
            <div style={{zIndex:1}}>
                <div className={styles.ImgCont}>
                    <img src={git} />
                    <img src={mac} style={{backgroundColor:'#eee'}}/>
                </div>
                <br/>
                <h3>About this Course</h3>
                With this course I learned the essentials of using the version control system Git.
                This course consist of the folowing lessons:
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
                </ul>
            </div>
       
        </article>
    );
}
export default commit;
