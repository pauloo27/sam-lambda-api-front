import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledLink = styled(Link)`
  color: #94a3b8;
  font-weight: bold;
  text-decoration: ${({ underline }) => (underline ? "underline" : "none")};
`;
