import React from "react";
import styled from "styled-components";
import { Button } from "./Button";

const Overlay = styled.div`
  background-color: hsl(206 22% 7% / 50%);
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
`;

const Container = styled.div`
  background: #030712;
  border-radius: 6px;
  box-shadow: hsl(206 22% 7% / 35%) 0px 10px 38px -10px,
    hsl(206 22% 7% / 20%) 0px 10px 20px -15px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90vw;
  max-width: 450px;
  max-height: 85vh;
  padding: 25px;
`;

export function BaseDialog({ show, children }) {
  if (!show) return null;

  return (
    <Overlay>
      <Container>{children}</Container>
    </Overlay>
  );
}
