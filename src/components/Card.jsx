import React from "react";
import styled from "styled-components";
import { CardContainer } from "./CardContainer";

const Img = styled.img`
  transition: all 0.2s;
  width: 380px;
`;

const Container = styled(CardContainer)`
  &:hover {
    background-color: #1e293b;
  }
  &:hover ${Img} {
    scale: 1.5;
    transition: all 0.5s;
  }
`;

export function Card({ src, alt, label }) {
  return (
    <Container>
      <Img src={src} alt={alt} />
      <h3>{label}</h3>
    </Container>
  );
}
