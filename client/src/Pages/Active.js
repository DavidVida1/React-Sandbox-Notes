import React, { useEffect, useState } from "react";

import styled from "styled-components";

export default function Active() {
  useEffect(() => {
    let btnContainer = document.getElementById("myDIV");

    let btns = btnContainer.querySelectorAll(".btn");

    btns.forEach((btnActive) => {
      btnActive.addEventListener("click", function () {
        let current = document.querySelectorAll(".active");

        current[0].classList.remove("active");
        btnActive.classList.add("active");

        /* current[0].className = current[0].className.replace(" active", "");
        this.className += " active";*/
      });
    });
  }, []);

  return (
    <ActiveWrapper>
      <h2 className="headerSection">Active</h2>
      <div id="myDIV">
        <button className="btn">1</button>
        <button className="btn active">2</button>
        <button className="btn">3</button>
        <button className="btn">4</button>
        <button className="btn">5</button>
      </div>
    </ActiveWrapper>
  );
}

const ActiveWrapper = styled.section`
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
      transform: translate3d(100%, -0.9rem, 0);
      background: white;
    }
  }
  .btn {
    margin: 3px;
    border: none;
    outline: none;
    padding: 10px 16px;
    background-color: BLACK;
    cursor: pointer;
  }

  .active,
  .btn:hover {
    background-color: #666;
    color: white;
  }
`;
