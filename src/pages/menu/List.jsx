import React from "react";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { Button } from "../../components/Button";
import { getApiUrl } from "../../api/api";
import { MenuItemViewer } from "../../components/MenuItemViewer";
import styled from "styled-components";
import { PageContainer } from "../../components/PageContainer";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export function ListMenu() {
  const { isPending, error, data } = useQuery({
    queryKey: ["listMenu"],
    queryFn: () => fetch(`${getApiUrl()}/menu`).then((res) => res.json()),
  });

  const handleDelete = (id) => {
    fetch(`${getApiUrl()}/menu/${id}`, {
      method: "DELETE",
    }).then(() => window.location.reload());
  };

  return (
    <PageContainer>
      <h1>Menu</h1>
      <Link to="/menu-create">
        <Button>Create new menu item</Button>
      </Link>
      {isPending && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      <Container>
        {(data ?? []).map((item) => (
          <MenuItemViewer
            handleDelete={handleDelete}
            key={item.id}
            item={item}
          />
        ))}
      </Container>
    </PageContainer>
  );
}
