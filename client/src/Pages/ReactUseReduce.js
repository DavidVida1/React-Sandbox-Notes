import React from "react";
import styled from "styled-components";
import { useState, useReducer } from "react";

/*CAPS CAUSE GLOBAL NON CHANGING VARIABLE */
const ACTIONS = {
  INCREMENT: "increment",
  DECREMENT: "decrement",
};

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.INCREMENT:
      return { count: state.count + 1 };
    case ACTIONS.DECREMENT:
      return { count: state.count - 1 };
    default:
      return state;
  }
}
const ReactUseReducer = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  function increment() {
    dispatch({ type: "increment" });
  }

  function decrement() {
    dispatch({ type: "decrement" });
  }

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
      <button onClick={decrement}>-</button>
      <span> {state.count}</span>
      <button onClick={increment}>+</button>
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
