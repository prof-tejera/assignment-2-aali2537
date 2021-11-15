import React from "react";
import styled from "styled-components";

import Panel from "../generic/Panel";
import Circle from "../generic/Circle";
import TextDisplay from "../generic/TextDisplay";
import Button from "../generic/Button";

//Circle size settings
const circleSize = 450;
const circleStroke = 20;

const RelDiv = styled.div`
  position: relative;
`;

const Timer = () => {
  return (
    <Panel>
      <RelDiv>
        <Circle size={circleSize} strokeWidth={circleStroke} />
        <TextDisplay />
      </RelDiv>
      <div>
        <Button type="Primary" />
        <Button type="Secondary" />
      </div>
    </Panel>
  );
};

export default Timer;
