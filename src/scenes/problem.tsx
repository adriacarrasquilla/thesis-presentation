import {makeScene2D, Txt, Img, Layout, Rect, Line} from '@motion-canvas/2d';
import {all, createRef, beginSlide, slideTransition, Direction, sequence, createSignal} from '@motion-canvas/core';

import problem_logo from '../../img/problem_white.png';

import woman from '../../img/woman.png';
import sad from '../../img/sad.png';
import blonde from '../../img/woman_blonde.png';
import nose from '../../img/nose.png';

import problem_org from '../../img/problem_original.png';
import problem_good from '../../img/problem_good.png';
import problem_bad from '../../img/problem_bad.png';

import org from '../../img/problem_org2.png';
import smile from '../../img/problem_smile2.png';
import goatee from '../../img/problem_goatee2.png';
import glasses from '../../img/problem_glasses2.png';

export default makeScene2D(function* (view) {
  const problem = createRef<Txt>();
  const logo = createRef<Img>();
  const singleTxt = createRef<Txt>();
  const woman_img = createRef<Img>();
  const sad_img = createRef<Img>();
  const nose_img = createRef<Img>();
  const blonde_img = createRef<Img>();

  const titleBox = createRef<Rect>();
  const bodyBox = createRef<Rect>();
  const padTop = createSignal(30);

  const leftLayout = createRef<Layout>();
  const attrButtons = createRef<Layout>();
  const goodCmp = createRef<Layout>();
  const sequential = createRef<Layout>();

  const smileBtn = createRef<Rect>();
  const blondBtn = createRef<Rect>();
  const noseBtn = createRef<Rect>();

  const org_img = createRef<Img>();
  const smile_img = createRef<Img>();
  const goatee_img = createRef<Img>();
  const glasses_img = createRef<Img>();

  const s_org_smile = createRef<Line>();
  const s_smile_goatee = createRef<Line>();
  const s_goatee_glass = createRef<Line>();
  const m_org_tr = createRef<Line>();
  const m_tr_out = createRef<Line>();
  const all_attrs_txt = createRef<Txt>();
  const sequential_text = createRef<Txt>();
  const simultaneous_text = createRef<Txt>();

  const red = "#F94144";
  const green = "#90BE6D";
  const gray = "#383838";

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
          fill="#f94144"
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
            src={problem_logo}
            size={260}
            opacity={1}
          />
          <Rect width={10} />
          <Txt
            ref={problem}
            text={"PROBLEM"}
            fill={"#ffffff"}
            {...textStyle}
          />
        </Rect>

        <Rect 
          fill="#FAF5F0"
          ref={bodyBox}
          height={0}
        />

      </Layout>
      <Rect
        ref={leftLayout}
        width={850}
        height={700}
        // fill={"#FAF5F0"}
        x={-450}
        y={900}
        layout
        direction={"column"}
        gap={30}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Txt
          text="Attribute Manipulation"
          {...textStyle}
          fontSize={60}
          y={-300}
          paddingTop={30}
        />
        <Txt
          text="Altering individual or multiple facial
            attributes, like age, hairstyle, mouth expression,
            and others, without losing the identity of
            the person in the original image"
          {...textStyle}
          fontSize={35}
          fontWeight={400}
          y={0}
          textAlign={'center'}
        />
        <Layout layout
          ref={attrButtons}
          direction={"column"}
          height={0}
          alignItems={"center"}
          justifyContent={"center"}
          gap={10}
          opacity={0}
        >
          <Rect
            x={-450}
            y={70}
            layout
            direction={"row"}
            gap={10}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <Rect
              ref={smileBtn}
              width={300}
              height={100}
              fill={gray}
              smoothCorners={true}
              radius={20}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Txt
                text="SMILE"
                {... textStyle}
                fontSize={40}
                fill="#FAF5F0"
              />
            </Rect>
            <Rect
              ref={noseBtn}
              width={300}
              height={100}
              fill={gray}
              smoothCorners={true}
              radius={20}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Txt
                text="NOSE"
                {... textStyle}
                fontSize={40}
                fill="#FAF5F0"
              />
            </Rect>
          </Rect>
          <Rect
            x={-450}
            y={70}
            layout
            direction={"row"}
            gap={10}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <Rect
              ref={blondBtn}
              width={300}
              height={100}
              fill={gray}
              smoothCorners={true}
              radius={20}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Txt
                text="HAIR"
                {... textStyle}
                fontSize={40}
                fill="#FAF5F0"
              />
            </Rect>
          </Rect>
        </Layout>
      </Rect>
      <Img
        ref={woman_img}
        src={woman}
        size={600}
        opacity={0}
        x={450}
        y={20}
      >
      <Img
        ref={nose_img}
        src={nose}
        size={130}
        opacity={0}
        x={0}
        y={-40}
      />
      <Img
        ref={blonde_img}
        src={blonde}
        size={600}
        opacity={0}
        x={0}
      />
      <Img
        ref={sad_img}
        src={sad}
        size={70}
        y={20}
        rotation={0}
        opacity={0}
        x={0}
      />
      <Txt
        ref={singleTxt}
        text="Single"
        {... textStyle}
        fontSize={50}
        y={380}
        opacity={0}
      />
      </Img>
      <Layout
        ref={goodCmp}
        y={80}
        x={1800}
      >
        <Img
          src={problem_org}
          x={-400}
          size={400}
        />
        <Txt
          text="Original"
          {... textStyle}
          fontSize={40}
          x={-400}
          y={250}
          fontWeight={400}
          textAlign="center"
        />
        <Img
          src={problem_good}
          x={200}
          y={-200}
          size={300}
        >
          <Txt
            text="Good
              transformation"
            {... textStyle}
            fontSize={40}
            fontWeight={400}
            textAlign="center"
            x={350}
          />
        </Img>
        <Img
          src={problem_bad}
          x={200}
          y={200}
          size={300}
        >
          <Txt
            text="Bad
              transformation"
            {... textStyle}
            fontSize={40}
            fontWeight={400}
            textAlign="center"
            x={350}
          />
        </Img>
      </Layout>
      <Layout
        ref={sequential}
        y={80}
        x={1800}
      >
        <Img
          src={org}
          ref={org_img}
          x={-650}
          size={350}
        >
          <Txt
            text="Original"
            {... textStyle}
            fontSize={40}
            y={250}
            fontWeight={400}
            textAlign="center"
          />
        </Img>
        <Img
          src={smile}
          ref={smile_img}
          x={-150}
          y={-150}
          size={300}
          opacity={0}
        >
          <Txt
            text="+ Smile"
            {... textStyle}
            fontSize={40}
            fontWeight={400}
            textAlign="center"
            y={-200}
          />
        </Img>
        <Img
          src={goatee}
          ref={goatee_img}
          x={250}
          y={-150}
          size={300}
          opacity={0}
        >
          <Txt
            text="+ Goatee"
            {... textStyle}
            fontSize={40}
            fontWeight={400}
            textAlign="center"
            y={-200}
          />
        </Img>
        <Img
          src={glasses}
          ref={glasses_img}
          x={650}
          y={-150}
          size={300}
          opacity={0}
        >
          <Txt
            text="- Glasses"
            {... textStyle}
            fontSize={40}
            fontWeight={400}
            textAlign="center"
            y={-200}
          />
        </Img>
        <Txt
          ref={all_attrs_txt}
          text="+ Smile
          + Goatee
          - Glasses
          "
          {... textStyle}
          fontSize={50}
          fontWeight={400}
          textAlign="left"
          y={200}
          x={250}
          opacity={0}
        />
        <Line
          ref={s_org_smile}
          lineWidth={10}
          stroke={red}
          endArrow={true}
          arrowSize={15}
          points={() => [
            [-470,0],
            [-305,-150]
          ]}
          opacity={0}
        />
        <Line
          ref={s_smile_goatee}
          lineWidth={10}
          stroke={red}
          endArrow={true}
          arrowSize={15}
          points={() => [
            [0,-150],
            [100,-150]
          ]}
          opacity={0}
        />
        <Line
          ref={s_goatee_glass}
          lineWidth={10}
          stroke={red}
          endArrow={true}
          arrowSize={15}
          points={() => [
            [400,-150],
            [500,-150]
          ]}
          opacity={0}
        />
        <Line
          ref={m_org_tr}
          lineWidth={10}
          stroke={green}
          endArrow={true}
          arrowSize={15}
          points={() => [
            [-470,0],
            [100,200]
          ]}
          opacity={0}
        />
        <Line
          ref={m_tr_out}
          lineWidth={10}
          stroke={green}
          endArrow={true}
          arrowSize={15}
          points={() => [
            [400,200],
            [650,10]
          ]}
          opacity={0}
        />
        <Txt
          ref={sequential_text}
          text="Sequential"
          {... textStyle}
          fontSize={50}
          textAlign="center"
          y={-350}
          x={-650}
          opacity={0.3}
          fill={red}
        />
        <Txt
          ref={simultaneous_text}
          text="Simultaneous"
          {... textStyle}
          fontSize={50}
          textAlign="center"
          y={-280}
          x={-650}
          opacity={0.3}
          fill={green}
        />
      </Layout>
    </>
  );

  
  yield* slideTransition(Direction.Right);
  yield* beginSlide('Attr Manipulation');
  yield* all(
    titleBox().height(150, 1),
    problem().fontSize(80, 1),
    logo().size(76, 1),
    padTop(10, 1),
    bodyBox().height(910, 1),
  )
  yield* all(
    leftLayout().position.y(70, 1),
  )
  yield* beginSlide('Setup demo');
  yield* all(
    woman_img().opacity(1, 1),
    attrButtons().height(300, 1),
    attrButtons().opacity(1, 1),
  )
  yield* beginSlide('Change smile');
  yield* all(
    smileBtn().fill(red, 1),
    sad_img().opacity(1, 1),
    singleTxt().opacity(1, 1)
  )
  yield* all(
    smileBtn().fill(green, 1),
    sad_img().rotation(180, 1),
  )
  yield* beginSlide('Change nose');
  yield* all(
    smileBtn().fill(gray, 1),
    sad_img().opacity(0, 1),
  )
  yield* all(
    noseBtn().fill(green, 1),
    nose_img().opacity(1, 1),
  )
  yield* all(
    nose_img().size(200, 1).to(70, 1),
    noseBtn().fill(green, 1).to(red, 1),
  )
  yield* beginSlide('Multi example 1');
  yield* all(
    blonde_img().opacity(1, 1),
    blondBtn().fill(green, 1),
    singleTxt().text("Multi", 1)
  )
  yield* beginSlide('Multi example 2');
  yield* all(
    blonde_img().opacity(0, 1),
    blondBtn().fill(red, 1),
    sad_img().opacity(1, 1),
    smileBtn().fill(green, 1),
    nose_img().size(150, 1),
    noseBtn().fill(green, 1)
  )
  yield* beginSlide('Actual Examples');
  yield* all(
    leftLayout().position.x(-1500, 1),
    woman_img().position.x(-1500, 1),
    goodCmp().position.x(0, 1)
  )
  yield* beginSlide('Sequential editing');
  yield* all(
    woman_img().opacity(0,0),
    leftLayout().opacity(0,0),
    goodCmp().position.x(-1900, 1),
    sequential().position.x(0, 1)
  )
  yield* beginSlide('Sequential lines');
  yield* sequence(0.3,
    goodCmp().opacity(0,0),
    sequential_text().opacity(1, 1),
    s_org_smile().opacity(1, 1),
    smile_img().opacity(1, 1),
    s_smile_goatee().opacity(1, 1),
    goatee_img().opacity(1, 1),
    s_goatee_glass().opacity(1, 1),
    glasses_img().opacity(1, 1)
  )
  yield* beginSlide('Simultaneous lines');
  yield* sequence(0.3,
    all(
      sequential_text().opacity(0.3, 1),
      simultaneous_text().opacity(1, 1),
    ),
    m_org_tr().opacity(1, 1),
    all_attrs_txt().opacity(1, 1),
    m_tr_out().opacity(1, 1)
  )
  yield* beginSlide('end');

});
