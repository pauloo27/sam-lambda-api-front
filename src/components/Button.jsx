import styled from "styled-components";

const bgColors = {
  primary: "#f8fafc",
  secondary: "#1e293b",
  danger: "#e11d48",
};

const fgColors = {
  primary: "#030712",
  secondary: "#fff1f2",
  danger: "#fff1f2",
};

export const Button = styled.button`
  background-color: ${({ color }) => bgColors[color] || bgColors.primary};
  color: ${({ color }) => fgColors[color] || fgColors.primary};
  padding: 8px 15px;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  border-radius: 0.5rem;
  border: 1px solid #1e293b;
`;
