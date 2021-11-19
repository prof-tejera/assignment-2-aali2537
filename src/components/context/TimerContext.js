import React, { useState } from "react";
import { useEffect } from "react/cjs/react.development";
import { tabMap } from "../../utils/helpers";
import { calcRoundTime } from "../../utils/helpers";

export const TimerContext = React.createContext({});

const defaultSettings = {
  minutes: 1,
  seconds: 10,
  rounds: 5,
  work: 30,
  rest: 10,
};

const TimerProvider = ({ children }) => {
  const [timerType, setTimerType] = useState("Stopwatch");
  const [percent, setPercent] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [currentRound, setCurrentRound] = useState(1);
  const [maxRound, setMaxRound] = useState(defaultSettings["rounds"]);
  const [roundType, setRoundType] = useState("Work");
  const [workLength, setWorkLength] = useState(defaultSettings["work"]);
  const [restLength, setRestLength] = useState(defaultSettings["rest"]);
  const [minuteSetting, setMinuteSetting] = useState(
    defaultSettings["minutes"]
  );
  const [secondSetting, setSecondSetting] = useState(
    defaultSettings["seconds"]
  );
  const [tabPos, setTabPos] = useState("0em");
  const [btn1, setBtn1] = useState("play");
  const [flipped, setFlipped] = useState(false);
  const [timerActive, setTimerActive] = useState(false);
  const [btnActive, setBtnActive] = useState(false);
  const [roundTime, setRoundTime] = useState(0);
  const [resetFlag, setResetFlag] = useState(false);
  const [fastForwardFlag, setFastForwardFlag] = useState(false);
  const [congratsFlag, setCongratsFlag] = useState(false);

  // Function to make getting the round time easier with less typing
  const easyRoundTime = () => {
    return calcRoundTime(timerType, {
      minutes: minuteSetting,
      seconds: secondSetting,
      current: currentTime,
      rounds: maxRound,
      work: workLength,
      rest: restLength,
      roundType: roundType,
    });
  };

  //Sets the current timer and animates the moving tab
  const selectTimer = (timer) => {
    setTimerType(timer);
    setTabPos(tabMap[timer]);
  };

  //Reset state to default settings
  const resetState = () => {
    setMinuteSetting(defaultSettings["minutes"]);
    setSecondSetting(defaultSettings["seconds"]);
    setMaxRound(defaultSettings["rounds"]);
    setWorkLength(defaultSettings["work"]);
    setRestLength(defaultSettings["rest"]);
    setRoundTime(0);
    setPercent(0);
    setCongratsFlag(false);
    if (timerType === "Countdown" || timerType === "XY") {
      setCurrentTime(easyRoundTime());
      setPercent(100);
    } else {
      setCurrentTime(0);
    }
  };

  //Soft reset for completion, users still retain their settings chosen
  const softReset = () => {
    setFlipped(false);
    setTimerActive(false);
    setBtnActive(false);
    setRoundTime(0);
    setPercent(0);
    setCurrentTime(0);
    setCongratsFlag(false);
  };

  //Sets up users for the next round
  const nextRound = (time, percent) => {
    setCurrentRound(currentRound + 1);
    setPercent(percent);
    setCurrentTime(time);
  };

  useEffect(() => {
    softReset();
    setFastForwardFlag(false);
    setCongratsFlag(true);
  }, [fastForwardFlag]);

  useEffect(() => {
    resetState();
    setResetFlag(false);
  }, [resetFlag]);

  //Resets state upon choosing new timer
  useEffect(() => {
    resetState();
  }, [timerType]);

  //Trigger timer start/pause and calculate total time needed for percentage
  const toggleTimer = () => {
    setTimerActive(!timerActive);
    setBtnActive(true);
    setCongratsFlag(false);
  };

  //Start/pause everytime play/pause button is pushed
  useEffect(() => {
    if (timerActive) {
      const id = setInterval(() => {
        if (timerType === "Countdown" || timerType === "XY") {
          setCurrentTime((count) => count - 50);
        } else {
          setCurrentTime((count) => count + 50);
        }
      }, 50);
      return () => {
        clearInterval(id);
      };
    }
  }, [timerActive, timerType]);

  //Flip activating means users most likely changed settings
  useEffect(() => {
    if (timerType == "XY" || timerType == "Countdown") {
      setCurrentTime(easyRoundTime());
      setPercent(100);
    }
  }, [flipped]);

  //Calculate each round type and progress bar percentage
  useEffect(() => {
    setRoundTime(easyRoundTime);
    if (currentTime && roundTime) {
      setPercent((currentTime / roundTime) * 100);
    }
  }, [currentTime]);

  useEffect(() => {
    if (percent >= 100) {
      //Reset state as countdown and stopwatch timers only have one round
      if (timerType === "Stopwatch") {
        softReset();
        setCongratsFlag(true);
      }
      if (timerType === "Tabata") {
        if (roundType === "Work") {
          setPercent(0);
          setRoundType("Rest");
          setCurrentTime(0);
        } else if (currentRound < maxRound) {
          nextRound(0, 0);
          setRoundType("Work");
        }
        if (currentRound === maxRound) {
          softReset();
          setCongratsFlag(true);
          setCongratsFlag(true);
        }
      }
    } else if (percent <= 0) {
      if (timerType === "Countdown") {
        softReset();
        setCongratsFlag(true);
      }
      if (timerType === "XY") {
        if (currentRound < maxRound) {
          nextRound(roundTime, 100);
        } else {
          softReset();
          setCongratsFlag(true);
        }
      }
    }
  }, [percent]);
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
        timerActive,
        setTimerActive,
        btnActive,
        setBtnActive,
        toggleTimer,
        roundTime,
        setResetFlag,
        setFastForwardFlag,
        congratsFlag,
      }}
    >
      {children}
    </TimerContext.Provider>
  );
};

export default TimerProvider;
