import React from "react";
import { Link } from "react-router-dom";
import { Card } from "../components/Card";
import store1 from "../assets/store1.webp";
import store2 from "../assets/store2.webp";
import store3 from "../assets/store3.webp";
import styled from "styled-components";

const StoresContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export function Home() {
  return (
    <>
      <h1>I am proud to welcome you to Burger Shot!</h1>
      <h2>
        You can order <Link to="/orders">online (here)</Link> or on one of our
        stores:
      </h2>
      <StoresContainer>
        <Card src={store1} label="Los Santos" />
        <Card src={store2} label="Las Venturas" />
        <Card src={store3} label="San Fierro" />
      </StoresContainer>
    </>
  );
}
