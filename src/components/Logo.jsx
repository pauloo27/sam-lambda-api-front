import React from "react";
import styled from "styled-components";
import logo from "../assets/logo.svg";

const Img = styled.img`
  width: 200px;
`;

export function Logo() {
  return <Img src={logo} alt="logo" />;
}
