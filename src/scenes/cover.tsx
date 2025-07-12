import {makeScene2D, Txt, Img, Layout} from '@motion-canvas/2d';
import {all, createRef, beginSlide, waitUntil, waitFor} from '@motion-canvas/core';

import upcLogo from '../../img/upc.png';
import urvLogo from '../../img/urv.png';
import ubLogo from '../../img/ub.png';
import isLogo from '../../img/IntelliSysLogo.png';


export default makeScene2D(function* (view) {
  const title = createRef<Txt>();
  const authors = createRef<Txt>();
  // const conference = createRef<Txt>();
  const logos = createRef<Layout>();

  const textStyle = {
    fontWeight: 600,
    fontSize: 80,
    offsetY: 0,
    padding: 20,
    cache: true,
    fontFamily: 'Open Sans',
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
        ref={authors}
        text={"Authors: Adrià Carrasquilla, Dr. Petia Radeva, María Ruiz,  Dr. Maya Aghaei "}
        fill={'#242424'}
        y={800}
        {...textStyle}
        fontWeight={300}
        fontSize={40}
        textAlign={'center'}
      />
      <Layout 
        ref={logos} 
        y={800}
      >
        <Img
          src={ubLogo}
          width={150}
          x={-180}
        />
        <Img
          src={isLogo}
          width={300}
          x={180}
        />
      </Layout>
    </>
  );

  yield* beginSlide('Start')
  yield* all(
    title().position.y(-100, 1.1),
    authors().position.y(50, 1.3),
    logos().position.y(200, 1.6)
  )
  yield* beginSlide('EndCover')
});
