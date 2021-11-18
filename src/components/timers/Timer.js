import React, { useContext } from "react";
import styled from "styled-components";

import Panel from "../generic/Panel";
import Circle from "../generic/Circle";
import TextDisplay from "../generic/TextDisplay";
import Button from "../generic/Button";
import { TimerContext } from "../context/TimerContext";

//Circle size settings
const circleSize = 450;
const circleStroke = 20;

const RelDiv = styled.div`
  position: relative;
`;

const TopButtonRow = styled.div`
  margin-right: 1em;
  position: relative;
  height: 4.5em;
`;

const BottomButtonRow = styled.div`
  height: 5em;
  position: relative;
`;

const Timer = () => {
  const { btn1, setBtn1 } = useContext(TimerContext);

  return (
    <Panel>
      <TopButtonRow>
        <Button icon={"setting"} left={90} />
      </TopButtonRow>
      <RelDiv>
        <Circle size={circleSize} strokeWidth={circleStroke} />
        <TextDisplay />
      </RelDiv>
      <BottomButtonRow>
        <Button icon={"play"} left={50} />
      </BottomButtonRow>
    </Panel>
  );
};

export default Timer;
