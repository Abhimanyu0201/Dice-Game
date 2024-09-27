import React from "react";
import styled from "styled-components";
import { Button } from "../Styled/Button";

export const Home = ({ toggle }) => {
  return (
    <Container>
      <div>
        <img src="/img/dices.png" alt="" />
      </div>

      <div className="content">
        <h1 className="name">Deepak's</h1>
        <h1>Dice Game</h1>

        <Button onClick={toggle}>Play now</Button>
        
      </div>
    </Container>
  );
};

const Container = styled.div`
  max-width: 1180px;
  display: flex;
  height: 100vh;
  margin: 0 auto;
  align-items: center;
  .content {
    h1 {
      font-size: 96px;
      white-space: nowrap;
    }
    .name{
      font-size: 85px;
      white-space: nowrap;
    }
  }
`;
