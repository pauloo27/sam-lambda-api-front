import React from "react";
import styled from "styled-components";
import { CardContainer } from "./CardContainer";

const Img = styled.img`
  width: 380px;
`;

export function Card({ src, alt, label }) {
  return (
    <CardContainer>
      <Img src={src} alt={alt} />
      <h3>{label}</h3>
    </CardContainer>
  );
}
