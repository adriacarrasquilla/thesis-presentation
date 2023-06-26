import {makeScene2D, Txt, Img, Layout, Rect, Latex} from '@motion-canvas/2d';
import {all, createRef, beginSlide, slideTransition, Direction, sequence, createSignal, range, makeRef, loop, chain, ThreadGenerator} from '@motion-canvas/core';

import proposal_logo from '../../img/proposal_white.png';
import encoderImg from '../../img/latent_encoding.png';
import classifierImg from '../../img/classifier.png';
import orgImg from '../../img/clas_ex_org.png';
import trImg from '../../img/clas_ex_tr.png';
import singArch from '../../img/single_arch.jpeg';
import paperImg from '../../img/paper_img.png';


export default makeScene2D(function* (view) {
  const titleBox = createRef<Rect>();
  const bodyBox = createRef<Rect>();
  const padTop = createSignal(50);
  const proposalText = createRef<Txt>();
  const kAttrTxt1 = createRef<Txt>();
  const kAttrTxt2 = createRef<Txt>();
  const kAttrTxt3 = createRef<Txt>();

  const firstText = createRef<Layout>();
  const encoderLayout = createRef<Layout>();
  const classifierLayout = createRef<Layout>();
  const transformerLayout = createRef<Layout>();
  const kTrLayout = createRef<Layout>();

  const attr1 = createSignal(0.0);
  const attr2 = createSignal(0.0);
  const attr3 = createSignal(0.0);
  const attr4 = createSignal(0.0);

  const logo = createRef<Img>();
  const latImage = createRef<Img>();
  const trImage = createRef<Img>();

  const singImg = createRef<Img>();
  const tex = createRef<Latex>();

  const k = createSignal(1);
  const trRefs: Rect[] = [];
  const trTxtRefs: Txt[] = [];
  const transformers1 = range(10).map((i) =>
    <Rect ref={makeRef(trRefs, i)} size={[0,0]} radius={20} fill={"#F3722C"} justifyContent={'center'}>
      <Txt ref={makeRef(trTxtRefs, i)} alignSelf={'center'} text={`T${i+1}`} fontFamily={"Open Sans"} fontSize={0} fill={"#383838"}/>
    </Rect>);

  
  const trRefs2: Rect[] = [];
  const trTxtRefs2: Txt[] = [];
  const transformers2 = range(10).map((i) =>
    <Rect ref={makeRef(trRefs2, i)} size={[0,0]} radius={20} fill={"#F3722C"} justifyContent={'center'}>
      <Txt ref={makeRef(trTxtRefs2, i)} alignSelf={'center'} text={`T${i+1+10}`} fontFamily={"Open Sans"} fontSize={0} fill={"#383838"}/>
    </Rect>);

  const trRefs3: Rect[] = [];
  const trTxtRefs3: Txt[] = [];
  const transformers3 = range(10).map((i) =>
    <Rect ref={makeRef(trRefs3, i)} size={[0,0]} radius={20} fill={"#F3722C"} justifyContent={'center'}>
      <Txt ref={makeRef(trTxtRefs3, i)} alignSelf={'center'} text={`T${i+1+20}`} fontFamily={"Open Sans"} fontSize={0} fill={"#383838"}/>
    </Rect>);

  const trRefs4: Rect[] = [];
  const trTxtRefs4: Txt[] = [];
  const transformers4 = range(10).map((i) =>
    <Rect ref={makeRef(trRefs4, i)} size={[0,0]} radius={20} fill={"#F3722C"} justifyContent={'center'}>
      <Txt ref={makeRef(trTxtRefs4, i)} alignSelf={'center'} text={`T${i+1+30}`} fontFamily={"Open Sans"} fontSize={0} fill={"#383838"}/>
    </Rect>);
  
  const trRow1 = createRef<Layout>();
  const trRow2 = createRef<Layout>();
  const trRow3 = createRef<Layout>();
  const trRow4 = createRef<Layout>();
  
  const finalText = createRef<Txt>();

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
        text="We build on top of a state-of-the-art solution and propose an
            alternative to their approach. The paper is titled:" 
        {... textStyle}
        fontSize={50}
        fontWeight={400}
      />
      <Txt
        text={"A Latent Transformer for Face Editing in Images and Videos"} 
        {... textStyle}
        fontSize={50}
        fontWeight={300}
        fontStyle={"italic"}
      />
      <Txt
        text={"(Accepted by ICCV in 2021)"} 
        {... textStyle}
        fontSize={30}
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
        fontSize={45}
        fontWeight={400}
        paddingTop={40}
        paddingBottom={150}
      />
      <Img
        src={paperImg}
        layout={false}
        width={1200}
        y={300}
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
      <Layout
          ref={transformerLayout}
          layout
          alignItems={"center"}
          justifyContent={"start"}
          direction={"column"}
          gap={50}
          y={60}
          opacity={0}
        >
        <Txt
          text={"Latent Transformer"} 
          {... textStyle}
          fontSize={60}
        />
        <Layout>
          <Txt 
            ref={kAttrTxt1}
            text="To learn&nbsp;"
            {... textStyle}
            fontSize={40}
            fontWeight={400}
            height={0}
          />
          <Txt
            ref={kAttrTxt2}
            text={() => `k=${k().toFixed(0)}`}
            {... textStyle}
            fontSize={40}
            fontWeight={700}
            height={0}
            fill={"#F3722C"}
          />
          <Txt 
            ref={kAttrTxt3}
            text="&nbsp;number of attributes we need:"
            {... textStyle}
            fontSize={40}
            fontWeight={400}
            height={0}
          />
        </Layout>
        <Layout layout
          direction={"row"}
          alignItems={"center"}
          justifyContent={"start"}
          gap={50}
        >
          <Layout ref={kTrLayout} layout gap={0}>
            <Layout layout direction={"column"} gap={5}>
              <Layout ref={trRow1} layout direction={"row"} gap={0}>
                {transformers1}
              </Layout>
              <Layout ref={trRow2} layout direction={"row"} gap={0}>
                {transformers2}
              </Layout>
              <Layout ref={trRow3} layout direction={"row"} gap={0}>
                {transformers3}
              </Layout>
              <Layout ref={trRow4} layout direction={"row"} gap={0}>
                {transformers4}
              </Layout>
            </Layout>
            <Img
              ref={singImg}
              src={singArch}
              fill="#F3722C33"
              alpha={1}
            />
            <Latex
              ref={tex}
              tex="{ T_k(w) = f(w) \times \alpha + w}"
              y={0}
              width={800}
              layout={false}
              opacity={0}
            />
          </Layout>
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
      <Txt
        ref={finalText}
        text="It implies training 40 different models,
        going over the entire dataset 40 times and,
        for multi-attribute manipulation,
        loading and using up to 40 models"
        {... textStyle} 
        fontSize={70}
        textAlign={"center"}
        y={60}
        opacity={0}
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
    latImage().opacity(0, 1),
    trImage().opacity(1, 1),
    attr1(0.13, 1),
    attr2(0.32, 1),
    attr3(0.84, 1),
    attr4(0.99, 1),
  )
  yield* beginSlide('Latent Transformer 1');
  yield* all(
    trImage().opacity(0, 1),
    classifierLayout().opacity(0,1)
  )
  yield* all(
    transformerLayout().opacity(1,1)
  )
  yield* beginSlide('Latent Transformer 2');
  yield* all(
    singImg().alpha(0.2,1),
    tex().opacity(1,1)
  )
  yield* beginSlide('Latent Transformer 3');
  yield* all(
    singImg().alpha(0, 1),
    singImg().fill("#F3722C", 1),
    singImg().size([100, 100], 1),
    singImg().radius(20, 1),
    tex().opacity(0, 1),
    kTrLayout().height(500,1),
    kAttrTxt1().height(50,1),
    kAttrTxt2().height(50,1),
    kAttrTxt3().height(50,1),
  )
  yield* all(
    trRefs[0].size(100, 0),
    trTxtRefs[0].fontSize(30, 0.5),
    singImg().size(0, 0)
  )
  yield* beginSlide('Latent Transformer 4');

  const generators1: ThreadGenerator[] = [];
  range(5).map(i => {
    generators1.push(
      all(
        trRefs[i].size(100, 1),
        trTxtRefs[i].fontSize(30, 1)
      )
    )
  })
  yield* all(
    trRow1().gap(5, 1),
    trRow2().gap(5, 1),
    trRow3().gap(5, 1),
    trRow4().gap(5, 1),
    sequence(0.1, ...generators1),
    k(5, 1.5)
  )

  yield* beginSlide('Latent Transformer 6');
  const generators2: ThreadGenerator[] = [];
  range(5).map(i => {
    generators2.push(
      all(
        trRefs[i+5].size(100, 1),
        trTxtRefs[i+5].fontSize(30, 1)
      )
    )
  })
  yield* all(
    sequence(0.1, ...generators2),
    k(10, 1.5)
  )

  yield* beginSlide('Latent Transformer 5');
  const generators3: ThreadGenerator[] = [];
  range(10).map(i => {
    generators3.push(
      sequence(0.1,
        all(
          trRefs2[i].size(100, 0.5),
          trTxtRefs2[i].fontSize(30, 0.5),
        ),
        all(
          trRefs3[i].size(100, 0.5),
          trTxtRefs3[i].fontSize(30, 0.5),
        ),
        all(
          trRefs4[i].size(100, 0.5),
          trTxtRefs4[i].fontSize(30, 0.5),
        ),
      )
    )
  })
  yield* all(
    k(40, 1.5),
    sequence(0.1, ...generators3),
  )
  yield* beginSlide('Latent Transformer 6');
  yield* all(
    transformerLayout().opacity(0.1,1),
    finalText().opacity(1,1.5),
  )
  yield* beginSlide('Latent Transformer 7');
});
