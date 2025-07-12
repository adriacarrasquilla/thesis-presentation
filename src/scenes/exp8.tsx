import {makeScene2D, Txt, Img, Layout, Rect, Latex} from '@motion-canvas/2d';
import {all, createRef, beginSlide, slideTransition, Direction, sequence, createSignal, range, makeRef, loop, chain, ThreadGenerator, Center} from '@motion-canvas/core';

import logoImg from '../../img/experiments_white.png';
import overallImg from '../../img/approachesComparison.png';
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
            text={"Comparison to other approaches"}
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
        direction={"column"}
        gap={50}
        layout
      >
          <Layout
            ref={rightLayout}
            alignItems={"center"}
            justifyContent={"center"}
            width={900}
            opacity={0}
            direction={'column'}
            gap={50}
          >
            <Txt text="We compared LMAT with InterfaceGAN, TediGAN,
                       and StyleCLIP in terms of IPS, APS and, ACR."
              {...textStyle}
              fontSize={60} fontWeight={400} textAlign={'center'}/>
          </Layout>
          <Layout
            ref={leftLayout}
            layout
            direction={'column'}
            gap={20}
            alignItems={"center"}
            justifyContent={"center"}
            opacity={0}
          >
            <Img ref={overallRef} src={overallImg} width={0}/>
          </Layout>
      </Rect>
    </Layout>
  </>
);

  yield* slideTransition(Direction.Bottom);
  yield* rightLayout().opacity(1, 0.5);
  yield* all(
    rightLayout().width(600, 0.5),
    overallRef().width(1300,0.5)
  )
  yield* leftLayout().opacity(1, 0.5);
  yield* beginSlide('CR');
});
