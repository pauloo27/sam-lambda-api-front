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

export const StyledLabel = styled.label`
  display: flex;
  gap: 5px;
  flex-direction: column;
  font-size: 0.8rem;
`;

export function Input({ name, register, required, label, children, ...props }) {
  if (register === undefined) {
    register = () => {};
  }

  if (label) {
    return (
      <StyledLabel>
        {label}
        <StyledInput {...register(name, { required })} {...props}>
          {children}
        </StyledInput>
      </StyledLabel>
    );
  }
  return (
    <StyledInput {...register(name, { required })} {...props}>
      {children}
    </StyledInput>
  );
}
