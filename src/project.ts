import {makeProject} from '@motion-canvas/core';

import cover from './scenes/cover?scene';
import contents from './scenes/contents?scene';
import problem from './scenes/problem?scene';
import contents2 from './scenes/contents2?scene';
import goals from './scenes/goals?scene';
import contents3 from './scenes/contents3?scene';
import proposal1 from './scenes/proposal1?scene';
import proposal2 from './scenes/proposal2?scene';
import proposal3 from './scenes/proposal3?scene';
import proposal4 from './scenes/proposal4?scene';
import contents4 from './scenes/contents4?scene';
import exp1 from './scenes/exp1?scene';
import exp2 from './scenes/exp2?scene';
import exp3 from './scenes/exp3?scene';
import exp4 from './scenes/exp4?scene';
import exp5 from './scenes/exp5?scene';
import exp6 from './scenes/exp6?scene';
import exp7 from './scenes/exp7?scene';
import contents5 from './scenes/contents5?scene';
import conclusion from './scenes/conclusion?scene';
import demo from './scenes/demo?scene';
import end from './scenes/cover_last?scene';
// import tests from './scenes/tests?scene';

import './global.css'

export default makeProject({
  scenes: [
    cover,
    contents, 
    problem,
    contents2,
    goals,
    contents3,
    proposal1,
    proposal2,
    proposal3,
    proposal4,
    contents4,
    exp1,
    exp2,
    exp3,
    exp4,
    exp5,
    exp6,
    exp7,
    contents5,
    conclusion,
    demo,
    end,
  ],
});
