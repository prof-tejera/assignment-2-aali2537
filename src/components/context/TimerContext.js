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
  const [workLength, setWorkLength] = useState(30);
  const [restLength, setRestLength] = useState(10);
  const [minuteSetting, setMinuteSetting] = useState(1);
  const [secondSetting, setSecondSetting] = useState(10);
  const [tabPos, setTabPos] = useState("0em");
  const [btn1, setBtn1] = useState("play");
  const [flipped, setFlipped] = useState(false);

  //Sets the current timer and animates the moving tab
  const selectTimer = (timer) => {
    setTimerType(timer);
    setTabPos(tabMap[timer]);
    console.log(minuteSetting);
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
        btn1,
        setBtn1,
        flipped,
        setFlipped,
        workLength,
        setWorkLength,
        restLength,
        setRestLength,
        minuteSetting,
        setMinuteSetting,
        secondSetting,
        setSecondSetting,
      }}
    >
      {children}
    </TimerContext.Provider>
  );
};

export default TimerProvider;
