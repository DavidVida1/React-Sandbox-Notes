import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import ReactUseStateWrapper from "./Pages/ReactUseState";
import navData from "./Data/data.js";
import ReactUseState from "./Pages/ReactUseState";

const Sandbox = () => {
  const [navState, setNavState] = useState(() => {
    return 0;
  });

  const handleNavClick = (index) => {
    setNavState(index);
  };

  return (
    <SandboxWrapper>
      <nav>
        <ComponentLink>
          {navData.map((navEle, index) => {
            return (
              <p
                onClick={() => {
                  handleNavClick(index);
                }}
              >
                {navEle.name}
              </p>
            );
          })}
        </ComponentLink>
      </nav>

      <div className="container">
        {navData[navState].navComponent}
        <img src={navData[navState].img} />
      </div>
    </SandboxWrapper>
  );
};

const SandboxWrapper = styled.section`
  display: grid;
  grid-template-columns: 250px auto;
  height: 100vh;
  width: 100vw;
  gap: 10px;
  padding: 15px;
  color: var(--color-white);

  & .container,
  nav {
    background: rgba(255, 255, 255, 0.15);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(9.5px);
    -webkit-backdrop-filter: blur(9.5px);
    border: 1px solid rgba(255, 255, 255, 0.3);
    color: var(--color-white);
  }

  & .container {
    padding: 15px;
    font-size: 2rem;
    & img {
      max-height: 900px;
      width: auto;
    }
  }
  & nav {
    height: 50vh;
    align-self: center;
  }
`;

const ComponentLink = styled.div`
  height: 50vh;
  align-self: center;
  color: var(--color-white);

  & p {
    padding: 10px;
    text-align: center;
    font-size: 2rem;
  }
`;

export default Sandbox;
