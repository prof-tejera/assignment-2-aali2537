import React, { useContext } from "react";
import styled from "styled-components";

import Panel from "../generic/Panel";
import Circle from "../generic/Circle";
import TextDisplay from "../generic/TextDisplay";
import Button from "../generic/Button";
import { TimerContext } from "../context/TimerContext";
import Settings from "../generic/Settings";

//Circle size settings
const circleSize = 450;
const circleStroke = 20;

const RelDiv = styled.div`
  position: relative;
`;

const TopButtonRow = styled.div`
  margin-top: 1em;
  margin-right: 1em;
  position: relative;
  height: 4.5em;
`;

const BottomButtonRow = styled.div`
  height: 5em;
  position: relative;
  margin-top: 1em;
`;

const FlipContainer = styled.div`
  perspective: 1000px;
`;

const Flipper = styled(Panel)`
  &.flip {
    transform: rotateY(180deg);
  }
  transition: 0.6s;
  transform-style: preserve-3d;
  position: relative;
  height: 38em;
  width: 28.1em;
`;

const FrontSide = styled.div`
  backface-visibility: hidden;
  transform-style: preserve-3d;

  position: absolute;
  top: 0;
  left: 0;
`;

const BackSide = styled(FrontSide)`
  background-color: #0f242e;
  transform: rotateY(180deg);
  height: 43em;
  width: 28.1em;
  border-radius: 1em;
`;

const Timer = () => {
  const { flipped, setFlipped } = useContext(TimerContext);

  return (
    <FlipContainer>
      <Flipper className={flipped ? "flip" : ""}>
        <FrontSide>
          <TopButtonRow>
            <Button
              icon={"setting"}
              top={10}
              left={90}
              onClick={() => setFlipped(!flipped)}
            />
          </TopButtonRow>
          <RelDiv>
            <Circle size={circleSize} strokeWidth={circleStroke} />
            <TextDisplay />
          </RelDiv>
          <BottomButtonRow>
            <Button icon={"play"} left={50} top={40} />
          </BottomButtonRow>
        </FrontSide>
        <BackSide>
          <Settings />
        </BackSide>
      </Flipper>
    </FlipContainer>
  );
};

export default Timer;
