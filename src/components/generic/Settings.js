import react, { useContext } from "react";
import styled from "styled-components";

import Button from "./Button";
import Input from "./Input";
import Label from "./Label";
import { TimerContext } from "../context/TimerContext";

const Div = styled.div`
  text-align: center;
  height: 100%;
`;

const SubLabel = styled(Label)`
  font-size: 1em;
  text-align: left;
  margin-left: 1em;
  flex: 0.5;
`;

const FlexDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;

const Settings = () => {
  const {
    flipped,
    setFlipped,
    minuteSetting,
    setMinuteSetting,
    secondSetting,
    setSecondSetting,
    maxRound,
    setMaxRound,
    workLength,
    setWorkLength,
    restLength,
    setRestLength,
    timerType,
  } = useContext(TimerContext);
  const showRounds = timerType === "XY" || timerType === "Tabata";
  const showRoundType = timerType === "Tabata";

  return (
    <Div>
      <div>
        <Label>Settings</Label>
      </div>
      <FlexDiv>
        <SubLabel>Minutes: </SubLabel>
        <Input
          type="text"
          name="Minutes"
          placeholder="Minutes"
          onChange={(e) => setMinuteSetting(e.target.value)}
          value={minuteSetting}
        />
      </FlexDiv>
      <FlexDiv>
        <SubLabel>Seconds: </SubLabel>
        <Input
          type="text"
          name="Seconds"
          placeholder="Seconds"
          onChange={(e) => setSecondSetting(e.target.value)}
          value={secondSetting}
        />
      </FlexDiv>
      {showRounds && (
        <FlexDiv>
          <SubLabel>Rounds: </SubLabel>
          <Input
            type="text"
            name="Rounds"
            placeholder="Total Rounds"
            value={maxRound}
            onChange={(e) => setMaxRound(e.target.value)}
          />
        </FlexDiv>
      )}
      {showRoundType && (
        <FlexDiv>
          <SubLabel>Work(seconds): </SubLabel>
          <Input
            type="text"
            name="Work"
            placeholder="Work Period"
            value={workLength}
            onChange={(e) => setWorkLength(e.target.value)}
          />
        </FlexDiv>
      )}
      {showRoundType && (
        <FlexDiv>
          <SubLabel>Rest(seconds): </SubLabel>
          <Input
            type="text"
            name="Rest"
            placeholder="Rest Period"
            value={restLength}
            onChange={(e) => setRestLength(e.target.value)}
          />
        </FlexDiv>
      )}
      <Button
        icon="save"
        top={80}
        left={50}
        onClick={() => setFlipped(!flipped)}
      />
    </Div>
  );
};

export default Settings;
