import React from "react";
import styled from "styled-components";

const StyledInput = styled.input`
  background-color: #030712;
  border: 1px solid #1e293b;
  color: #f0f0f0;
  padding: 8px 15px;
  border-radius: 0.5rem;
  width: ${({ small }) => (small ? "35px" : "auto")};
`;

const StyledLabel = styled.label`
  display: flex;
  gap: 5px;
  flex-direction: column;
  font-size: 0.8rem;
`;

export function Input({ label, children, ...props }) {
  if (label) {
    return (
      <StyledLabel>
        {label}
        <StyledInput {...props}>{children}</StyledInput>
      </StyledLabel>
    );
  }
  return <StyledInput {...props}>{children}</StyledInput>;
}
