import {makeScene2D, Txt, Img, Layout, Rect} from '@motion-canvas/2d';
import {createRef, beginSlide, slideTransition, Direction, sequence, createSignal, all} from '@motion-canvas/core';

import logoImg from '../../img/experiments_white.png';
import cmpImg from '../../img/ablation_size.png';
import mulImg from '../../img/multi_ablation.png';


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
  const cmpBlock = createRef<Rect>();
  const mulBlock = createRef<Rect>();

  const cmpTitle = createRef<Txt>();
  const mulTitle = createRef<Txt>();

  const goalsHeight = createSignal(700);

  const cmpDescText = createRef<Txt>();
  const mulDescText = createRef<Txt>();

  const cmpImgRef = createRef<Img>();
  const mulImgRef = createRef<Img>();

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
        <Rect
          ref={cmpBlock}
          fill={blue}
          smoothCorners={true}
          radius={20}
          height={goalsHeight}
          width={0}
          opacity={1}
          justifyContent={"center"}
          alignItems={"center"}
        >
            <Txt
              ref={cmpTitle}
              text="Reduction and 
              Upscaling Block"
              width={0}
              {...textStyle}
              textAlign={"center"}
              fontSize={80}
              fontWeight={700}
              layout={false}
              fill="#ffffff"
            />
            <Txt
              ref={cmpDescText}
              text="Trained different models to learn 3 attributes
              using different compression rates. The resulting
              compressed vectors are of sizes 512, 1536, 3072.
              Quality is assessed using the overall change ratio.
              "
              {...textStyle}
              textAlign={"center"}
              fontSize={60}
              fontWeight={400}
              layout={false}
              opacity={0}
              fill="#282828"
              paddingTop={80} 
            />
            <Img
              ref={cmpImgRef}
              layout={false}
              src={cmpImg}
              width={0}
              opacity={0}
            />
        </Rect>
        <Rect
          ref={mulBlock}
          fill={blue}
          smoothCorners={true}
          radius={20}
          height={goalsHeight}
          width={0}
          opacity={1}
          justifyContent={"center"}
          alignItems={"center"}
        >
            <Txt
              ref={mulDescText}
              text="Tried different alternative approaches that
              did not involve multiplication in its process
              "
              {...textStyle}
              textAlign={"center"}
              fontSize={60}
              fontWeight={400}
              layout={false}
              opacity={0}
              fill="#282828"
              paddingTop={80} 
            />
            <Txt
              ref={mulTitle}
              text="Multiplication
              Block"
              width={0}
              {...textStyle}
              textAlign={"center"}
              fontSize={80}
              fontWeight={700}
              layout={false}
              fill="#ffffff"
            />
            <Img
              ref={mulImgRef}
              layout={false}
              src={mulImg}
              width={0}
              opacity={0}
            />
        </Rect>
      </Rect>
    </Layout>
  </>
);

  yield* slideTransition(Direction.Right);
  yield* titleText().text("Ablation Study", 1);
  yield* all(
    cmpBlock().width(800, 1),
    mulBlock().width(800, 1),
    cmpTitle().width(800, 1),
    mulTitle().width(800, 1),
  )
  yield* beginSlide('Cmp Block');
  yield* all(
    mulBlock().width(0, 1),
    mulTitle().width(0, 1),
    cmpTitle().text("Reduction and Upscaling Block", 1),
    cmpTitle().width(1500, 1),
    cmpTitle().fontSize(60, 1),
    cmpTitle().fill("#282828", 1),
    cmpTitle().y(-200, 1),
    cmpBlock().width(1500, 1),
    cmpBlock().fill(blue.concat("88"), 1),
  )
  yield* cmpDescText().opacity(1,1);
  yield* beginSlide('Cmp Image');
  yield* cmpDescText().opacity(0,1);
  yield* all(
    cmpImgRef().opacity(1,1),
    cmpImgRef().width(1000,1),
  );
  yield* all(
    cmpDescText().text("Compressing the transformed vector into\n 512 elements is the optimal rate.\n\n We cannot see a negative impact and using lower\n compression rates achieves slightly worse results.",1),
  )
  yield* beginSlide('Cmp conclusion');
  yield* all(
    cmpImgRef().opacity(0,1),
    cmpImgRef().width(0,1),
    cmpDescText().opacity(1,1),
    cmpTitle().y(-250, 1),
  );
  yield* beginSlide('mul block');
  yield* all(
    cmpDescText().opacity(0,0.5),
    cmpTitle().y(0, 1),
    cmpTitle().fill("#ffffff", 1),
    cmpTitle().text("Reduction and\n Upscaling Block", 1),
    cmpTitle().fontSize(80, 1),
    cmpBlock().fill(blue, 1),
    cmpBlock().width(800, 1),
    mulBlock().width(800, 1),
    mulTitle().width(800, 1),
  );
  yield* all(
    cmpBlock().width(0, 1),
    cmpTitle().width(0, 1),
    mulTitle().text("Multiplication Block", 1),
    mulTitle().width(1500, 1),
    mulTitle().fontSize(60, 1),
    mulTitle().fill("#282828", 1),
    mulTitle().y(-100, 1),
    mulBlock().width(1500, 1),
    mulBlock().fill(blue.concat("88"), 1),
  )
  yield* mulDescText().opacity(1,1);
  yield* beginSlide('Mul img');
  yield* mulDescText().opacity(0,0.5);
  yield* all(
    mulImgRef().opacity(1,1),
    mulImgRef().width(1400,1),
  );
  yield* all(
    mulDescText().text("It is not possible to control the intensity\n and direction of the transformation without\n a multiplication operation",1),
  )
  yield* beginSlide('Mul conclusion');
  yield* all(
    mulImgRef().opacity(0,1),
    mulImgRef().width(0,1),
    mulDescText().opacity(1,1),
    mulTitle().y(-150, 1),
  );
  
  yield* beginSlide('b4 end');
  yield* all(
    mulDescText().opacity(0,0.5),
    mulTitle().y(0, 1),
    mulTitle().fill("#ffffff", 1),
    mulTitle().text("Reduction and\n Upscaling Block", 1),
    mulTitle().fontSize(80, 1),
    mulBlock().fill(blue, 1),
    cmpBlock().width(800, 1),
    mulBlock().width(800, 1),
    cmpTitle().width(800, 1),
  );
  yield* beginSlide('End');
});
