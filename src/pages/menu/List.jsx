import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "../../components/Button";
import { API_URL } from "../../api/api";
import { MenuItemViewer } from "../../components/MenuItemViewer";
import styled from "styled-components";

const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export function ListMenu() {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    fetch(`${API_URL}/menu`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => setMenuItems(data));
  }, []);

  return (
    <PageContainer>
      <h1>Menu</h1>
      {menuItems.map((item) => (
        <MenuItemViewer key={item.id} item={item} />
      ))}
      <Link to="/menu-create">
        <Button>Create new menu item</Button>
      </Link>
    </PageContainer>
  );
}
