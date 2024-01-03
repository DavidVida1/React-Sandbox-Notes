import React, { useEffect, useState } from "react";
import styled from "styled-components";

export default function Burger() {
  useEffect(() => {
    let menu = document.getElementById("menu");
    let menu2 = document.getElementById("menu2");

    menu.onclick = function () {
      menu.classList.toggle("openMenu");
    };

    menu2.onclick = function () {
      menu2.classList.toggle("openMenu2");
    };
  });
  return (
    <BurgerContainer>
      <h2 className="headerSection">Scroll Burger</h2>
      <section className="burgerWrapper">
        <div className="menu" id="menu">
          <div>
            <span className="line-1"></span>
            <span className="line-2"></span>
            <span className="line-3"></span>
          </div>
        </div>

        <div className="menu2" id="menu2">
          <div>
            <span className="line-1"></span>
            <span className="line-2"></span>
            <span className="line-3"></span>
          </div>
        </div>
      </section>
    </BurgerContainer>
  );
}

const BurgerContainer = styled.section`
  margin: 20px;

  & .headerSection {
    position: relative;
    font-weight: bold;
    font-size: 3rem;
    color: var(--color-white);
    margin-bottom: 40px;

    &.headerSection:after {
      content: "";
      display: block;
      height: 2px;
      width: 130px;
      transform: translate3d(150%, -0.9rem, 0);
      background: white;
    }
  }

  & .burgerWrapper {
    width: 100%;
    height: 100vh;
    background: #0d0024;
    display: flex;
    align-items: center;
    justify-content: center;

    & .menu,
    .menu2 {
      width: 200px;
      height: 200px;
      margin: 8%;
      background-image: linear-gradient(to right, #e91e63, #f44336);
      border-radius: 5px;
      cursor: pointer;
    }

    & .menu div,
    .menu2 div {
      width: 120px;
      height: 120px;
      margin: 40px;
      position: relative;
    }

    & .menu span,
    .menu2 span {
      background: #fff;
      width: 100%;
      height: 10px;
      border-radius: 5px;
      display: block;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      transition: transform 0.5s, width 0.5s;
    }

    .menu .line-1 {
      transform: translate(-50%, -50px);
    }

    .menu .line-3 {
      transform: translate(-50%, 40px);
    }

    .menu2 .line-1 {
      width: 50%;
      transform: translate(-100%, -50px);
      transform-origin: 0 0;
    }
    .menu2 .line-3 {
      width: 50%;
      left: auto;
      right: 0;
      transform: translate(0, 40px);
      transform-origin: 100% 0;
    }

    .openMenu .line-1 {
      transform: translate(-50%, -50%) rotate(-45deg);
    }
    .openMenu .line-3 {
      transform: translate(-50%, -50%) rotate(45deg);
    }
    .openMenu .line-2 {
      width: 0;
    }

    .openMenu2 .line-1 {
      transform: translate(0, 0) rotate(-45deg);
    }
    .openMenu2 .line-3 {
      transform: translate(-100%, 0) rotate(-45deg);
    }

    .openMenu2 .line-2 {
      transform: translate(-50%, -50%) rotate(45deg);
    }
  }
`;
