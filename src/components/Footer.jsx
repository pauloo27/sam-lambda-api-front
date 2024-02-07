import React from "react";
import styled from "styled-components";
import netscapeLogo from "../assets/netscape.jpg";

const StyledFooter = styled.footer`
  background: #fde767;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledImg = styled.img`
  width: 100px;
`;

export function Footer() {
  return (
    <StyledFooter>
      <div>
        <p>Best viewed in</p>
        <StyledImg src={netscapeLogo} alt="netscape logo" />
      </div>
    </StyledFooter>
  );
}
