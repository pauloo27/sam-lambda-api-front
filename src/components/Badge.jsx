import React from "react";
import styled from "styled-components";

const StyledSpan = styled.span`
  color: white;
  padding: 3px 10px;
  border-radius: 5px;
  font-size: 0.8em;
  font-weight: bold;
  display: inline-block;
  margin-bottom: 5px;
  background-color: #1e293b;
`;

export function Badge({ children }) {
  return <StyledSpan>{children}</StyledSpan>;
}
