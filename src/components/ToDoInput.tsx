import React, { useState } from "react";
import styled from "styled-components";
import Title from "./Title";
import TextInput from "./TextInput";
import Button from "./Button";

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.7);
`;
const Contents = styled.div`
  width: 400px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px;
  border-radius: 15px;
  background: #fff;
  z-index: 1;
`;
const InputContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
`;
interface Props {
  onAdd: (todo: string) => void;
}
const ToDoInput = ({ onAdd }: Props) => {
  const [todo, setToDo] = useState("");
  const onAddTodo = () => {
    if (todo === "") return;
    onAdd(todo);
    setToDo("");
  };
  return (
    <Container>
      <Background />
      <Contents>
        <Title label="TODO추가" />
        <InputContainer>
          <TextInput value={todo} onChange={setToDo} />
          <Button label="+" color="#f54d8b" onClick={onAddTodo} />
        </InputContainer>
      </Contents>
    </Container>
  );
};

export default ToDoInput;
