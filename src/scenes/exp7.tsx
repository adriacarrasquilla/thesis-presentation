import {makeScene2D, Txt, Img, Layout, Rect} from '@motion-canvas/2d';
import {createRef, beginSlide, slideTransition, Direction, sequence} from '@motion-canvas/core';

import logoImg from '../../img/experiments_white.png';
import expImg from '../../img/performance.png';


export default makeScene2D(function* (view) {
  const titleBox = createRef<Rect>();
  const bodyBox = createRef<Rect>();
  const titleText = createRef<Txt>();
  const logo = createRef<Img>();

  const textStyle = {
    fontWeight: 600,
    fontSize: 60,
    offsetY: 0,
    padding: 0,
    cache: true,
    fontFamily: 'Open Sans',
    fill: "#282828"
  };

  const blue = "#277DA1";
            
  const leftLayout = createRef<Layout>();
  const imgRef = createRef<Img>();

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
          fill={blue}
          justifyContent={"start"}
          alignItems={"center"}
          gap={20}
          height={150}
          y={-435}
          direction="row"
        >
          <Rect width={20} />
          <Img
            ref={logo}
            src={logoImg}
            size={76}
            opacity={1}
          />
          <Rect width={10} />
          <Txt
            ref={titleText}
            text={"EXPERIMENTS"}
            {...textStyle}
            fill={"#ffffff"}
            fontSize={80}
            paddingTop={20}
          />
        </Rect>
      <Rect 
        fill="#FAF5F0"
        ref={bodyBox}
        height={910}
        alignItems={"center"}
        justifyContent={"center"}
        direction={"row"}
        gap={50}
        layout
      >
          <Layout
            ref={leftLayout}
            layout
            direction={'column'}
            gap={50}
            alignItems={"center"}
            justifyContent={"center"}
            opacity={0}
          >
            <Txt text="Selected 20 samples from the test set" {... textStyle} fontSize={50}/>
            <Txt text="Selected 20 samples from the test set" {... textStyle} fontSize={50}/>
            <Txt text="Selected 20 samples from the test set" {... textStyle} fontSize={50}/>
          </Layout>
      </Rect>
    </Layout>
  </>
);

  yield* slideTransition(Direction.Right);
  yield* titleText().text("Subjective Study", 1);
  yield* leftLayout().opacity(1, 1);
  yield* beginSlide('End');
});