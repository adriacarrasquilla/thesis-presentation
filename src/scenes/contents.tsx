import {makeScene2D, Txt, Img, Layout, Rect, Icon} from '@motion-canvas/2d';
import {all, createRef, beginSlide, waitUntil, waitFor, slideTransition, Direction, sequence} from '@motion-canvas/core';

import problem_logo from '../../img/problem.png';


export default makeScene2D(function* (view) {
  const problem = createRef<Txt>();
  const goals = createRef<Txt>();
  const proposal = createRef<Txt>();
  const experiments = createRef<Txt>();
  const conclusion = createRef<Txt>();
  const text = createRef<Layout>();
  const logo = createRef<Img>();

  const initialY = -200;
  const initialX = 1400;
  const pad = 100;

  const textStyle = {
    fontWeight: 600,
    fontSize: 80,
    offsetY: 0,
    padding: 0,
    cache: true,
    fontFamily: 'Open Sans',
    opacity: 0.4
  };

  view.add(
    <>
      <Layout ref={text} gap={50} direction="column" alignItems="start" x={-350} layout>
        <Txt
          ref={problem}
          text={"1. Problem"}
          fill={'#242424'}
          {...textStyle}
        />
        <Txt
          ref={goals}
          text={"2. Goals"}
          fill={'#242424'} 
          {...textStyle}
        />
        <Txt
          ref={proposal}
          text={"3. Proposal"}
          fill={'#242424'}
          {...textStyle}
        />
        <Txt
          ref={experiments}
          text={"4. Experiments"}
          fill={'#242424'}
          {...textStyle}
        />
        <Txt
          ref={conclusion}
          text={"5. Conclusion"}
          fill={'#242424'}
          {...textStyle}
        />
      </Layout>
      <Img
        ref={logo}
        src={problem_logo}
        width={0}
        y={-310}
        x={-100}
        opacity={0}
      />
    </>
  );

  
  yield* all(
    slideTransition(Direction.Right),
    sequence(0.3,
      problem().opacity(1, 1),
      goals().opacity(1, 1),
      proposal().opacity(1, 1),
      experiments().opacity(1, 1),
      conclusion().opacity(1, 1),
    )
  )
  yield* beginSlide('Contents Start');
  const delay = 1.5;
  yield* all(
    problem().fontSize(120, delay),
    problem().fill("#f94144", delay),
    goals().opacity(0.3, delay),
    proposal().opacity(0.3, delay),
    experiments().opacity(0.3, delay),
    conclusion().opacity(0.3, delay),
    logo().opacity(1, delay/2),
    logo().width(120, delay),
    logo().position.y(-310, delay),
    logo().position.x(100, delay)
  )
  yield* beginSlide('Contents End');
});
