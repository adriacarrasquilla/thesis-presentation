import {makeScene2D, Txt, Img, Layout, Rect, Latex} from '@motion-canvas/2d';
import {all, createRef, beginSlide, slideTransition, Direction, sequence, createSignal, range, makeRef, loop, chain, ThreadGenerator, zoomInTransition} from '@motion-canvas/core';

import proposal_logo from '../../img/proposal_white.png';
import archImg1 from '../../img/proposed_arch1.png';
import archImg2 from '../../img/proposed_arch2.png';
import archImg3 from '../../img/proposed_arch3.png';
import archImg4 from '../../img/proposed_arch4.png';

export default makeScene2D(function* (view) {
  const titleBox = createRef<Rect>();
  const bodyBox = createRef<Rect>();
  const padTop = createSignal(50);
  const proposalText = createRef<Txt>();


  const logo = createRef<Img>();
  const textStyle = {
    fontWeight: 600,
    fontSize: 200,
    offsetY: 0,
    padding: 0,
    cache: true,
    fontFamily: 'Open Sans',
    fill: "#282828"
  };
  const orange =  "#F3722C"

  const lossStyle = {
      fill: orange,
      smoothCorners:true,
      radius:20,
      width:0,
      height:500,
      justifyContent: "center",
      alignItems: "center",
  }

  const lossLayout = createRef<Layout>();
  const clsRect = createRef<Rect>();
  const attrRect = createRef<Rect>();
  const recRect = createRef<Rect>();
  const clsTxt = createRef<Txt>();
  const attrTxt = createRef<Txt>();
  const recTxt = createRef<Txt>();

  const tex = createRef<Latex>();

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
          fill={orange}
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
            src={proposal_logo}
            size={260}
            opacity={1}
          />
          <Rect width={10} />
          <Txt
            ref={proposalText}
            text={"PROPOSAL"}
            {...textStyle}
            fill={"#ffffff"}
          />
        </Rect>
      <Rect 
        fill="#FAF5F0"
        ref={bodyBox}
        height={0}
        alignItems={"center"}
        justifyContent={"center"}
        layout
        direction={'column'}
        gap={30}
      >
        <Layout
            ref={lossLayout}
            layout
            direction={"row"}
            alignItems={"center"}
            justifyContent={"center"}
            gap={50}
            opacity={1}
          >
            <Rect
              ref={clsRect}
              layout
              {...lossStyle}
            >
              <Txt
                ref={clsTxt}
                text="Classification
                  BCE"
                textAlign={"center"}
                {...textStyle}
                fontSize={60}
                fill="#FFFFFF"
                width={0}
              />
            </Rect>
            <Rect
              ref={attrRect}
              layout
              {...lossStyle}
            >
              <Txt
                ref={attrTxt}
                text="Attribute
                  Regularization"
                textAlign={"center"}
                {...textStyle}
                fontSize={60}
                fill="#FFFFFF"
                width={0}
              />
            </Rect>
            <Rect
              ref={recRect}
              layout
              direction={"column"}
              {...lossStyle}
            >
              <Txt
                ref={recTxt}
                text="Identity
                  Preservation"
                textAlign={"center"}
                {...textStyle}
                fontSize={60}
                fill="#FFFFFF"
                width={0}
              />
            </Rect>
        </Layout>
      </Rect>
    </Layout>
  </>
);

  yield* all(
    titleBox().height(150, 0),
    proposalText().fontSize(80, 0),
    logo().size(76, 0),
    padTop(10, 0),
    bodyBox().height(910, 0),
  )
  yield* slideTransition(Direction.Right);
  yield* proposalText().text("Training Losses", 1)
  yield* sequence(0.2,
    all(
      clsRect().width(500, 1),
      clsTxt().width(500, 1),
    ),
    all(
      attrRect().width(500, 1),
      attrTxt().width(500, 1),
    ),
    all(
      recRect().width(500, 1),
      recTxt().width(500, 1),
    ),
  )
  yield* beginSlide('Our Arch Init');
});
