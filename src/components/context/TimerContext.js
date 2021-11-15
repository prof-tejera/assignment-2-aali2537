import React, { useState } from "react";
import { tabMap } from "../../utils/helpers";

export const TimerContext = React.createContext({});

const TimerProvider = ({ children }) => {
  const [timerType, setTimerType] = useState("Stopwatch");
  const [percent, setPercent] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [currentRound, setCurrentRound] = useState(1);
  const [maxRound, setMaxRound] = useState(5);
  const [roundType, setRoundType] = useState("Work");
  const [tabPos, setTabPos] = useState("0em");

  const selectTimer = (timer) => {
    setTimerType(timer);
    setTabPos(tabMap[timer]);
  };

  return (
    <TimerContext.Provider
      value={{
        timerType,
        selectTimer,
        percent,
        setPercent,
        currentTime,
        setCurrentTime,
        currentRound,
        setCurrentRound,
        maxRound,
        setMaxRound,
        roundType,
        setRoundType,
        tabPos,
      }}
    >
      {children}
    </TimerContext.Provider>
  );
};

export default TimerProvider;
