import {makeProject} from '@motion-canvas/core';

import cover from './scenes/cover?scene';
import contents from './scenes/contents?scene';
import problem from './scenes/problem?scene';
import contents2 from './scenes/contents2?scene';
import goals from './scenes/goals?scene';
import contents3 from './scenes/contents3?scene';
import proposal1 from './scenes/proposal1?scene';
import tests from './scenes/tests?scene';

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
  ],
});
