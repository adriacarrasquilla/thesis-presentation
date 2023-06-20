import {makeScene2D, Txt, Img, Layout, Rect, Icon} from '@motion-canvas/2d';
import {all, createRef, beginSlide, waitUntil, waitFor, slideTransition, Direction, sequence, createSignal} from '@motion-canvas/core';

import problem_logo from '../../img/problem_white.png';


export default makeScene2D(function* (view) {
  const problem = createRef<Txt>();
  const logo = createRef<Img>();

  const titleBox = createRef<Rect>();
  const bodyBox = createRef<Rect>();
  const padTop = createSignal(30);


  const textStyle = {
    fontWeight: 600,
    fontSize: 200,
    offsetY: 0,
    padding: 0,
    cache: true,
    fontFamily: 'Open Sans',
    paddingTop:padTop
  };

  view.add(
    <>
      <Layout 
        layout 
        gap={0} 
        direction="column"
        width={"97%"}
        height={1010}
      >
        <Rect 
          layout
          ref={titleBox}
          fill="#f94144"
          justifyContent={"start"}
          alignItems={"center"}
          gap={20}
          height={1010}
          y={-435}
          direction="row"
        >
          <Rect width={20} />
          <Img
            ref={logo}
            src={problem_logo}
            // width={150}
            // height={160}
            size={260}
            // paddingBottom={-500}
            opacity={1}
          />
          <Rect width={10} />
          <Txt
            ref={problem}
            text={"PROBLEM"}
            fill={"#ffffff"}
            {...textStyle}
          />
        </Rect>

        <Rect 
          fill="#FAF5F0"
          ref={bodyBox}
          height={0}
        />
      </Layout>
    </>
  );

  
  yield* slideTransition(Direction.Right);
  yield* beginSlide('Problem 1');
  yield* all(
    titleBox().height(150, 1),
    problem().fontSize(80, 1),
    logo().size(76, 1),
    padTop(10, 1),
    bodyBox().height(910, 1),
  )
  yield* beginSlide('Problem 2');
});
