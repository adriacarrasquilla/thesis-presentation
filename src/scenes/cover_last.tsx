import {makeScene2D, Txt, Img, Layout} from '@motion-canvas/2d';
import {all, createRef, beginSlide, waitUntil, waitFor, Direction, slideTransition} from '@motion-canvas/core';

import upcLogo from '../../img/upc.png';
import urvLogo from '../../img/urv.png';
import ubLogo from '../../img/ub.png';


export default makeScene2D(function* (view) {
  const title = createRef<Txt>();
  const author = createRef<Txt>();
  const directors = createRef<Txt>();
  const master = createRef<Txt>();
  const logos = createRef<Layout>();

  const textStyle = {
    fontWeight: 600,
    fontSize: 80,
    offsetY: 0,
    padding: 20,
    cache: true,
    fontFamily: 'Open Sans',
    textAlign: 'center'
  };

  view.add(
    <>
      <Txt
        ref={title}
        text={"Latent Multi-Attribute\n Transformer for Face Editing in Images"}
        fill={'#242424'}
        y={800}
        {...textStyle}
        textAlign={'center'}
      />
      <Txt
        ref={author}
        text={"Adrià Carrasquilla Fortes"}
        fill={'#242424'}
        y={800}
        {...textStyle}
        fontWeight={400}
        fontSize={50}
        textAlign={'center'}
      />
      <Txt
        ref={directors}
        text={"Directed by: Dr. Maya Aghaei and Dr. Petia Radeva"}
        fill={'#242424'}
        y={800}
        {...textStyle}
        fontWeight={300}
        fontSize={40}
        textAlign={'center'}
      />
      <Txt
        ref={master}
        text={"MAI Master Thesis"}
        fill={'#242424'}
        y={800}
        {...textStyle}
        fontWeight={700}
        fontSize={30}
        textAlign={'center'}
      />
      <Layout 
        ref={logos} 
        y={800}
      >
        <Img
          src={upcLogo}
          width={100}
        />
        <Img
          src={urvLogo}
          width={120}
          x={-180}
        />
        <Img
          src={ubLogo}
          width={100}
          x={180}
        />
      </Layout>
    </>
  );

  yield* all(
    title().position.y(-150, 0),
    author().position.y(-10, 0),
  );
  yield* all(
    directors().position.y(150, 0),
    master().position.y(200, 0),
    logos().position.y(350, 0)
  )
  yield* slideTransition(Direction.Left);
  yield* beginSlide('END')
});
