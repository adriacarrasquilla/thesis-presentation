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

  const archLayout = createRef<Layout>();
  const archImgRef1 = createRef<Img>();
  const archImgRef2 = createRef<Img>();
  const archImgRef3 = createRef<Img>();
  const archImgRef4 = createRef<Img>();

  const trText = createRef<Txt>();
  const compText = createRef<Txt>();
  const multText = createRef<Txt>();
  const mergText = createRef<Txt>();

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
            ref={archLayout}
            layout
            alignItems={"center"}
            justifyContent={"center"}
            direction={"column"}
            gap={50}
            y={60}
            opacity={0}
          >
            <Txt
              text={"Latent Multi-Attribute Transformer"} 
              {... textStyle}
              fontSize={60}
            />
            <Layout layout direction={"row"}
              alignItems={"center"}
              justifyContent={"center"}
              height={600}
            />
              <Img
                ref={archImgRef1}
                src={archImg1}
                width={1700}
                opacity={1}
                layout={false}
                y={50}
              />
              <Img
                ref={archImgRef2}
                src={archImg2}
                width={1700}
                opacity={1}
                layout={false}
                y={50}
              />
              <Img
                ref={archImgRef3}
                src={archImg3}
                width={1700}
                opacity={1}
                layout={false}
                y={50}
              />
              <Img
                ref={archImgRef4}
                src={archImg4}
                width={1700}
                opacity={1}
                layout={false}
                y={50}
              />
              <Latex
                ref={tex}
                tex={`T'(w) = w + T(w)`}
                width={700}
                layout={false}
                y={40}
                opacity={0} 
              />
              <Rect
                ref={trText}
                width={700}
                layout={false}
                fill={"#F3722C"}
                size={200}
                y={150}
                x={300}
                opacity={0} 
                alignItems={"center"}
                justifyContent={"center"}
              >
                <Txt
                  text={"Latent Transformer"} 
                  {... textStyle}
                  fontSize={50}
                  y={-20}
                />
                <Txt
                  text={"Kept as original"} 
                  {... textStyle}
                  fontSize={40}
                  fontWeight={400}
                  y={40}
                />
              </Rect>
              <Rect
                ref={compText}
                width={600}
                height={300}
                layout={false}
                fill={"#F3722C"}
                size={200}
                y={50}
                x={500}
                opacity={0} 
                alignItems={"center"}
                justifyContent={"center"}
              >
                <Txt
                  text={"Reduction Block"} 
                  {... textStyle}
                  fontSize={40}
                  y={-90}
                />
                <Txt
                  text="Compresses the transformed latent
                  representation into a vector of 1x512.
                  It is required due memory limitations.
                  Optimizes the information needed.
                "
                  {... textStyle}
                  fontSize={30}
                  fontWeight={400}
                  textAlign={"center"}
                  y={40}
                />
              </Rect>
              <Rect
                ref={multText}
                width={700}
                height={250}
                layout={false}
                fill={"#F3722C"}
                size={200}
                y={-100}
                x={-300}
                opacity={0} 
                alignItems={"center"}
                justifyContent={"center"}
              >
                <Txt
                  text={"Multiplication Block"} 
                  {... textStyle}
                  fontSize={40}
                  y={-60}
                />
                <Txt
                  text="Multiplies the compressed transformation with
                  the n attribute coefficients. This operation
                  is memory demanding.
                "
                  {... textStyle}
                  fontSize={30}
                  fontWeight={400}
                  textAlign={"center"}
                  y={40}
                />
              </Rect>
              <Rect
                ref={mergText}
                width={550}
                height={300}
                layout={false}
                fill={"#F3722C"}
                size={200}
                y={50}
                x={100}
                opacity={0} 
                alignItems={"center"}
                justifyContent={"center"}
              >
                <Txt
                  text="Merge and Upsample
                  Block" 
                  {... textStyle}
                  fontSize={40}
                  y={-80}
                  textAlign={"center"}
                />
                <Txt
                  text="Merges the n transformations into
                  a single, upscaled and unified 
                  transformation that matches the 
                  original size of 1x9216
                "
                  {... textStyle}
                  fontSize={30}
                  fontWeight={400}
                  textAlign={"center"}
                  y={50}
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
  yield* proposalText().text("Proposed Architecture", 1)
  yield* beginSlide('Our Arch Init');
  yield* archLayout().opacity(1,1);
  yield* beginSlide('Latent Transformer');
  yield* all(
    archImgRef2().opacity(0.2, 1),
    archImgRef3().opacity(0.2, 1),
    archImgRef4().opacity(0.2, 1),
    trText().opacity(1, 1),
  )
  yield* beginSlide('Compression');
  yield* all(
    trText().opacity(0, 1),
    compText().opacity(1, 1),
    archImgRef1().opacity(0.2, 1),
    archImgRef2().opacity(1, 1),
    archImgRef3().opacity(0.2, 1),
    archImgRef4().opacity(0.2, 1),
  )
  yield* beginSlide('multiplication');
  yield* all(
    compText().opacity(0, 1),
    multText().opacity(1, 1),
    archImgRef1().opacity(0.2, 1),
    archImgRef2().opacity(0.2, 1),
    archImgRef3().opacity(1, 1),
    archImgRef4().opacity(0.2, 1),
  )
  yield* beginSlide('Merging');
  yield* all(
    multText().opacity(0, 1),
    mergText().opacity(1, 1),
    archImgRef1().opacity(0.2, 1),
    archImgRef2().opacity(0.2, 1),
    archImgRef3().opacity(0.2, 1),
    archImgRef4().opacity(1, 1),
  )
  yield* beginSlide('Summary');
  yield* all(
    mergText().opacity(0, 1),
    archImgRef4().opacity(0.2, 1),
    tex().opacity(1,1),
  )
  yield* beginSlide('End');
});
