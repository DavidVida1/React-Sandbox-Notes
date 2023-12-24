import React, { useEffect, useState } from "react";
import styled from "styled-components";

export default function Scroll() {
  useEffect(() => {
    window.addEventListener("scroll", reveal);

    function reveal() {
      var reveals = document.querySelectorAll(".reveal");

      reveals.forEach((reveal) => {
        var windowHeight = window.innerHeight;
        var revealTop = reveal.getBoundingClientRect().top;
        var revealPoint = 150;

        if (revealTop < windowHeight - revealPoint) {
          reveal.classList.add("active");
        } else {
          reveal.classList.remove("active");
        }
      });
    }

    /*
for (var i =0; i < reveals.length; i++){
          var windowHeight = window.innerHeight;
        var revealTop = reveals[i].getBoundingClientRect().top;
        var revealPoint = 150;

        if(revealTop< windowHeight - revealPoint){
reveals[i].classList.add("active");
        }
        else{
          reveals[i].classList.remove("active");
        }
        }
}
*/
  });

  return (
    <ScrollWrapper>
      <h2 className="headerSection">Scroll Effect</h2>

      <div className="RevealWrapper">
        <section>
          <h1>Reveal Elements On Scroll</h1>
        </section>

        <section>
          <div className="container reveal">
            <h2>Your Title</h2>
            <div className="cards">
              <div className="text-card">
                <h3>title</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vivamus porta eros quis eros scelerisque, eget lacinia sem
                  bibendum
                </p>
              </div>
              <div className="text-card">
                <h3>title</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vivamus porta eros quis eros scelerisque, eget lacinia sem
                  bibendum
                </p>
              </div>
              <div className="text-card">
                <h3>title</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vivamus porta eros quis eros scelerisque, eget lacinia sem
                  bibendum
                </p>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="container reveal">
            <h2>Your Title</h2>
            <div className="cards">
              <div className="text-card">
                <h3>title</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vivamus porta eros quis eros scelerisque, eget lacinia sem
                  bibendum
                </p>
              </div>
              <div className="text-card">
                <h3>title</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vivamus porta eros quis eros scelerisque, eget lacinia sem
                  bibendum
                </p>
              </div>
              <div className="text-card">
                <h3>title</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vivamus porta eros quis eros scelerisque, eget lacinia sem
                  bibendum
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </ScrollWrapper>
  );
}

const ScrollWrapper = styled.section`
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

  & .RevealWrapper {
    & section {
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 100vh;

      & .reveal {
        position: relative;
        transform: translateY(150px);
        opacity: 0;
        transition: all 2s ease;

        &.active {
          transform: translateY(0px);
          opacity: 1;
        }
      }
      &:nth-child(1) {
        color: #fff;
      }

      &:nth-child(2) {
        color: #1d212b;
        background: #fff;
      }

      &:nth-child(3) {
        background: #1d212b;
      }

      &:nth-child(4) {
        color: #1d212b;
        background: #fff;
      }

      & .container {
        margin: 100px;
      }

      & h1 {
        font-size: 6rem;
      }

      & h2 {
        font-size: 4rem;
        text-align: center;
        text-transform: uppercase;
      }

      & .cards {
        display: flex;

        & .text-card {
          background: #2696e9;
          margin: 20px;
          padding: 20px;

          & h3 {
            font-size: 3rem;
            text-align: center;
            text-transform: uppercase;
            margin-bottom: 10px;
          }
        }
      }
    }

    @media (max-width: 900px) {
      section {
        & h1 {
          font-size: 4rem;
        }

        & .cards {
          flex-direction: column;
        }
      }
    }
  }
`;
