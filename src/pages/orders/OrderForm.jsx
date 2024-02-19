import React from "react";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { PageContainer } from "../../components/PageContainer";
import { StyledForm } from "../../components/StyledForm";
import styled from "styled-components";
import { OrderItemInput } from "../../components/OrderItemInput";

const MenuContainer = styled.div`
  display: flex;
  gap: 10px;
  flex-direction: column;
`;

export function OrderForm({
  title,
  submitBtn,
  onSubmit,
  register,
  handleSubmit,
  menu,
  disabled,
  onAddItem,
  onRemoveItem,
  itemsInput,
}) {
  return (
    <PageContainer>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <h1>{title}</h1>
        <Input
          name="customer-name"
          required
          label="Customer name"
          placeholder="Eg: John Doe"
          register={register}
        />
        <Button type="button" color="secondary" onClick={() => onAddItem()}>
          Add menu item
        </Button>
        <MenuContainer>
          {itemsInput.map((_, index) => (
            <OrderItemInput
              key={index}
              index={index}
              register={register}
              menu={menu}
              onRemove={() => onRemoveItem(index)}
            />
          ))}
        </MenuContainer>
        <Button disabled={disabled} type="submit" color="primary">
          {submitBtn}
        </Button>
      </StyledForm>
    </PageContainer>
  );
}
