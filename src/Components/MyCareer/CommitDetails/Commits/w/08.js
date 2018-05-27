import React from 'react';
import CustomScrollbars from '../../../../UI/CustomScrollbars/CustomScrollbars';
import omac from '../../../../../Assets/Images/omac.jpg';
import python from '../../../../../Assets/Icons/pngs/python.png';
import Anchor from '../../../../Utilities/Anchor';

const commit = (props) => {
    return (
      <CustomScrollbars scrollId={props.hash} width = {'100%'} height={'410px'} zindex={2} >
        <article>
          <section >
            <figure>
               <img width='150px' alt='omac' src={omac} />
            </figure>
            <p>
            The One Million Arab Coders is an initiative that seeks to equip 
            young Arabs with the tools to build their future, starting with fluency 
            in coding and programming... (<Anchor href='https://ae.udacity.com/one-million-arab-coders/en'> read more</Anchor>).
            <br/>Of the four courses offered, I chose to take the Full Stack Web Developer track.</p>
          </section>
          <section>
            <p> This program helped to familiarize me with some of the most essential skills that full-stack developers use on a regular basis. 
            I had chance to explore fundamental programming concepts in Python like logic checks, data structures, and functions through interactive quizzes.
            </p>
            <figure>
              <img width='150px' alt='python' src={python} />
            </figure>
          </section>
          <section>
            <p>I also learned syntax, debugging techniques and basic problem-solving concepts. 
            Finally, I learned object-oriented programming through a series of mini-projects and exercises 
            using a variety of Python libraries. By the end of the program, I've become programmatically able to send text messages, decode secret messages, and draw images with Python.
            </p>
          </section>
        </article>
      </CustomScrollbars> 
    );
}
export default commit;
