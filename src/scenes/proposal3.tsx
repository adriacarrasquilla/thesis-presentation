import {makeScene2D, Txt, Img, Layout, Rect, Latex} from '@motion-canvas/2d';
import {all, createRef, beginSlide, slideTransition, Direction, sequence, createSignal, range, makeRef, loop, chain, ThreadGenerator, zoomInTransition, easeInQuad, easeOutCirc} from '@motion-canvas/core';

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
  const lightorange =  "#F9B895"
  const gray =  "#383838"

  const lossStyle = {
      fill: orange,
      smoothCorners:true,
      radius:20,
      width:0,
      height:500,
      justifyContent: "center",
      alignItems: "center",
      direction: "column",
  }

  const lossLayout = createRef<Layout>();

  const clsRect = createRef<Rect>();
  const attrRect = createRef<Rect>();
  const recRect = createRef<Rect>();

  const clsTxt = createRef<Txt>();
  const attrTxt = createRef<Txt>();
  const recTxt = createRef<Txt>();

  const clsInner = createRef<Layout>();
  const attrInner = createRef<Layout>();
  const recInner = createRef<Layout>();

  const totalLoss = createRef<Layout>();

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
              justifyContent={"center"}
              alignItems={"center"}
              direction={"column"}
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
              <Layout
                ref={clsInner}
                height={0}
                layout
                direction={"column"}
                alignItems={'center'}
                justifyContent={'center'}
                gap={50}
                opacity={0}
                paddingTop={20}
              >
                <Txt
                  text="Computes the Binary Cross Entropy Loss between
                  the probability of the n-target attributes in the
                  transformed representation with the desired values

                  Ensures the manipulation of the target attributes
                  "
                  {...textStyle}
                  fontSize={45}
                  fontWeight={400}
                  textAlign={"center"}
                />
                <Latex
                  tex="{\mathcal{L}_{cls} = -\frac{1}{N} \sum_{i=1}^{N} \left[ t_i \log(p_i) + (1 - t_i) \log(1 - p_i) \right]}"
                  height={150}
                />
              </Layout>
            </Rect>
            <Rect
              ref={attrRect}
              layout
              {...lossStyle}
              justifyContent={"center"}
              alignItems={"center"}
              direction={"column"}
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
              <Layout
                ref={attrInner}
                height={0}
                layout
                direction={"column"}
                alignItems={'center'}
                justifyContent={'center'}
                gap={60}
                opacity={0}
                paddingTop={40}
              >
                <Txt
                  text="MSE score between the original non-target attribute
                  classification values and the transformed ones.

                  Uses the correlation matrix to weight each attribute difference.
                  It aims to minimize transformations on undesired attributes.
                  "
                  {...textStyle}
                  fontSize={45}
                  fontWeight={400}
                  textAlign={"center"}
                />
                <Latex
                  tex="{\mathcal{L}_{attr} = \sum_{i \not\in \mathcal{T}} (1 - \gamma_i) \mathbb{E}_{w,i}\left[||p_i - C(w)_i||_2\right]}"
                  height={120}
                />
              </Layout>
            </Rect>
            <Rect
              ref={recRect}
              layout
              {...lossStyle}
              justifyContent={"center"}
              alignItems={"center"}
              direction={"column"}
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
              <Layout
                ref={recInner}
                height={0}
                layout
                direction={"column"}
                alignItems={'center'}
                justifyContent={'center'}
                gap={60}
                opacity={0}
                paddingTop={40}
              >
                <Txt
                  text="MSE score between the original and transformed
                  latent representations.

                  It aims to minimize differences overall
                  between both representations.
                  "
                  {...textStyle}
                  fontSize={45}
                  fontWeight={400}
                  textAlign={"center"}
                />
                <Latex
                  tex="{\mathcal{L}_{rec} = \mathbb{E}_{w}\left[||T(w)-w||_2\right]}"
                  height={60}
                />
              </Layout>
            </Rect>
        </Layout>
          <Layout ref={totalLoss} layout={false} opacity={0}>
            <Txt text="Total loss:" {... textStyle} fontSize={80} y={-50}/>
            <Latex tex="{\mathcal{L} = \mathcal{L}_{cls} + \lambda_{attr}\mathcal{L}_{attr} + \lambda_{rec}\mathcal{L}_{rec}}" height={80} y={50}/>
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
  yield* slideTransition(Direction.Right, 0.5);
  yield* proposalText().text("Training Losses",0.51)
  yield* sequence(0.2,
    all(
      clsRect().width(500, 0.5),
      clsTxt().width(500, 0.5),
    ),
    all(
      attrRect().width(500, 0.5),
      attrTxt().width(500, 0.5),
    ),
    all(
      recRect().width(500, 0.5),
      recTxt().width(500, 0.5),
    ),
  )
  // yield* beginSlide('BCE');
  // yield* all(
  //     lossLayout().gap(0, 0.5),
  //
  //     recRect().width(0, 0.5),
  //     recTxt().width(0, 0.5),
  //     attrRect().width(0, 0.5),
  //     attrTxt().width(0, 0.5),
  //
  //     clsRect().width(1500, 0.5),
  //     clsRect().height(700, 0.5),
  //     clsRect().fill(lightorange, 0.5),
  //
  //     clsTxt().text("Classification", 0.5).to("Classification BCE", 0.5),
  //     clsTxt().fontSize(70, 0.5),
  //     clsTxt().fill(gray, 0.5),
  //     clsTxt().width(800, 0.5),
  //     clsInner().height(500, 0.5),
  //
  // )
  // yield* clsInner().opacity(1, 0.5),
  // yield* beginSlide('Attr');
  // yield* all(
  //     lossLayout().gap(0, 0.5),
  //
  //
  //     clsRect().width(0, 0.5),
  //     clsRect().height(500, 0.5),
  //     clsRect().fill(orange, 0.5),
  //     clsTxt().text("Classification \nBCE", 0.5),
  //     clsTxt().width(0, 0.5),
  //     clsTxt().opacity(0, 0.5),
  //     clsInner().opacity(0, 0.5),
  //
  //     attrRect().width(1500, 0.5),
  //     attrRect().height(700, 0.5),
  //     attrRect().fill(lightorange, 0.5),
  //
  //     attrTxt().text("Attribute", 0.5).to("Attribute Regularization", 0.5),
  //     attrTxt().fontSize(70, 0.5),
  //     attrTxt().fill(gray, 0.5),
  //     attrTxt().width(1000, 0.5),
  //     attrInner().height(500, 0.5),
  //
  // )
  // yield* attrInner().opacity(1, 0.5),
  // yield* beginSlide('Ident');
  // yield* all(
  //
  //     attrRect().width(0, 0.5),
  //     attrRect().height(500, 0.5),
  //     attrRect().fill(orange, 0.5),
  //     attrTxt().text("Attribute \nRegularization", 0.5),
  //     attrTxt().width(0, 0.5),
  //     attrTxt().opacity(0, 0.5),
  //     attrInner().opacity(0, 0.5),
  //
  //     recRect().width(1500, 0.5),
  //     recRect().height(700, 0.5),
  //     recRect().fill(lightorange, 0.5),
  //
  //     recTxt().text("Identity", 0.5).to("Identity Preservation", 0.5),
  //     recTxt().fontSize(70, 0.5),
  //     recTxt().fill(gray, 0.5),
  //     recTxt().width(1000, 0.5),
  //     recInner().height(500, 0.5),
  //
  // )
  // yield* recInner().opacity(1, 0.5),
  yield* beginSlide('total');
  yield* all(
      recRect().fill(orange, 0.5),
      // recRect().width(500, 0.5),
      // recRect().height(500, 0.5),
      // recTxt().text("Identity\n Preservation", 0.5),
      // recTxt().fontSize(60, 0.5),
      // recTxt().fill("#FFFFFF", 0.5),
      recInner().height(0, 0.5),

      attrRect().width(500, 0.5),
      attrRect().height(500, 0.5),
      attrTxt().fontSize(60, 0.5),
      attrTxt().fill("#FFFFFF", 0.5),
      attrTxt().width(500, 0.5),
      attrTxt().opacity(1, 0.5),
      attrInner().height(0, 0.5),

      clsRect().width(500, 0.5),
      clsRect().height(500, 0.5),
      clsTxt().fontSize(60, 0.5),
      clsTxt().fill("#FFFFFF", 0.5),
      clsTxt().width(500, 0.5),
      clsTxt().opacity(1, 0.5),
      clsInner().height(0, 0.5),

      lossLayout().gap(50, 0.5),
      recInner().opacity(0, 0.5),

  )
  yield* lossLayout().opacity(0.1, 0.5);
  yield* totalLoss().opacity(1, 0.5);
  yield* beginSlide('End');
});
