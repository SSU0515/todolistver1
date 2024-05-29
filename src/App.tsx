import React, { useState } from "react";
import styled from "styled-components";
import "./App.css";
import DataView from "./components/DataView";
import ToDoInput from "./components/ToDoInput";
import Button from "./components/Button";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: #eee;
`;

const ShowInputButton = styled.div`
  position: absolute;
  bottom: 40px;
  right: 40px;
  z-index: 1;
`;

function App() {
  const [todo, setToDo] = useState("");
  const [toDoList, setToDoList] = useState([
    "react공부하기",
    "운동하기",
    "카페가기",
  ]);
  const [showTodoAdd, setShowTodoAdd] = useState(true);
  const onAdd = (todo: string) => {
    if (todo === "") return;
    setToDoList([todo, ...toDoList]);
    setToDo("");
    setShowTodoAdd(false);
  };
  const onDelete = (todo: string) => {
    setToDoList(toDoList.filter((it) => it !== todo));
  };
  return (
    <Container>
      <DataView toDoList={toDoList} onDelete={onDelete} />
      {showTodoAdd && <ToDoInput onAdd={onAdd} />}
      <ShowInputButton>
        <Button
          label={showTodoAdd ? "닫기" : "할 일 추가"}
          color={showTodoAdd ? undefined : "#304ffe"}
          onClick={() => setShowTodoAdd(!showTodoAdd)}
        />
      </ShowInputButton>
    </Container>
  );
}

export default App;
