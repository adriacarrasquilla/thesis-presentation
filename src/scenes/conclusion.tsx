import {makeScene2D, Txt, Img, Layout, Rect, Latex} from '@motion-canvas/2d';
import {all, createRef, beginSlide, slideTransition, Direction, sequence, createSignal, range, makeRef, loop, chain, ThreadGenerator} from '@motion-canvas/core';

import logoImg from '../../img/conclusions_white.png';
import ffhqImg from '../../img/ffhq.png';


export default makeScene2D(function* (view) {
  const titleBox = createRef<Rect>();
  const bodyBox = createRef<Rect>();
  const proposalText = createRef<Txt>();
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
  const finalText = createRef<Txt>();

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
            
  const PurpleTxt = props => <Rect fill={purple.concat("88")} padding={20} smoothCorners={true} radius={20} {...props}/>;

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
            ref={proposalText}
            text={"CONCLUSION"}
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
          <Rect ref={leftRect} fill={purple.concat("44")} width={1760} height={800} 
            layout direction={"column"} alignItems={"center"}
            justifyContent={"center"} gap={30} smoothCorners={true}
            radius={20} opacity={0}
          >

            <PurpleTxt ref={c1Rect}>
              <Txt ref={c1Text}
                text="We successfully proposed and implemented an architecture capable
                of learning and transforming simultaneously 20 different attributes"
                {... textStyle} fontSize={40} textAlign={"center"}
              />
    
            </PurpleTxt>

            <PurpleTxt ref={c2Rect}>
              <Txt 
                ref={c2Text}
                text="Our solution can be trained 8 times faster at the cost of
                requiring more GPU memory when learning more attributes"
                {... textStyle} fontSize={40} textAlign={"center"}
              />
            </PurpleTxt>

            <PurpleTxt ref={c3Rect}>
              <Txt 
                ref={c3Text}
                text="Our transformations preserve better the subject
                identity but scoring slightly lower at Target 
                Change Ratio and Attribute Preservation, specially
                when manipulating more simultaneous attributes
                "
                {... textStyle} fontSize={40} textAlign={"center"}
              />
            </PurpleTxt>
            <PurpleTxt ref={c4Rect}>
              <Txt 
                ref={c4Text}
                text="The subjective study proved how our results were more appealing
                and realistic. We achieved more votes than the baseline"
                {... textStyle} fontSize={40} textAlign={"center"}
              />
            </PurpleTxt>
          </Rect>
        <Txt
            ref={finalText}
            text="We present a more efficient and elegant
            solution that closely matches the
            performance of the baseline results"
            {... textStyle}
            layout={false}
            textAlign={'center'}
            fontSize={80}
            opacity={0}
        />
      </Rect>
    </Layout>
  </>
);

  yield* slideTransition(Direction.Right);
  yield* beginSlide('Conclus Init');
  yield* all(
    titleBox().height(150, 1),
    proposalText().fontSize(80, 1),
    logo().size(76, 1),
    bodyBox().height(910, 1),
  )
  yield* leftRect().opacity(1,1);

  yield* beginSlide('c1');
  yield* all(
    c1Text().fontSize(50, 1),
    c2Rect().opacity(0.1, 1),
    c3Rect().opacity(0.1, 1),
    c4Rect().opacity(0.1, 1),
    c2Text().fontSize(30, 1),
    c3Text().fontSize(30, 1),
    c4Text().fontSize(30, 1),
  )

  yield* beginSlide('c2');
  yield* all(
    c2Text().fontSize(50, 1),
    c2Rect().opacity(1, 1),
    c1Rect().opacity(0.1, 1),
    c1Text().fontSize(30, 1),
  )

  yield* beginSlide('c3');
  yield* all(
    c3Text().fontSize(50, 1),
    c3Rect().opacity(1, 1),
    c2Rect().opacity(0.1, 1),
    c2Text().fontSize(30, 1),
  )

  yield* beginSlide('c4');
  yield* all(
    c4Text().fontSize(50, 1),
    c4Rect().opacity(1, 1),
    c3Rect().opacity(0.1, 1),
    c3Text().fontSize(30, 1),
  )
  yield* beginSlide('final');
  yield* all(
    c4Rect().opacity(0.1, 1),
    c4Text().fontSize(30, 1),
    finalText().opacity(1, 1)
  )

  yield* beginSlide('end');
});
