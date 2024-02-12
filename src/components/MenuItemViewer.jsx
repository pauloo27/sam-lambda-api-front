import React from "react";
import { CardContainer } from "./CardContainer";
import { Badge } from "./Badge";
import { formatCurrency } from "../core/format";
import styled from "styled-components";
import { Button } from "./Button";
import { ConfirmDialog } from "./ConfirmDialog";
import { Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export function MenuItemViewer({ item, handleDelete }) {
  const [deleteDialog, setDeleteDialog] = React.useState(false);

  const onDelete = () => {
    setDeleteDialog(false);
    handleDelete(item.id);
  };

  return (
    <CardContainer>
      <ConfirmDialog
        title="Delete menu item"
        text="Are you sure you want to delete this menu item? It cannot be undone."
        confirmText="Delete"
        cancelText="Cancel"
        confirmColor="danger"
        onConfirm={onDelete}
        onCancel={() => setDeleteDialog(false)}
        show={deleteDialog}
      />
      <Container>
        <Link to={`/menu-edit/${item.id}`}>
          <Button color="secondary">
            <i className="bx bx-edit"></i>
          </Button>
        </Link>
        <h4>{item.name}</h4>
        <Button color="danger" onClick={() => setDeleteDialog(true)}>
          <i className="bx bx-trash"></i>
        </Button>
      </Container>
      <Badge>{formatCurrency(item.price)}</Badge>
      <span>
        Ingredients: {item.ingredients.map((i) => i.ingredient.name).join(", ")}
      </span>
    </CardContainer>
  );
}
