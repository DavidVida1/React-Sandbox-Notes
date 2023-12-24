import React from "react";
import styled from "styled-components";
import { ACTIONS } from "./ReactUseReduce";

export default function Todo({ todo, dispatch }) {
  console.log(" test", ACTIONS);
  return (
    <TodoWrapper>
      <div style={{ color: todo.complete ? "#AAA" : "#000" }}>{todo.name}</div>
      <button
        onClick={() =>
          dispatch({
            type: ACTIONS.TOGGLE_TODO,
            payload: { id: todo.id },
          })
        }
      >
        Toggle
      </button>
      <button
        onClick={() =>
          dispatch({
            type: ACTIONS.DELETE_TODO,
            payload: { id: todo.id },
          })
        }
      >
        Delete
      </button>
    </TodoWrapper>
  );
}

const TodoWrapper = styled.section`
  & div {
    margin: 15px 0px;
    font-size: 2.5rem;
    font-weight: bold;
  }
  & button {
    margin-right: 20px;
  }
`;
