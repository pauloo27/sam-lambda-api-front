import styled from "styled-components";
import { StyledLabel } from "./Input";

const StyledSelect = styled.select`
  border: 1px solid #1e293b;
  padding: 8px 15px;
  border-radius: 0.5rem;
`;

export function Select({
  name,
  register,
  required,
  label,
  children,
  ...props
}) {
  if (label) {
    return (
      <StyledLabel>
        {label}
        <StyledSelect {...register(name, { required })} {...props}>
          {children}
        </StyledSelect>
      </StyledLabel>
    );
  }
  return (
    <StyledSelect {...register(name, { required })} {...props}>
      {children}
    </StyledSelect>
  );
}
