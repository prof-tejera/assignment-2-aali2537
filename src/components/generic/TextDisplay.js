import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { convertFromMs } from "../../utils/helpers";

const TimerText = styled.p`
  position: absolute;
  margin: 0;
  color: white;
  top: 45%;
  left: 50%;
  font-size: 2em;
  transform: translate(-50%, -50%);
`;

const RoundText = styled(TimerText)`
  top: 57%;
  font-size: 1em;
  font-weight: bold;
`;

const RoundTypeText = styled(RoundText)`
  top: 67%;
  font-size: 0.8em;
`;

const TextDisplay = ({ timerType, currentTime, currentRound, roundType }) => {
  const displayRound = timerType === "XY" || timerType === "Tabata";
  const displayRoundType = timerType === "Tabata";

  return (
    <>
      <TimerText>{convertFromMs(currentTime)}</TimerText>
      {displayRound && <RoundText>Round {currentRound}</RoundText>}
      {displayRoundType && <RoundTypeText>{roundType}</RoundTypeText>}
    </>
  );
};

export default TextDisplay;