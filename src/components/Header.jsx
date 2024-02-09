import React from "react";
import { Logo } from "./Logo";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { StyledLink } from "./StyledLink";

const StyledHeader = styled.header`
  background-color: #030712;
  border-bottom: 1px solid #1e293b;
  padding: 10px 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledNav = styled.nav`
  display: flex;
  gap: 20px;
`;

export function Header() {
  return (
    <StyledHeader>
      <Link to="/">
        <Logo />
      </Link>
      <StyledNav>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/menu">Menu</StyledLink>
        <StyledLink to="/orders">Orders</StyledLink>
        <StyledLink to="/ingredients">Ingredients</StyledLink>
      </StyledNav>
    </StyledHeader>
  );
}
