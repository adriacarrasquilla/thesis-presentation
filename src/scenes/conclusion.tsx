import {makeScene2D, Txt, Img, Layout, Rect, Latex} from '@motion-canvas/2d';
import {all, createRef, beginSlide, slideTransition, Direction, sequence, createSignal, range, makeRef, loop, chain, ThreadGenerator} from '@motion-canvas/core';

import logoImg from '../../img/conclusions_white.png';


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
  const c5Rect = createRef<Rect>();
  const c5Text = createRef<Txt>();
  const finalText = createRef<Txt>();
  const finalText2 = createRef<Txt>();

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
            ref={proposalText}
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
          <Rect ref={leftRect} fill={purple.concat("44")} width={1820} height={830} 
            layout direction={"column"} alignItems={"center"}
            justifyContent={"center"} gap={30} smoothCorners={true}
            radius={20} opacity={0}
          >

            <Rect {...purpleStyle} ref={c1Rect}>
              <Txt ref={c1Text}
                text="We successfully proposed and implemented an architecture capable of learning and 
                transforming simultaneously 20 different attributes"
                {... textStyle} fontSize={35} textAlign={"center"}
              />
    
            </Rect>

            <Rect {...purpleStyle} ref={c2Rect}>
              <Txt ref={c2Text}
                text="We proposed three different types of evaluation: quantitative, 
                performance and subjective"
                {... textStyle} fontSize={35} textAlign={"center"}
              />
    
            </Rect>

            <Rect {...purpleStyle} ref={c3Rect}>
              <Txt 
                ref={c3Text}
                text="Our solution can be trained 8 times faster at the cost of requiring more GPU memory 
                when learning more attributes"
                {... textStyle} fontSize={35} textAlign={"center"}
              />
            </Rect>

            <Rect {...purpleStyle} ref={c4Rect}>
              <Txt 
                ref={c4Text}
                text="Our transformations are better at the identity preservation but slightly worse at
                Target Change Ratio and Attribute Preservation, specially when manipulating
                more simultaneous attributes
                "
                {... textStyle} fontSize={35} textAlign={"center"}
              />
            </Rect>
            <Rect {...purpleStyle} ref={c5Rect}>
              <Txt 
                ref={c5Text}
                text="The subjective study proved how our results were more appealing and realistic.
                We achieved more votes than the baseline"
                {... textStyle} fontSize={35} textAlign={"center"}
              />
            </Rect>
          </Rect>
        <Txt
            ref={finalText}
            text="We present a more efficient and elegant
            solution that produces more appealing and 
            realistic results, preserves better the identity
            and is 8 times faster than the baseline"

            {... textStyle}
            layout={false}
            textAlign={'center'}
            fontSize={70}
            opacity={0}
            y={-80}
        />
      </Rect>
    </Layout>
    <Txt
        ref={finalText2}
        text="We are also currently working towards publication of our work"
        y={300}
        {... textStyle}
        layout={false}
        textAlign={'center'}
        fontSize={55}
        opacity={0}
        fontWeight={400}
    />
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
    c1Text().fontSize(41, 1),
    c2Rect().opacity(0.1, 1),
    c3Rect().opacity(0.1, 1),
    c4Rect().opacity(0.1, 1),
    c5Rect().opacity(0.1, 1),
    c2Text().fontSize(30, 1),
    c3Text().fontSize(30, 1),
    c4Text().fontSize(30, 1),
    c5Text().fontSize(30, 1),
  )

  yield* beginSlide('c2');
  yield* all(
    c2Text().fontSize(41, 1),
    c2Rect().opacity(1, 1),
    c1Rect().opacity(0.1, 1),
    c1Text().fontSize(30, 1),
  )

  yield* beginSlide('c3');
  yield* all(
    c3Text().fontSize(40, 1),
    c3Rect().opacity(1, 1),
    c2Rect().opacity(0.1, 1),
    c2Text().fontSize(30, 1),
  )

  yield* beginSlide('c4');
  yield* all(
    c4Text().fontSize(41, 1),
    c4Rect().opacity(1, 1),
    c3Rect().opacity(0.1, 1),
    c3Text().fontSize(30, 1),
  )
  yield* beginSlide('c5');
  yield* all(
    c5Text().fontSize(41, 1),
    c5Rect().opacity(1, 1),
    c4Rect().opacity(0.1, 1),
    c4Text().fontSize(30, 1),
  )
  yield* beginSlide('final');
  yield* all(
    c5Rect().opacity(0.1, 1),
    c5Text().fontSize(30, 1),
    finalText().opacity(1, 1),
    finalText2().opacity(1, 1)
  )

  yield* beginSlide('end');
});
