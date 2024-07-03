import React from "react";
import styled from "styled-components";
import Button from "./Button";

const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 10px;
`;

const Label = styled.div`
  font-size: 1.5rem;
  flex: 1;
  margin-left: 24px;
`;

interface Props {
  label: string;
  onDelete?: () => void;
}

const TodoItem = ({ label, onDelete }: Props) => {
  return (
    <Container>
      <Label>{label}</Label>
      <Button label="삭제" onClick={onDelete} />
    </Container>
  );
};

export default TodoItem;
