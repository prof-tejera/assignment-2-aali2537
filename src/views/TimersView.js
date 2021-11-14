import React from "react";
import styled from "styled-components";

import Timer from "../components/timers/Timer";
import TimerProvider, {
  TimerContext,
} from "../components/context/TimerContext";

const Timers = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  height: auto;
  padding-left: 20%;
  padding-right: 20%;
`;

const TimerContainer = styled.div`
  padding: 20px;
  margin: 10px;
  font-size: 1.5rem;
  flex-basis: 30%;
  text-align: center;
`;

const TimerTitle = styled.div``;

function App() {
  const timers = [
    {
      title: "Stopwatch",
      C: <Timer size={450} strokeWidth={20} timerType={"Stopwatch"} />,
    },
    {
      title: "Countdown",
      C: <Timer size={450} strokeWidth={20} timerType={"Countdown"} />,
    },
    {
      title: "XY",
      C: (
        <Timer size={450} strokeWidth={20} timerType={"XY"} currentRound={1} />
      ),
    },
    {
      title: "Tabata",
      C: (
        <Timer
          size={450}
          strokeWidth={20}
          timerType={"Tabata"}
          currentRound={2}
          roundType={"Work"}
        />
      ),
    },
  ];

  return (
    <TimerProvider>
      <Timers>
        {timers.map((timer, index) => (
          <TimerContainer key={index}>
            <TimerTitle>{timer.title}</TimerTitle>
            {timer.C}
          </TimerContainer>
        ))}
      </Timers>
    </TimerProvider>
  );
}

export default App;
