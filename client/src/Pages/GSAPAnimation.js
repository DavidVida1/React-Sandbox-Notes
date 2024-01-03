import React, { useEffect, useState } from "react";
import styled from "styled-components";

export default function GSAPANimation() {
  return (
    <GSAPAnimation>
      <h2 className="headerSection">GSAPAnimation</h2>

      <section className="container">
        <article className="stripes">
          <div class="line-one"></div>
          <div className="line-two"></div>
        </article>
        {/*==================navbar======================================*/}

        <nav>
          <div className="logo">
            <span>Omega</span>
          </div>
          <ul>
            <li>
              <a href="">collection</a>
            </li>
            <li>
              <a href="">products</a>
            </li>
            <li>
              <a href="">offers</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
          </ul>
          <div className="search">
            <i className="fa fa-search"></i>
          </div>
          <div className="menu">
            <i className="fa fa-bars"></i>
          </div>
        </nav>
        {/*==================misc======================================*/}
        <div className="img">
          <img src="watch.png" alt="" />
        </div>

        <div className="title">
          <p>speedmaster</p>
          <span>Moonwatch.</span>
        </div>

        <div className="btn">
          <a href="">Order Now</a>
        </div>

        <div className="year">2022*</div>

        {/*==================media======================================*/}
        <aside className="media">
          <ul>
            <li>
              <i className="fa fa-facebook"></i>
            </li>
            <li>
              <i className="fa fa-instagram"></i>
            </li>
            <li>
              <i className="fa fa-twitter"></i>
            </li>
          </ul>
        </aside>
      </section>
    </GSAPAnimation>
  );
}

const GSAPAnimation = styled.section`
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
      width: 250px;
      transform: translate3d(100%, -0.9rem, 0);
      background: white;
    }
  }
`;
