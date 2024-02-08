import React from "react";
import styled from "styled-components";
import netscapeLogo from "../assets/netscape.jpg";

const StyledFooter = styled.footer`
  background-color: #030712;
  border-top: 1px solid #1e293b;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

const StyledImg = styled.img`
  width: 100px;
`;

export function Footer() {
  return (
    <StyledFooter>
      <p>Best viewed in</p>
      <StyledImg src={netscapeLogo} alt="netscape logo" />
    </StyledFooter>
  );
}
