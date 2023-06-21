import {makeScene2D, Txt, Img, Layout, Rect, Line} from '@motion-canvas/2d';
import {all, createRef, beginSlide, slideTransition, Direction, sequence, createSignal} from '@motion-canvas/core';

import goal_logo from '../../img/goal_white.png';
import network from '../../img/network.png';
import quality from '../../img/quality.png';
import speed from '../../img/speed.png';


export default makeScene2D(function* (view) {
  const titleBox = createRef<Rect>();
  const bodyBox = createRef<Rect>();
  const padTop = createSignal(50);
  const goalText = createRef<Txt>();
  const mainGoal = createRef<Rect>();
  const secondGoals = createRef<Rect>();

  const logo = createRef<Img>();
  const networkImg = createRef<Img>();
  const qualityImg = createRef<Img>();
  const speedImg = createRef<Img>();

  const goalsHeight = createSignal(700);
  const secondWidth = createSignal(0);

  const mainGoalText = createRef<Txt>();
  const qualityRect = createRef<Rect>();
  const speedRect = createRef<Rect>();
  const qualityText = createRef<Txt>();
  const speedText = createRef<Txt>();
  

  const textStyle = {
    fontWeight: 600,
    fontSize: 200,
    offsetY: 0,
    padding: 0,
    cache: true,
    fontFamily: 'Open Sans',
    paddingTop:padTop
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
          fill="#4D908E"
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
            src={goal_logo}
            size={260}
            opacity={1}
          />
          <Rect width={10} />
          <Txt
            ref={goalText}
            text={"GOALS"}
            fill={"#ffffff"}
            {...textStyle}
          />
        </Rect>
      <Rect 
        fill="#FAF5F0"
        ref={bodyBox}
        height={0}
        alignItems={"center"}
        justifyContent={"center"}
        layout
        direction={"row"}
        gap={20}
      >
        <Rect
          ref={mainGoal}
          fill={"#A4C2BF"}
          smoothCorners={true}
          radius={20}
          height={goalsHeight}
          width={0}
          opacity={1}
          justifyContent={"center"}
          alignItems={"center"}
        >
            <Txt
              ref={mainGoalText}
              text="Propose a unified architecture
              capable of simultaneous 
              multi-attribute manipulation
              "
              {...textStyle}
              textAlign={"center"}
              fontSize={80}
              fontWeight={400}
              layout={false}
              opacity={0}
              fill="#282828"
            />
            <Img
              ref={networkImg}
              src={network}
              width={400}
            />
        </Rect>
        <Rect
          ref={secondGoals}
          radius={20}
          height={goalsHeight}
          width={secondWidth}
          layout
          gap={20}
          direction={"column"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Rect
            ref={qualityRect}
            fill={"#A4C2BF"}
            smoothCorners={true}
            radius={20}
            height={goalsHeight}
            width={secondWidth}
            opacity={1}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <Img
              ref={qualityImg}
              src={quality}
              width={250}
            />
            <Txt
              ref={qualityText}
              text="Mantain or improve, if possible,
                the baseline results quality
              "
              {...textStyle}
              textAlign={"center"}
              fontSize={80}
              fontWeight={400}
              layout={false}
              opacity={0}
              fill="#282828"
            />
          </Rect>
          <Rect
            ref={speedRect}
            fill={"#A4C2BF"}
            smoothCorners={true}
            radius={20}
            height={goalsHeight}
            width={secondWidth}
            opacity={1}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <Img
              ref={speedImg}
              src={speed}
              width={200}
            />
            <Txt
              ref={speedText}
              text="Achieve a more efficient and
                faster solution"
              {...textStyle}
              textAlign={"center"}
              fontSize={80}
              fontWeight={400}
              layout={false}
              opacity={0}
              fill="#282828"
            />
          </Rect>
        </Rect>
      </Rect>
    </Layout>
  </>
);

  yield* slideTransition(Direction.Right);
  yield* beginSlide('Goals Init');
  yield* all(
    titleBox().height(150, 1),
    goalText().fontSize(80, 1),
    logo().size(76, 1),
    padTop(10, 1),
    bodyBox().height(910, 1),
  )
  yield* all(
    secondWidth(600, 1),
    mainGoal().width(600, 1),
  )
  yield* beginSlide('First Goal');
  yield* all(
    secondWidth(0, 1),
    mainGoal().width(1500, 1),
    networkImg().width(650, 1),
    networkImg().opacity(0.05, 1),
  )
  yield* mainGoalText().opacity(1,1);
  yield* beginSlide('Second Goal');
  yield* all(
    mainGoalText().opacity(0,0.5),
    secondWidth(600, 1),
    mainGoal().width(600, 1),
    networkImg().width(400, 1),
    networkImg().opacity(1, 1),
  )
  yield* all(
    mainGoal().width(0, 1),
    qualityRect().width(1500, 1),
    speedRect().height(0, 1),
    speedImg().width(0,1),
    secondWidth(1500,1),
    qualityImg().width(600, 1),
    qualityImg().opacity(0.05, 1)
  )
  yield* qualityText().opacity(1,1);
  yield* beginSlide('Third Goal');
  yield* all(
    qualityText().opacity(0,0.5),
    qualityImg().opacity(1, 1),
    qualityImg().width(250, 1),
    qualityRect().height(900,1),
    speedRect().height(900, 1),
    speedImg().width(200,1),
  )
  yield* all(
    qualityRect().height(0, 1),
    qualityImg().width(0,1),
    speedImg().width(600, 1),
    speedImg().opacity(0.05, 1)
  )
  yield* speedText().opacity(1,1);
  yield* beginSlide('Close Slide');
  yield* all(
    qualityRect().height(900, 1),
    qualityImg().width(250,1),
    speedImg().width(200, 1),
    speedImg().opacity(1, 1),
    speedText().opacity(0,0.5),
    mainGoal().width(600, 1),
    secondWidth(600, 1),
    qualityRect().width(600, 1),
  )
  yield* beginSlide('Close Slide');
});
