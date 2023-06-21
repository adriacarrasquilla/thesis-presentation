import {makeScene2D, Txt, Img, Layout, Rect, Icon} from '@motion-canvas/2d';
import {all, createRef, beginSlide, waitUntil, waitFor, slideTransition, Direction, sequence} from '@motion-canvas/core';

import proposal_logo from '../../img/proposal.png';


export default makeScene2D(function* (view) {
  const problem = createRef<Txt>();
  const goals = createRef<Txt>();
  const proposal = createRef<Txt>();
  const experiments = createRef<Txt>();
  const conclusion = createRef<Txt>();
  const text = createRef<Layout>();
  const logo = createRef<Img>();

  const textStyle = {
    fontWeight: 600,
    fontSize: 80,
    offsetY: 0,
    padding: 0,
    cache: true,
    fontFamily: 'Open Sans',
    opacity: 1
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
        src={proposal_logo}
        width={0}
        y={-10}
        x={-80}
        opacity={0}
      />
    </>
  );

  
  yield* slideTransition(Direction.Left)
  yield* beginSlide('Contents Start');
  const delay = 1.5;
  yield* all(
    proposal().fontSize(120, delay),
    proposal().fill("#F3722C", delay),
    problem().opacity(0.3, delay),
    goals().opacity(0.3, delay),
    experiments().opacity(0.3, delay),
    conclusion().opacity(0.3, delay),
    logo().opacity(1, delay/2),
    logo().width(120, delay),
    logo().position.y(-10, delay),
    logo().position.x(80, delay)
  )
  yield* beginSlide('Contents End');
});
