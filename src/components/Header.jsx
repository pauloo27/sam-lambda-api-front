import React from "react";
import { Logo } from "./Logo";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledHeader = styled.header`
  background: #fde767;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledNav = styled.nav`
  display: flex;
  gap: 20px;
`;

const StyledLink = styled(Link)`
  color: #6895d2;
  text-decoration: none;
  font-weight: bold;
  text-transform: uppercase;
`;

export function Header() {
  return (
    <StyledHeader>
      <Link to="/">
        <Logo />
      </Link>
      <StyledNav>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/orders">Orders</StyledLink>
        <StyledLink to="/menu">Menu</StyledLink>
        <StyledLink to="/ingredients">Ingredients</StyledLink>
      </StyledNav>
    </StyledHeader>
  );
}
