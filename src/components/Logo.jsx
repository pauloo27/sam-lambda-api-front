import React from "react";
import styled from "styled-components";
import logo from "../assets/logo.png";

const Img = styled.img`
  width: 50px;
`;

export function Logo() {
  return <Img src={logo} alt="logo" />;
}
