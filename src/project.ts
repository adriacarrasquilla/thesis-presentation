import {makeProject} from '@motion-canvas/core';

import cover from './scenes/cover?scene';
import contents from './scenes/contents?scene';
import problem from './scenes/problem?scene';
import tests from './scenes/tests?scene';

import './global.css'

export default makeProject({
  scenes: [cover, contents, problem],
});
