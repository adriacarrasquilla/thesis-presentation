import {makeScene2D, Txt, Img, Layout, Rect, Latex} from '@motion-canvas/2d';
import {all, createRef, beginSlide, slideTransition, Direction, sequence, createSignal, range, makeRef, loop, chain, ThreadGenerator, Center} from '@motion-canvas/core';

import logoImg from '../../img/experiments_white.png';
import overallImg from '../../img/overall_change_ratio.png';
import apImg from '../../img/ap.png';


export default makeScene2D(function* (view) {
  const titleBox = createRef<Rect>();
  const bodyBox = createRef<Rect>();
  const titleText = createRef<Txt>();
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
  const overallRef = createRef<Img>();

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
            ref={titleText}
            text={"Quantitative Evaluation"}
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
            opacity={0}
          >
            <Img ref={overallRef} src={overallImg} width={1000}/>
          </Layout>
          <Layout
            ref={rightLayout}
            alignItems={"center"}
            justifyContent={"center"}
            width={0}
            opacity={0}
            direction={'column'}
            gap={50}
          >
            <Txt text="Experiment: Change Ratio over different attribute
              coefficient scaling/intensity factors"
              {...textStyle}
              fontSize={40} fontWeight={400} textAlign={'center'}/>
            <Txt text="Using 1k images from FFHQ, transforming in 
              each one of them n different random attributes"
              {...textStyle}
              fontSize={40} fontWeight={400} textAlign={'center'}/>
            <Txt text="We achieve better results for lower scaling
              factors, but worse results on bigger factors
              (up to 5-10% behind the baseline)"
              {...textStyle}
              fontSize={40} fontWeight={800} textAlign={'center'}/>
          </Layout>
      </Rect>
    </Layout>
  </>
);

  yield* slideTransition(Direction.Bottom);
  yield* leftLayout().opacity(1, 1);
  yield* all(
    rightLayout().width(900, 1),
    overallRef().width(800, 1)
  )
  yield* rightLayout().opacity(1, 1);
  yield* beginSlide('CR');
});
