import React from "react";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const ReactUseState = () => {
  const [state, setState] = useState({ count: 4, theme: "blue" });
  const count = state.count;
  const theme = state.theme;

  function minusCount() {
    setState((prevState) => {
      return { ...prevState, count: prevState.count - 1 };
    });
  }

  function addCount() {
    setState((prevState) => {
      return { count: prevState.count + 1 };
    });
  }

  /*  const [count, setCount] = useState(() => {
    console.log("function runs 1 time when the function version is used");
    return 4;
  });

function countInitial() {
      console.log("runs everytime it's render");
    return 4;
  }
   const [count, setCount] = useState(countInitial());
   OR
   const [count, setCount] = useState(4,  console.log("runs everytime it's render"););
    

  function minusCount() {
    setCount(count - 1);
    setCount((prevCount) => prevCount - 1);
  }

  function addCount() {
   setCount(count +1);
   setCount((prevCount) => prevCount + 1);
  }
 */
  return (
    <ReactUseStateWrapper>
      <h2 className="headerSection">UseState</h2>

      <div className="clickerSection">
        <h3>Clicker!</h3>
        <button className="minusBtn" onClick={minusCount}>
          -
        </button>
        <span className="nb">{count}</span>
        <span className="nb">{theme}</span>
        <button className="plusBtn" onClick={addCount}>
          +
        </button>
      </div>
    </ReactUseStateWrapper>
  );
};

const ReactUseStateWrapper = styled.section`
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
      width: 130px;
      transform: translate3d(100%, -0.9rem, 0);
      background: white;
    }
  }

  & .clickerSection {
    box-shadow: 0px 0px 10px red;
    & h3 {
      font-size: 2rem;
      margin: 40px 0px;
    }
    & .minusBtn,
    .plusBtn {
      padding: 10px;
      border: 1px solid white;
    }

    & .nb {
      margin: 0px 20px;
    }

    & button:hover {
      box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
        rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
        rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
    }
  }
`;

export default ReactUseState;
