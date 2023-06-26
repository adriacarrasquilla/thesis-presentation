import {makeScene2D, Txt, Img, Layout, Rect, Latex} from '@motion-canvas/2d';
import {all, createRef, beginSlide, slideTransition, Direction, sequence, createSignal, range, makeRef, loop, chain, ThreadGenerator} from '@motion-canvas/core';

import logoImg from '../../img/conclusions_white.png';
import ffhqImg from '../../img/ffhq.png';


export default makeScene2D(function* (view) {
  const titleBox = createRef<Rect>();
  const bodyBox = createRef<Rect>();
  const titleText = createRef<Txt>();
  const logo = createRef<Img>();

  const leftRect = createRef<Rect>();
  const c1Rect = createRef<Rect>();
  const c1Text = createRef<Txt>();
  const c2Rect = createRef<Rect>();
  const c2Text = createRef<Txt>();
  const c3Rect = createRef<Rect>();
  const c3Text = createRef<Txt>();
  const c4Rect = createRef<Rect>();
  const c4Text = createRef<Txt>();

  const textStyle = {
    fontWeight: 600,
    fontSize: 60,
    offsetY: 0,
    padding: 0,
    cache: true,
    fontFamily: 'Open Sans',
    fill: "#282828"
  };

  const purple = "#8e7dbe"
            
  const purpleStyle ={
    fill:purple.concat("88"),
    padding:20,
    smoothCorners:true,
    radius:20
  }

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
          fill={purple}
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
            src={logoImg}
            size={260}
            opacity={1}
          />
          <Rect width={10} />
          <Txt
            ref={titleText}
            text={"CONCLUSIONS"}
            {...textStyle}
            fontSize={200}
            fill={"#ffffff"}
            paddingTop={20}
          />
        </Rect>
      <Rect 
        fill="#FAF5F0"
        ref={bodyBox}
        height={0}
        alignItems={"center"}
        justifyContent={"center"}
        layout
        direction={'row'}
        gap={0}
      >
          <Rect ref={leftRect} fill={purple.concat("44")} width={1720} height={830} 
            layout direction={"column"} alignItems={"center"}
            justifyContent={"center"} gap={30} smoothCorners={true}
            radius={20} opacity={0}
          >

            <Rect {...purpleStyle} ref={c1Rect}>
              <Txt ref={c1Text}
                text="Optimize GPU memory usage. Improvements in the
                multiplication Block"
                {... textStyle} fontSize={45} textAlign={"center"}
              />
    
            </Rect>

            <Rect {...purpleStyle} ref={c2Rect}>
              <Txt ref={c2Text}
                text="Explore or improve encoding/decoding mechanisms
                to overcome facial pose issues"
                {... textStyle} fontSize={45} textAlign={"center"}
              />
    
            </Rect>

            <Rect {...purpleStyle} ref={c3Rect}>
              <Txt 
                ref={c3Text}
                text="Focus on acquiring datasets with better and more 
                diverse representations and promote inclusivity"
                {... textStyle} fontSize={45} textAlign={"center"}
              />
            </Rect>

            <Rect {...purpleStyle} ref={c4Rect}>
              <Txt 
                ref={c4Text}
                text="Combine our findings with other state of the art for 
                performing attribute manipulation in videos
                "
                {... textStyle} fontSize={45} textAlign={"center"}
              />
            </Rect>
          </Rect>
      </Rect>
    </Layout>
  </>
);

  yield* all(
    titleBox().height(150, 0),
    titleText().fontSize(80, 0),
    logo().size(76, 0),
    bodyBox().height(910, 0),
  )
  yield* slideTransition(Direction.Right);
  yield* all(
    leftRect().opacity(1,1),
    titleText().text("Future Work", 1)
  )

  yield* beginSlide('c1');
  yield* all(
    c1Text().fontSize(60, 1),
    c2Rect().opacity(0.1, 1),
    c3Rect().opacity(0.1, 1),
    c4Rect().opacity(0.1, 1),
    c2Text().fontSize(30, 1),
    c3Text().fontSize(30, 1),
    c4Text().fontSize(30, 1),
  )

  yield* beginSlide('c2');
  yield* all(
    c2Text().fontSize(60, 1),
    c2Rect().opacity(1, 1),
    c1Rect().opacity(0.1, 1),
    c1Text().fontSize(30, 1),
  )

  yield* beginSlide('c3');
  yield* all(
    c3Text().fontSize(60, 1),
    c3Rect().opacity(1, 1),
    c2Rect().opacity(0.1, 1),
    c2Text().fontSize(30, 1),
  )

  yield* beginSlide('c4');
  yield* all(
    c4Text().fontSize(60, 1),
    c4Rect().opacity(1, 1),
    c3Rect().opacity(0.1, 1),
    c3Text().fontSize(30, 1),
  )
  yield* beginSlide('end');
});
