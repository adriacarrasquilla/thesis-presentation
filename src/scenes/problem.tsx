import {makeScene2D, Txt, Img, Layout, Rect, Icon} from '@motion-canvas/2d';
import {all, createRef, beginSlide, waitUntil, waitFor, slideTransition, Direction, sequence, createSignal} from '@motion-canvas/core';

import problem_logo from '../../img/problem_white.png';
import woman from '../../img/woman.png';
import sad from '../../img/sad.png';
import blonde from '../../img/woman_blonde.png';
import nose from '../../img/nose.png';


export default makeScene2D(function* (view) {
  const problem = createRef<Txt>();
  const logo = createRef<Img>();
  const woman_img = createRef<Img>();
  const sad_img = createRef<Img>();
  const nose_img = createRef<Img>();
  const blonde_img = createRef<Img>();

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
            size={260}
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
      <Img
        ref={woman_img}
        src={woman}
        size={600}
        opacity={0}
        x={500}
        y={50}
      >
      <Img
        ref={nose_img}
        src={nose}
        size={130}
        opacity={0}
        x={0}
        y={-40}
      />
      <Img
        ref={blonde_img}
        src={blonde}
        size={600}
        opacity={0}
        x={0}
      />
      <Img
        ref={sad_img}
        src={sad}
        size={70}
        y={20}
        rotation={0}
        opacity={0}
        x={0}
      />
      </Img>
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
  yield* all(
    woman_img().opacity(1, 1),
  )

});
