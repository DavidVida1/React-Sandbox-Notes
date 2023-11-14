import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const ReactUseEffect = () => {
  return (
    <ReactUseStateWrapper>
      <h2 className="headerSection">UseEffect</h2>

      <p>Hello Worlds</p>
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
`;

export default ReactUseEffect;
