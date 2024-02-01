import React from "react";
import styled from "styled-components";

const colors = {
  primary: "#fcd849",
  secondary: "#e88547",
  danger: "#e8475a",
};

const StyledButton = styled.button`
  background-color: ${({ type }) => colors[type] || colors.primary};
  border: 1px solid #000;
  padding: 5px 10px;
  margin-top: 10px;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  border-radius: 100px;
`;

export function Button({ children, ...props }) {
  return <StyledButton {...props}>{children}</StyledButton>;
}
