import {makeScene2D, Txt, Img, Layout, Rect, Latex} from '@motion-canvas/2d';
import {all, createRef, beginSlide, slideTransition, Direction, sequence, createSignal, range, makeRef, loop, chain, ThreadGenerator} from '@motion-canvas/core';

import logoImg from '../../img/experiments_white.png';
import crImg from '../../img/cr.png';
import apImg from '../../img/ap.png';


export default makeScene2D(function* (view) {
  const titleBox = createRef<Rect>();
  const bodyBox = createRef<Rect>();
  const proposalText = createRef<Txt>();
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
  const rightLayout = createRef<Layout>();
  const crTxt = createRef<Txt>();
  const apTxt = createRef<Txt>();
  const ipTxt = createRef<Txt>();
  const crLayout = createRef<Layout>();
  const apLayout = createRef<Layout>();
  const ipLayout = createRef<Layout>();

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
            ref={proposalText}
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
            gap={20}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <Txt text="Metrics used" {...textStyle} fontSize={70} padding={20}/>
            <Txt ref={crTxt} text="Attribute Change Ratio" {...textStyle} fontSize={55} fontWeight={400}/>
            <Txt ref={apTxt} text="Attribute Preservation Score" {...textStyle} fontSize={55} fontWeight={400}/>
            <Txt ref={ipTxt} text="Identity Preservation Score" {...textStyle} fontSize={55} fontWeight={400}/>
          </Layout>
          <Layout
            ref={rightLayout}
            alignItems={"center"}
            justifyContent={"center"}
            width={0}
          >
            <Layout
              ref={crLayout}
              alignItems={"center"}
              justifyContent={"center"}
              direction={'column'}
              gap={40}
              paddingLeft={100}
              paddingTop={30}
              opacity={0}
              layout={false}
              x={20}
            >
              <Txt 
                text="Computes the percentage of attributes that
                achieve more than 50% of its target value"
                textAlign={"center"}
                {...textStyle}
                fontSize={40}
                fontWeight={300}
                paddingRight={100}
                y={-250}
              />
              <Img 
                src={crImg}
                width={600}
                y={100}
              />
            </Layout>
            <Layout
              ref={apLayout}
              alignItems={"center"}
              justifyContent={"center"}
              direction={'column'}
              gap={40}
              paddingLeft={100}
              paddingTop={30}
              opacity={0}
              layout={false}
              x={20}
            >
              <Txt 
                text="Computes the percentage of non-target attributes
                that change its classification probability more than 
                25% before and after the transformation"
                textAlign={"center"}
                {...textStyle}
                fontSize={40}
                fontWeight={300}
                paddingRight={100}
                y={-270}
              />
              <Img 
                src={apImg}
                width={600}
                y={100}
              />
            </Layout>
            <Layout
              ref={ipLayout}
              alignItems={"center"}
              justifyContent={"center"}
              direction={'column'}
              gap={40}
              paddingLeft={100}
              paddingTop={30}
              opacity={0}
              layout={false}
              x={20}
            >
              <Txt 
                text="Computes the MSE score between the original
                and the transformed latent representations"
                textAlign={"center"}
                {...textStyle}
                fontSize={40}
                fontWeight={300}
                paddingRight={100}
                y={-60}
              />
              <Latex
                tex="{\mathcal{L}_{rec} = \mathbb{E}_{w}\left[||T(w)-w||_2\right]}"
                width={500}
                y={60}
              />
            </Layout>
          </Layout>
      </Rect>
    </Layout>
  </>
);

  yield* slideTransition(Direction.Right);
  yield* proposalText().text("Quantitative Evaluation",1)
  yield* beginSlide('CR');
  yield* rightLayout().width(900, 1);
  yield* all(
    // crTxt().fontWeight(700, 1),
    crTxt().fontSize(65, 1),
    crTxt().fill(blue, 1),
    crLayout().opacity(1, 1)
  );
  yield* beginSlide('AP');
  yield* sequence(0.5,
    all(
      crTxt().fontSize(55, 1),
      crTxt().fill("#383838", 1),
      crLayout().opacity(0, 1),
    ),
    all(
      apTxt().fontSize(65, 1),
      apTxt().fill(blue, 1),
      apLayout().opacity(1, 1)
    )
  )

  yield* beginSlide('IP');
  yield* sequence(0.5,
    all(
      apTxt().fontSize(55, 1),
      apTxt().fill("#383838", 1),
      apLayout().opacity(0, 1),
    ),
    all(
      ipTxt().fontSize(65, 1),
      ipTxt().fill(blue, 1),
      ipLayout().opacity(1, 1)
    )
  )
  yield* beginSlide('end');
});
