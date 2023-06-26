import {makeScene2D, Txt, Img, Layout, Rect, Latex} from '@motion-canvas/2d';
import {all, createRef, beginSlide, slideTransition, Direction, sequence, createSignal, range, makeRef, loop, chain, ThreadGenerator} from '@motion-canvas/core';


export default makeScene2D(function* (view) {
  const titleBox = createRef<Rect>();
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

  const mainColor = "#d88c9a"

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
          fill={mainColor}
          justifyContent={"center"}
          alignItems={"center"}
          gap={20}
          height={1010}
          y={-435}
          direction="row"
        >
          <Txt
            ref={proposalText}
            text={"DEMO"}
            {...textStyle}
            fontSize={250}
            fill={"#ffffff"}
          />
        </Rect>
    </Layout>
  </>
);

  yield* slideTransition(Direction.Right);
  yield* beginSlide('Demo');
});
