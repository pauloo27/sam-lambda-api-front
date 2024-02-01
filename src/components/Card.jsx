import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color: #fde767;
  margin: 20px;
  padding: 10px;
  width: 380px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Img = styled.img`
  width: 380px;
`;

export function Card({ src, alt, label }) {
  return (
    <Container>
      <Img src={src} alt={alt} />
      <h3>{label}</h3>
    </Container>
  );
}
