import React from "react";
import styled from "styled-components";

const Rules = () => {
  return (
    <RuleContainer>
      <h2>How to play Dice-Game</h2>
      <div>
        <p>Select any number</p>
        <p>Click on Dice</p>
        <p>
          after click on dice if selected number is equal to dice number, you
          will get same point as dice{""}
        </p>
        <p>if you wrong guess then 1 point will be dedcuted</p>
      </div>
    </RuleContainer>
  );
};

export default Rules;

const RuleContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  background-color: #fbf1f1;
  padding: 20px;
  margin-top: 40px;
`;
