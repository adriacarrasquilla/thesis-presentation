import {makeScene2D, Txt, Img, Layout, Rect} from '@motion-canvas/2d';
import {createRef, beginSlide, slideTransition, Direction, sequence, all} from '@motion-canvas/core';

import logoImg from '../../img/experiments_white.png';
import expImg1 from '../../img/fixed_n1.png';
import expImg2 from '../../img/fixed_n2.png';


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
  const floatingLayout = createRef<Layout>();
  const imgRef1 = createRef<Img>();
  const imgRef2 = createRef<Img>();
  const floatingLayout2 = createRef<Layout>();

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
            <Txt text="CR vs AP and IP over fixed n attributes" {... textStyle} fontSize={40}/>
            <Img ref={imgRef1} src={expImg1} width={1400} opacity={1}/>
            <Img ref={imgRef2} src={expImg2} width={1400} opacity={1}/>
          </Layout>
      </Rect>
    </Layout>
    <Rect
      ref={floatingLayout}
      alignItems={"center"}
      justifyContent={"center"}
      width={900}
      height={200}
      opacity={1}
      direction={'column'}
      fill={blue}
      gap={50}
      layout
      y={805}
      x={481}
    >
      <Txt text="Evolution of CR compared to AP and IP
    over different fixed n attributes and same 
    scaling factors"
        {...textStyle} fill={"#FFFFFF"}
        fontSize={40} fontWeight={800} textAlign={'left'}/>
    </Rect>
    <Layout
      ref={floatingLayout2}
      alignItems={"start"}
      justifyContent={"center"}
      width={900}
      height={200}
      opacity={0}
      direction={'column'}
      gap={50}
      layout
      y={80}
      x={-370}
    >
      <Txt text="We achieve better results at identity preservation,
          even for larger values of n"
        {...textStyle}
        fontSize={60} fontWeight={800} textAlign={'left'}/>
      <Txt text="When transforming less simultaneous attributes,
          CR results are very close"
        {...textStyle}
        fontSize={60} fontWeight={800} textAlign={'left'}/>
      <Txt text="The baseline performs better at attribute preservation"
        {...textStyle}
        fontSize={60} fontWeight={800} textAlign={'left'}/>
    </Layout>
  </>
);

  yield* slideTransition(Direction.Bottom);
  yield* leftLayout().opacity(1, 1);
  yield* floatingLayout().position.y(405, 1);
  yield* beginSlide('Explain IP');
  yield* all(
    floatingLayout().position.y(805, 1),
    imgRef1().width(1700, 1),
    imgRef2().width(600, 1),
    imgRef2().opacity(0.2, 1)
  )
  yield* beginSlide('Explain AP');
  yield* all(
    imgRef2().width(1700, 1),
    imgRef2().opacity(1, 1),
    imgRef1().width(600, 1),
    imgRef1().opacity(0.2, 1)
  )
  
  yield* beginSlide('Conclus');
  yield* sequence(0.1,
    imgRef2().width(1500, 1),
    imgRef1().width(1500, 1),
    imgRef1().opacity(1, 1),
    leftLayout().opacity(0.2, 1),
    floatingLayout2().opacity(1,1),
  )
  yield* beginSlide('End');
});
