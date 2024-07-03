import React from "react";
import styled from "styled-components";
import ToDoList from "./ToDoList";
import Title from "./Title";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

interface Props {
  toDoList: string[];
  onDelete: (todo: string) => void;
}
const DataView = ({ toDoList, onDelete }: Props) => {
  return (
    <Container>
      <Title label="TODO" />
      <ToDoList toDoList={toDoList} onDelete={onDelete} />
    </Container>
  );
};

export default DataView;
