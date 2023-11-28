import React from "react";
import styled from "styled-components";
import { useEffect, useState, useContext } from "react";
import { NavLink } from "react-router-dom";

const ReactUseContext = () => {
  return (
    <ReactUseContextWrapper>
      {" "}
      <h2 className="headerSection">UseContext</h2>
    </ReactUseContextWrapper>
  );
};

const ReactUseContextWrapper = styled.section`
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
      transform: translate3d(100%, -0.9rem, 0);
      background: white;
    }
  }
`;

export default ReactUseContext;
