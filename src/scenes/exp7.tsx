import {makeScene2D, Txt, Img, Layout, Rect} from '@motion-canvas/2d';
import {createRef, beginSlide, slideTransition, Direction, sequence, all, waitFor} from '@motion-canvas/core';

import logoImg from '../../img/experiments_white.png';
import org from '../../img/subj_org.jpeg';
import single from '../../img/subj_single.jpeg';
import multi from '../../img/subj_multi.jpeg';
import pie from '../../img/overall_pie.png';
import win from '../../img/winners.png';
import realism from '../../img/realism.png';


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
            
  const descLayout = createRef<Layout>();
  const promptLayout = createRef<Layout>();
  const resultsLayout = createRef<Layout>();
  const realismLayout = createRef<Layout>();

  const orgRef = createRef<Img>();
  const singleRef = createRef<Img>();
  const multiRef = createRef<Img>();

  const optA = createRef<Txt>();
  const optB = createRef<Txt>();
  const optBoth = createRef<Txt>();

  const pieRef = createRef<Img>();
  const winRef = createRef<Img>();
  const pieText = createRef<Txt>();
  const winText = createRef<Txt>();

  const sumText = createRef<Txt>();

  const realismRef = createRef<Img>();

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
        direction={"column"}
        gap={0}
        layout
      >
          <Layout
            ref={descLayout}
            layout
            direction={'column'}
            gap={50}
            alignItems={"center"}
            justifyContent={"center"}
            opacity={0}
          >
            <Txt text="Selected 20 samples from the test set" {... textStyle} fontSize={70} fontWeight={400}/>
            <Txt text="Modified different n random attributes" {... textStyle} fontSize={70}fontWeight={400}/>
            <Txt text="Computed the results of our and 
              the baseline approaches" {... textStyle} fontSize={70} textAlign={"center"}fontWeight={400}/>
          </Layout>
          <Layout
            ref={promptLayout}
            layout
            direction={'row'}
            gap={300}
            alignItems={"center"}
            justifyContent={"center"}
            opacity={0}
            height={0}
          >
            <Img ref={orgRef} size={400} src={org}>
                <Txt text="Attributes modified:
                Bald+, Blond+, Beard+,
                Big Nose-, Eyeglasses-
                "
                y={300} layout={false} {...textStyle} textAlign={"center"} fontWeight={300} fontSize={40} />
                <Txt text="Original"
                y={-250} layout={false} {...textStyle} textAlign={"center"} fontWeight={400} fontSize={40} />
            </Img>
            <Layout direction={"column"} gap={100}>
              <Img ref={singleRef} size={300} src={single}>
                <Txt ref={optA} text={""} x={350} layout={false} {...textStyle} />
              </Img>
              <Img ref={multiRef} size={300} src={multi}>
                <Txt ref={optB} text={""} x={350} layout={false} {...textStyle} />
              </Img>
              <Txt ref={optBoth} text={""} layout={false} {...textStyle} x={350}/>
            </Layout>
            <Rect size={100} />
          </Layout>
          <Layout
            ref={resultsLayout}
            layout
            direction={'row'}
            gap={80}
            alignItems={"center"}
            justifyContent={"center"}
            opacity={0}
            height={0}
          >
            <Img ref={pieRef} src={pie} size={600}/>
            <Txt ref={pieText} layout={false} textAlign={'center'}
              {...textStyle} 
              text="
              Overall, our model collects
              most of the votes with a total
              of 43% of all votes accross 
              questions and entries"
              x={440}
              fontSize={0}
            />
            <Img ref={winRef} src={win} width={800}/>
            <Txt ref={winText} layout={false} textAlign={'center'}
              {...textStyle} 
              text="
              Our model collects
              more votes than the
              baseline in individual
              questions
              "
              x={-540}
              fontSize={0}
            />
          </Layout>
          <Layout
            ref={realismLayout}
            layout
            direction={'column'}
            gap={30}
            alignItems={"center"}
            justifyContent={"center"}
            opacity={0}
            height={0}
            paddingTop={70}
          >
            <Txt text="(Bigger is 
              better)"
              {...textStyle}
              textAlign={"center"}
              fontWeight={300}
              layout={false}
              fontSize={30}
              y={-360}
              x={295}
            />
            <Txt text="(Smaller is 
              better)"
              {...textStyle}
              textAlign={"center"}
              fontWeight={300}
              layout={false}
              fontSize={30}
              y={-360}
              x={585}
            />
            <Img ref={realismRef} src={realism} width={1400}
            />
            <Txt text="We compute objective metrics to assess and compare
              the quality of the decoded images"
              {...textStyle}
              fontSize={50}
              textAlign={"center"}
              fontWeight={400}
            />
            <Txt text="These metrics consider factors such as structural similarity,
              perceptual quality, and human perception"
              {...textStyle}
              fontSize={50}
              textAlign={"center"}
              fontWeight={400}
            />
        </Layout>
        <Txt text="In general terms, our model achieves more
          realistic and appealing decoded results from
          both objective and subjective points of view"
          ref={sumText}
          {...textStyle}
          fontSize={75}
          textAlign={"center"}
          fontWeight={800}
          layout={false}
          opacity={0}
        />
      </Rect>
    </Layout>
  </>
);

  yield* slideTransition(Direction.Right);
  yield* titleText().text("Subjective Study", 1);
  yield* descLayout().opacity(1, 1);
  yield* beginSlide('Example Start');
  yield* all(
    descLayout().height(0, 1),
    descLayout().opacity(0, 1),
    promptLayout().opacity(1, 1),
    promptLayout().height(600, 1),
  )
  yield* beginSlide('Example Choices');
  yield* all(
    singleRef().size(350, 1),
    multiRef().opacity(0.3, 1),
    multiRef().size(200, 1),
    optA().text("Option A", 1),
  )
  yield* waitFor(1);
  yield* all(
    optA().text("", 1),
    optB().text("Option B", 1),
    multiRef().size(350, 1),
    multiRef().opacity(1, 1),
    singleRef().opacity(0.3, 1),
    singleRef().size(200, 1),
  )
  yield* waitFor(1);
  yield* all(
    optA().text("", 1),
    optB().text("", 1),
    singleRef().opacity(0.3, 1),
    multiRef().opacity(0.3, 1),
    multiRef().size(200, 1),
  )
  yield* all(
    optBoth().text("Both", 1),
    singleRef().opacity(1, 1),
    singleRef().size(350, 1),
    multiRef().size(350, 1),
    multiRef().opacity(1, 1),
  )
  yield* beginSlide('Results');
  yield* all(
    promptLayout().height(0, 1),
    promptLayout().opacity(0, 1),
    resultsLayout().opacity(1, 1),
    resultsLayout().height(600, 1),
  )
  yield* beginSlide('Pie');
  yield* all(
    pieRef().size(800, 1),
    winRef().width(600, 1),
    winRef().opacity(0.1, 1),
    resultsLayout().gap(250, 1),
    pieText().opacity(1, 1),
    pieText().fontSize(55, 1),
  )

  yield* beginSlide('Winners');
  yield* all(
    pieRef().size(300, 1),
    winRef().width(1000, 1),
    winRef().opacity(1, 1),
    pieRef().opacity(0.1, 1),
    resultsLayout().gap(400, 1),
    pieText().opacity(0, 1),
    pieText().fontSize(0, 1),
    winText().opacity(1, 1),
    winText().fontSize(55, 1),
  )
  yield* beginSlide('Realism');
  yield* all(
    pieRef().size(600, 1),
    winRef().width(800, 1),
    resultsLayout().gap(100, 1),
    winText().opacity(0, 1),
    winText().fontSize(0, 1),
    resultsLayout().opacity(0, 1),
    resultsLayout().height(0, 1),
    realismLayout().opacity(1, 1),
    realismLayout().height(800, 1),
  )
  yield* beginSlide('Summary');
  yield* all(
    realismLayout().opacity(0.1, 1),
    sumText().opacity(1,1)
  )

  yield* beginSlide('End');
});
