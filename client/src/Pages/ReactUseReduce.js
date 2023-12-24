import React from "react";
import styled from "styled-components";
import { useState, useReducer } from "react";
import Todo from "./Todo";

/*CAPS CAUSE GLOBAL NON CHANGING VARIABLE */
/*const ACTIONS = {
  INCREMENT: "increment",
  DECREMENT: "decrement",
};*/

export const ACTIONS = {
  ADD_TODO: "add-todo",
  TOGGLE_TODO: "toggle-todo",
  DELETE_TODO: "delete-todo",
};

/*
function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.INCREMENT:
      return { count: state.count + 1 };
    case ACTIONS.DECREMENT:
      return { count: state.count - 1 };
    default:
      return state;
  }
}*/

function reducer(todos, action) {
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      return [...todos, newTodo(action.payload.name)];
    case ACTIONS.TOGGLE_TODO:
      return todos.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, complete: !todo.complete };
        }
        return todo;
      });

    case ACTIONS.DELETE_TODO:
      return todos.filter((todo) => todo.id !== action.payload.id);

    default:
      return todos;
  }
}

function newTodo(name) {
  return { id: Date.now(), name: name, complete: false };
}

const ReactUseReducer = () => {
  /* const [state, dispatch] = useReducer(reducer, { count: 0 });*/
  /*dispatch what we call to update the state so call the function reducer*/
  const [todos, dispatch] = useReducer(reducer, []);
  const [name, setName] = useState(" ");

  function handleSubmit(e) {
    e.preventDefault();
    dispatch({ type: ACTIONS.ADD_TODO, payload: { name: name } });
    /*the payload passes the name obtained from the input to the function reducerFDorm newTodo*/
    setName(" ");
  }
  /*
  function increment() {
    dispatch({ type: "increment" });
  }

  function decrement() {
    dispatch({ type: "decrement" });
  }*/

  console.log(todos);

  return (
    <ReactUseReducerWrapper>
      <h2 className="headerSection">UseReducer WebDevSimplified</h2>
      <p>
        {" "}
        The dispatch is gonna update the State so the in this case the dispatch
        type is increment linked to the case "increment returns the count state
        +1. in the useReducer you call the funcion reducer and state is an
        object count:0
      </p>
      <button /*onClick={decrement}*/>-</button>
      {/*<span> {state.count}</span>*/}
      <button /*onClick={increment}*/>+</button>
      <p>Form exemple</p>
      <p>
        {" "}
        /*the payload passes the name obtained from the input to the function
        reducer Form newTodo*/
      </p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></input>
      </form>
      {todos.map((todo) => {
        return <Todo key={todo.id} todo={todo} dispatch={dispatch} />;
      })}
    </ReactUseReducerWrapper>
  );
};

const ReactUseReducerWrapper = styled.section`
  margin: 20px;

  & .headerSection {
    position: relative;
    font-weight: bold;
    font-size: 3rem;
    color: var(--color-white);

    &.headerSection:after {
      content: "";
      display: block;
      height: 2px;
      width: 170px;
      transform: translate3d(255%, -0.9rem, 0);
      background: white;
    }
  }

  & p {
    margin: 20px 0px;
  }
  & button {
    margin: 20px 0px;
    padding: 5px 10px;
    box-shadow: 0px 0px 10px black;
  }
  & span {
    margin: 10px;
  }
`;

export default ReactUseReducer;
