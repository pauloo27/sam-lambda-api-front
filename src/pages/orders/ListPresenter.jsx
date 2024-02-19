import React from "react";
import styled from "styled-components";
import { PageContainer } from "../../components/PageContainer";
import { CardContainer } from "../../components/CardContainer";
import { Badge } from "../../components/Badge";
import { Button } from "../../components/Button";
import { Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const statusColors = {
  PENDING: "orange",
  COMPLETED: "green",
};

const Status = styled.span`
  padding: 5px 10px;
  border-radius: 0.5rem;
  background-color: ${({ status }) => statusColors[status]};
`;

const InnerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 20px;
`;

export function ListOrdersPresenter({
  onComplete,
  disabled,
  pending,
  error,
  orders,
}) {
  return (
    <PageContainer>
      <h1>Orders</h1>
      <Link to="/orders-create">
        <Button>Place new order</Button>
      </Link>
      {pending && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      <Container>
        {orders.map((order) => (
          <CardContainer key={order.id}>
            <h3 style={{ textAlign: "center" }}>
              {order.customerName}'s order
            </h3>
            <InnerContainer>
              <Status status={order.status}>{order.status}</Status>
              <Button
                disabled={disabled || order.status === "COMPLETED"}
                color="primary"
                onClick={() => onComplete(order.id)}
              >
                <i className="bx bx-check"></i>
              </Button>
            </InnerContainer>
            <InnerContainer>
              {order.orderItems.map((item) => (
                <span key={item.id}>
                  <Badge>{item.amount}x</Badge> {item.menuItem.name}
                </span>
              ))}
            </InnerContainer>
          </CardContainer>
        ))}
      </Container>
    </PageContainer>
  );
}
