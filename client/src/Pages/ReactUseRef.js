import React from "react";
import styled from "styled-components";
import { useEffect, useState, useContext } from "react";
import { NavLink } from "react-router-dom";

const ReactUseRef = () => {
  return (
    <ReactUseRefWrapper>
      <h2 className="headerSection">UseRef</h2>
    </ReactUseRefWrapper>
  );
};

const ReactUseRefWrapper = styled.section`
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

export default ReactUseRef;
