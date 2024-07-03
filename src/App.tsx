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
  margin: 0 auto;
  max-width: 650px;
  height: 100vh;
  background: url("https://i.pinimg.com/736x/ed/54/96/ed5496b885f5d7833b307305470960af.jpg")
    center top no-repeat;
`;

const ShowInputButton = styled.div`
  position: absolute;
  bottom: 40px;
  right: 40px;
  z-index: 1;
`;

function App() {
  const [todo, setToDo] = useState("");
  console.log(todo);
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
    <Container className="App">
      <ShowInputButton>
        <Button
          label={showTodoAdd ? "닫기" : "할 일 추가"}
          color={showTodoAdd ? undefined : "#dd9cb4"}
          onClick={() => setShowTodoAdd(!showTodoAdd)}
        />
      </ShowInputButton>
      {showTodoAdd && <ToDoInput onAdd={onAdd} />}
      <DataView toDoList={toDoList} onDelete={onDelete} />
    </Container>
  );
}

export default App;
