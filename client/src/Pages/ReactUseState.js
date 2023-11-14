import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const ReactUseState = () => {
  return (
    <ReactUseStateWrapper>
      <h2 className="headerSection">UseState</h2>

      <div className="clickerSection">
        <h3>Clicker!</h3>
        <button className="minusBtn">-</button>
        <span className="nb">0</span>
        <button className="plusBtn">+</button>
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
