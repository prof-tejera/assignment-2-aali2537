import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import Panel from "../generic/Panel";
import Circle from "../generic/Circle";
import TextDisplay from "../generic/TextDisplay";
import Button from "../generic/Button";

const RelDiv = styled.div`
  position: relative;
`;

const Timer = ({
  size,
  strokeWidth,
  percent,
  timerType,
  currentRound,
  roundType,
}) => {
  return (
    <Panel>
      <RelDiv>
        <Circle size={size} strokeWidth={strokeWidth} percent={percent} />
        <TextDisplay
          currentTime={5010}
          timerType={timerType}
          currentRound={currentRound}
          roundType={roundType}
        />
      </RelDiv>
      <div>
        <Button type="Primary" />
        <Button type="Secondary" />
      </div>
    </Panel>
  );
};

Timer.propTypes = {
  size: PropTypes.number,
  strokeWidth: PropTypes.number,
};

export default Timer;
