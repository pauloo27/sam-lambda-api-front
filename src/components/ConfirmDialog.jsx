import React from "react";
import { BaseDialog } from "./BaseDialog";
import { Button } from "./Button";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const ButtonContainer = styled(Container)`
  flex-direction: row;
`;

export function ConfirmDialog({
  title,
  text,
  confirmColor,
  confirmText,
  cancelColor,
  cancelText,
  onConfirm,
  onCancel,
  ...props
}) {
  return (
    <BaseDialog {...props}>
      <Container>
        <h3>{title}</h3>
        <p>{text}</p>
        <ButtonContainer>
          <Button onClick={onConfirm} color={confirmColor ?? "primary"}>
            {confirmText}
          </Button>
          <Button onClick={onCancel} color={cancelColor ?? "secondary"}>
            {cancelText}
          </Button>
        </ButtonContainer>
      </Container>
    </BaseDialog>
  );
}
