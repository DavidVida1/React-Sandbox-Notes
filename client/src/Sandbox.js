import React from "react";
import styled from "styled-components";
import { useState } from "react";
import bg from "./assets/garden.jpg";
import bg2 from "./assets/garden2.png";
import navData from "./Data/data.js";

const Sandbox = () => {
  const [navState, setNavState] = useState(() => {
    return 0;
  });

  const handleNavClick = (index) => {
    setNavState(index);
  };

  return (
    <SandboxWrapper>
      <img src={bg2} alt="bgImg" />
      <nav>
        <ComponentLink>
          {navData.map((navEle, index) => {
            return (
              <>
                <p
                  onClick={() => {
                    handleNavClick(index);
                  }}
                >
                  {navEle.icon}
                  {navEle.name}
                </p>
              </>
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
  grid-template-columns: 275px auto;
  height: 100vh;
  width: 100vw;
  color: var(--color-white);

  & img {
    position: absolute;
    object-fit: cover;
    height: 100%;
    width: 100%;
    z-index: -1;
  }
  & nav {
    height: 100%;
    background: rgba(0, 0, 0, 0.35);
    border-radius: 3px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(9.5px);
    -webkit-backdrop-filter: blur(9.5px);
    color: var(--color-white);
  }

  & .container {
    font-size: 2rem;
    padding: 0px 15px;
    & img {
      max-height: 900px;
      width: auto;
    }
  }
`;

const ComponentLink = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex-wrap: wrap;
  color: var(--color-white);
  & p {
    padding: 15px 30px;
    font-size: 2rem;
    &:first-child {
      color: red;
    }
  }
  & svg {
    margin: 0px 15px;
  }
`;

export default Sandbox;
