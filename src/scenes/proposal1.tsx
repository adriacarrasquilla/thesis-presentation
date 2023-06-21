import {makeScene2D, Txt, Img, Layout, Rect, Line} from '@motion-canvas/2d';
import {all, createRef, beginSlide, slideTransition, Direction, sequence, createSignal} from '@motion-canvas/core';

import proposal_logo from '../../img/proposal_white.png';
import encoderImg from '../../img/latent_encoding.png';
import classifierImg from '../../img/classifier.png';
import orgImg from '../../img/clas_ex_org.png';
import trImg from '../../img/clas_ex_tr.png';


export default makeScene2D(function* (view) {
  const titleBox = createRef<Rect>();
  const bodyBox = createRef<Rect>();
  const padTop = createSignal(50);
  const proposalText = createRef<Txt>();

  const firstText = createRef<Layout>();
  const encoderLayout = createRef<Layout>();
  const classifierLayout = createRef<Layout>();

  const attr1 = createSignal(0.0);
  const attr2 = createSignal(0.0);
  const attr3 = createSignal(0.0);
  const attr4 = createSignal(0.0);

  const logo = createRef<Img>();
  const latImage = createRef<Img>();
  const trImage = createRef<Img>();
  

  const textStyle = {
    fontWeight: 600,
    fontSize: 200,
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
          />
        </Rect>
      <Rect 
        fill="#FAF5F0"
        ref={bodyBox}
        height={0}
        alignItems={"center"}
        justifyContent={"start"}
        layout
        direction={'column'}
        gap={30}
      >
      </Rect>
    </Layout>
    <Layout
        ref={firstText}
        layout
        alignItems={"start"}
        justifyContent={"start"}
        direction={"column"}
        // gap={50}
        y={50}
        width={1650}
        opacity={0}
      >
      <Txt
        text={"We aim to improve the proposal from the paper"} 
        {... textStyle}
        fontSize={60}
        fontWeight={400}
      />
      <Txt
        text={"A Latent Transformer for Face Editing in Images and Videos"} 
        {... textStyle}
        fontSize={60}
        fontWeight={300}
        fontStyle={"italic"}
      />
      <Txt
        text="They:
          - Manipulate the latent space representation of the image
          - Train an auxiliary Latent Classifier
          - Train 40 models sequentially to learn individual attributes
        "
        {... textStyle}
        fontSize={50}
        fontWeight={400}
          paddingTop={50}
      />
    </Layout>
    <Layout
        ref={encoderLayout}
        layout
        alignItems={"center"}
        justifyContent={"start"}
        direction={"column"}
        gap={50}
        y={60}
        opacity={0}
      >
      <Txt
        text={"Latent Encoder and Decoder"} 
        {... textStyle}
        fontSize={60}
      />
      <Img
        src={encoderImg}
      />
    </Layout>

    <Layout
        ref={classifierLayout}
        layout
        alignItems={"center"}
        justifyContent={"start"}
        direction={"column"}
        gap={50}
        y={60}
        opacity={0}
      >
      <Txt
        text={"Latent Classifier"} 
        {... textStyle}
        fontSize={60}
      />
      <Layout layout direction={"row"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Img
          ref={latImage}
          src={orgImg}
          size={300}
          opacity={0}
        />
        <Img
          src={classifierImg}
        />
        <Rect
          fill={"#F3722C88"}
            width={120}
            height={450}
            smoothCorners={true}
            radius={20}
            layout
            direction={"column"}
            gap={10}
            alignItems={"center"}
            justifyContent={"center"}
        >
            <Rect
              fill={"#F3722C"}
              width={100}
              height={100}
              smoothCorners={true}
              radius={20}
              alignItems={"center"}
              justifyContent={"center"}
              opacity={() => 0.2 + attr1()}
            >
              <Txt
                text={() => `${attr1().toFixed(2)}`}
                {... textStyle}
                fontSize={30}
                fill="#FFFFFF"
              />
            </Rect>
            <Rect
              fill={"#F3722C"}
              width={100}
              height={100}
              smoothCorners={true}
              radius={20}
              alignItems={"center"}
              justifyContent={"center"}
              opacity={() => 0.2 + attr2()}
            >
              <Txt
                text={() => `${attr2().toFixed(2)}`}
                {... textStyle}
                fontSize={30}
                fill="#FFFFFF"
              />
            </Rect>
            <Rect
              fill={"#F3722C"}
              width={100}
              height={100}
              smoothCorners={true}
              radius={20}
              alignItems={"center"}
              justifyContent={"center"}
              opacity={() => 0.2 + attr3()}
            >
              <Txt
                text={() => `${attr3().toFixed(2)}`}
                {... textStyle}
                fontSize={30}
                fill="#FFFFFF"
              />
            </Rect>
            <Rect
              fill={"#F3722C"}
              width={100}
              height={100}
              smoothCorners={true}
              radius={20}
              alignItems={"center"}
              justifyContent={"center"}
              opacity={() => 0.2 + attr4()}
            >
              <Txt
                text={() => `${attr4().toFixed(2)}`}
                {... textStyle}
                fontSize={30}
                fill="#FFFFFF"
              />
            </Rect>
        </Rect>
        <Rect
            width={120}
            height={450}
            smoothCorners={true}
            radius={20}
            layout
            direction={"column"}
            gap={80}
            alignItems={"start"}
            justifyContent={"center"}
            paddingLeft={30}
        >
            <Txt
              text={"Young"}
              {... textStyle}
              fontSize={30}
              fill="#282828"
            />
            <Txt
              text={"Male"}
              {... textStyle}
              fontSize={30}
              fill="#282828"
            />
            <Txt
              text={"Beard"}
              {... textStyle}
              fontSize={30}
              fill="#282828"
            />
            <Txt
              text={"Chubby"}
              {... textStyle}
              fontSize={30}
              fill="#282828"
/>

        </Rect>
      </Layout>
    </Layout>
        <Img
          ref={trImage}
          src={trImg}
          size={300}
          opacity={0}
          x={-542}
          y={120}
        />
  </>
);

  yield* slideTransition(Direction.Right);
  yield* beginSlide('Proposal Init');
  yield* all(
    titleBox().height(150, 1),
    proposalText().fontSize(80, 1),
    logo().size(76, 1),
    padTop(10, 1),
    bodyBox().height(910, 1),
  )
  yield* proposalText().text("Baseline Components", 1)
  yield* firstText().opacity(1, 1)
  yield* beginSlide('Latent encoder');
  yield* sequence(0.5,
    firstText().opacity(0, 1),
    encoderLayout().opacity(1, 1),
  )
  yield* beginSlide('Latent Classifier 1');
  yield* sequence(0.5,
    encoderLayout().opacity(0, 1),
    classifierLayout().opacity(1, 1),
  )
  yield* beginSlide('Latent Classifier 2');
  yield* all(
    latImage().opacity(1, 1),
    attr1(0.63, 1),
    attr2(0.99, 1),
    attr3(0.1, 1),
    attr4(0.2, 1),
  )
  yield* beginSlide('Latent Classifier 3');
  yield* all(
    latImage().opacity(0, 2),
    trImage().opacity(1, 1),
    attr1(0.13, 1),
    attr2(0.32, 1),
    attr3(0.84, 1),
    attr4(0.99, 1),
  )
  yield* beginSlide('Latent Transformer 1');
});
