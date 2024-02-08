import React from "react";
import { Card } from "../components/Card";
import store1 from "../assets/store1.webp";
import store2 from "../assets/store2.webp";
import store3 from "../assets/store3.webp";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const MainContainer = styled(Container)`
  flex-direction: column;
  align-items: center;
`;

export function Home() {
  return (
    <MainContainer>
      <h1>Welcome to Burger Shot</h1>
      <h2>The biggest fast food chain in San Andreas. We have stores in Los</h2>
      <Container>
        <Card src={store1} label="Los Santos" />
        <Card src={store2} label="Las Venturas" />
        <Card src={store3} label="San Fierro" />
      </Container>
    </MainContainer>
  );
}
