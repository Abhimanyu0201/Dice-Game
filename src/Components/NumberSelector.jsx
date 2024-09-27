import React, { useState } from "react";
import styled from "styled-components";
function NumberSelector({
  error,
  setError,
  selectedNumber,
  setselectedNumber,
}) {
  const arr = [1, 2, 3, 4, 5, 6];

  const numberSelectorHandler = (value) => {
    setselectedNumber(value);
    setError("");
  };

  return (
    <Selector>
      <p className="error">{error}</p>
      <div className="flex">
        {arr.map((value, i) => (
          <Box
            isSelected={value == selectedNumber}
            key={i}
            onClick={() => numberSelectorHandler(value)}
          >
            {value}
          </Box>
        ))}
      </div>
      <p>Select Number</p>
    </Selector>
  );
}

export default NumberSelector;

const Selector = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  .flex {
    display: flex;
    flex-wrap: wrap;
    gap: 24px;
  }
  p {
    font-size: 24px;
    font-weight: 700px;
  }

  .error {
    color: red;
  }
`;

const Box = styled.div`
  height: 72px;
  width: 72px;
  border: 2px solid black;
  font-size: 24px;
  font-weight: 700;
  display: grid;
  place-items: center;
  cursor: pointer;
  background-color: ${(props) => (props.isSelected ? "black" : "white")};
  color: ${(props) => (props.isSelected ? "white" : "black")};
`;
