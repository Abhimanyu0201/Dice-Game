import React, { useState } from "react";
import Score from "./Score";
import NumberSelector from "./NumberSelector";
import styled from "styled-components";
import RoleDice from "./RoleDice";
import { Button } from "../Styled/Button";
import Rules from "./Rules";

const GamePlay = () => {
  const [error, setError] = useState();
  const [score, setScore] = useState(0);
  const [currentDice, setCurrentDice] = useState(1);
  const [selectedNumber, setselectedNumber] = useState();
  const [showRules, setShowRules] = useState(false);

  const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  const roleDice = () => {
    if (!selectedNumber) {
      setError("Please select any number");
      return;
    }
    const randomNumber = generateRandomNumber(1, 7);
    setCurrentDice((prev) => randomNumber);

    if (selectedNumber == randomNumber) {
      setScore((prev) => prev + randomNumber);
    } else {
      setScore((prev) => prev - 1);
    }
    setselectedNumber(undefined);
  };

  const resetScore = () => {
    setScore(0);
    setselectedNumber(undefined);
    setError("");
  };
  return (
    <Main>
      <div className="top_section">
        <Score score={score} />
        <NumberSelector
          setError={setError}
          error={error}
          selectedNumber={selectedNumber}
          setselectedNumber={setselectedNumber}
        />
      </div>
      <RoleDice currentDice={currentDice} roleDice={roleDice} />

      <div className="btns">
        <Button onClick={resetScore}>Reset</Button>
        <Button onClick={() => setShowRules((prev) => !prev)}>
          {showRules ? "Hide" : "Show"} Rules
        </Button>
      </div>

      {showRules && <Rules />}
    </Main>
  );
};

export default GamePlay;

const Main = styled.main`
  .top_section {
    display: flex;
    justify-content: space-around;
    align-items: end;
  }
  .btns {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }
`;
