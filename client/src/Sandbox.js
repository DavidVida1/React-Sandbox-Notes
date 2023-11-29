import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { CiUser } from "react-icons/ci";
import bg2 from "./assets/garden2.png";
import navData from "./Data/data.js";

const Sandbox = () => {
  const [navState, setNavState] = useState(() => {
    return 0;
  });

  const handleNavClick = (index) => {
    setNavState(index);
  };

  const openNav = () => {
    let sidebar = document.querySelector(".sidebar");

    sidebar.classList.toggle("active");
  };

  return (
    <SandboxWrapper>
      <img src={bg2} alt="bgImg" />
      <nav className="sidebar">
        <div className="user">
          <p className="name">
            <CiUser />
            0wlAlone
          </p>
          <button
            className="burger"
            onClick={() => {
              openNav();
            }}
          >
            &#9776;
          </button>
        </div>

        <ComponentLink>
          {navData.map((navEle, index) => {
            return (
              <>
                <button
                  onClick={() => {
                    handleNavClick(index);
                  }}
                >
                  <p>{navEle.icon}</p>
                  <p className="name">{navEle.name}</p>
                </button>
              </>
            );
          })}
        </ComponentLink>
      </nav>

      <div className="container">
        <div>{navData[navState].navComponent}</div>
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

  &:has(.sidebar.active) {
    grid-template-columns: 78px auto;
  }

  & img {
    position: absolute;
    object-fit: cover;
    height: 100%;
    width: 100%;
    z-index: -1;
  }
  & .sidebar {
    width: 275px;
    text-align: center;
    height: 100%;
    background: rgba(0, 0, 0, 0.35);
    border-radius: 3px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(9.5px);
    -webkit-backdrop-filter: blur(9.5px);
    color: var(--color-white);
    padding: 15px 15px;
    font-size: 2rem;

    & .user {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      font-size: 2rem;
      padding: 30px 0px;
      & svg {
        margin-right: 15px;
      }
    }

    &.active {
      width: 78px;
      & .name {
        display: none;
      }
    }
  }

  & .container {
    font-size: 2rem;
    margin: 15px 15px;

    & img {
      position: relative;
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

  & button {
    display: flex;
    flex-direction: row;
    padding: 15px 0px;

    &:hover {
      width: 100%;
      background: rgba(255, 255, 255, 0.45);
      border-radius: 3px;
      box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
      backdrop-filter: blur(9.5px);
      -webkit-backdrop-filter: blur(9.5px);
    }
  }
  & svg {
    margin-right: 15px;
  }
`;

export default Sandbox;
