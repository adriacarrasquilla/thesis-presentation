import {makeScene2D, Txt, Img, Layout, Rect, Latex} from '@motion-canvas/2d';
import {all, createRef, beginSlide, slideTransition, Direction, sequence, createSignal, range, makeRef, loop, chain, ThreadGenerator} from '@motion-canvas/core';

import logoImg from '../../img/experiments_white.png';
import ffhqImg from '../../img/ffhq.png';


export default makeScene2D(function* (view) {
  const titleBox = createRef<Rect>();
  const bodyBox = createRef<Rect>();
  const proposalText = createRef<Txt>();
  const logo = createRef<Img>();

  const leftRect = createRef<Rect>();
  const rightRect = createRef<Rect>();
  const quantRect = createRef<Rect>();
  const ffhqInfo = createRef<Layout>();

  const quantText = createRef<Txt>();

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
            
  const BlueTxt = props => <Rect fill={blue.concat("88")} padding={20} smoothCorners={true} radius={20} {...props}/>;

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
            text={"EXPERIMENTS"}
            {...textStyle}
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
          <Rect ref={leftRect} fill={blue.concat("44")} width={1760} height={800} 
            layout direction={"column"} alignItems={"center"}
            justifyContent={"center"} gap={30} smoothCorners={true}
            radius={20} opacity={1}
          >

            <BlueTxt ref={quantRect}>
              <Txt ref={quantText} text="Quantitative evaluation" {... textStyle} fontSize={60}/>
            </BlueTxt>

            <BlueTxt>
              <Txt text="Ablation study" {... textStyle}/>
            </BlueTxt>

            <BlueTxt>
            <Txt text="Subjective study" {... textStyle}/>
            </BlueTxt>
          </Rect>

          <Rect ref={rightRect} fill={blue.concat("44")} width={0} height={800} 
            alignItems={"center"} justifyContent={"center"} smoothCorners={true}
            radius={20}
          >
            <Layout ref={ffhqInfo} opacity={0}
              layout direction={"column"} alignItems={"center"}
              justifyContent={"center"} gap={30}
            >
              <Txt text="Using FFHQ dataset" {... textStyle}/>
              <Txt text="Subset of 1k different facial
                images unlabeled"
                {... textStyle} fontSize={40} fontWeight={400} textAlign={"center"}/>
              <Img src={ffhqImg} width={600}/>
            </Layout>
          </Rect>

      </Rect>
    </Layout>
  </>
);

  yield* slideTransition(Direction.Right);
  yield* beginSlide('Exp Init');
  yield* all(
    titleBox().height(150, 1),
    proposalText().fontSize(80, 1),
    logo().size(76, 1),
    bodyBox().height(910, 1),
  )

  yield* beginSlide('dataset');

  yield* all(
    leftRect().width(880, 1),
    rightRect().width(880, 1),
    bodyBox().gap(30,1)
  )
  yield* ffhqInfo().opacity(1, 1);
  yield* beginSlide('intro quant');
  yield* all(
    quantText().fontSize(65, 1),
    quantRect().fill(blue, 1)

  )
  yield* beginSlide('end');
});
