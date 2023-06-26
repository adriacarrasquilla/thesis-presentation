import {makeScene2D, Txt, Img, Layout, Rect, Latex} from '@motion-canvas/2d';
import {all, createRef, beginSlide, slideTransition, Direction, sequence, createSignal, range, makeRef, loop, chain, ThreadGenerator, zoomInTransition} from '@motion-canvas/core';

import proposal_logo from '../../img/proposal_white.png';

export default makeScene2D(function* (view) {
  const titleBox = createRef<Rect>();
  const bodyBox = createRef<Rect>();
  const padTop = createSignal(50);
  const proposalText = createRef<Txt>();


  const logo = createRef<Img>();
  const textStyle = {
    fontWeight: 400,
    fontSize: 55,
    offsetY: 0,
    padding: 0,
    cache: true,
    fontFamily: 'Open Sans',
    fill: "#282828"
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
          fill="#F3722C"
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
            fontWeight={700}
          />
        </Rect>
      <Rect 
        fill="#FAF5F0"
        ref={bodyBox}
        height={0}
        alignItems={"start"}
        justifyContent={"center"}
        layout
        direction={'column'}
        gap={60}
        paddingLeft={80}
      >
          <Layout>
            <Txt
              text="Dataset:&nbsp;"
              {...textStyle}
              fontWeight={700}
            />
            <Txt
              {...textStyle}
              text="CelebA-HQ.&nbsp;"
            />
            <Txt
              text="27k facial images with 40 attribute labels each"
              {...textStyle}
              fontWeight={300}
            />
          </Layout>
          <Layout>
            <Txt
              text="Training steps:&nbsp;"
              {...textStyle}
              fontWeight={700}
            />
            <Txt
              text="Modifying one single attribute per iteration"
              {...textStyle}
              fontWeight={300}
            />
          </Layout>
          <Layout>
            <Txt
              text="Learned "
              {...textStyle}
              fontWeight={300}
            />
            <Txt
              text="&nbsp;20 simultaneous attributes"
              {...textStyle}
              fontWeight={700}
            />
            <Txt
              text=". Limited by hardware."
              {...textStyle}
              fontWeight={300}
            />
          </Layout>
          <Layout>
            <Txt
              text="Using "
              {...textStyle}
              fontWeight={300}
            />
            <Txt
              text="&nbsp;pretrained&nbsp;"
              {...textStyle}
              fontWeight={700}
            />
            <Txt
              text="Latent Classifier and Encoder/Decoder"
              {...textStyle}
              fontWeight={300}
            />
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
  yield* proposalText().text("Training Details", 1)
  yield* beginSlide('End');
});
