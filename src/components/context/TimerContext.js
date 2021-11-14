import React, { useState } from "react";

export const TimerContext = React.createContext({});

const TimerProvider = ({ children }) => {
  const [timerType, setTimerType] = useState("Stopwatch");
  const [percent, setPercent] = useState(0);
  const [currentRound, setCurrentRound] = useState(1);
  const [maxRound, setMaxRound] = useState(5);
  const [roundType, setRoundType] = useState("Work");

  return (
    <TimerContext.Provider
      value={{
        timerType,
        setTimerType,
        percent,
        setPercent,
        currentRound,
        setCurrentRound,
        maxRound,
        setMaxRound,
        roundType,
        setRoundType,
      }}
    >
      {children}
    </TimerContext.Provider>
  );
};

export default TimerProvider;
