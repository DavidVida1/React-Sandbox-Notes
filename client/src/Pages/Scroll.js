import React, { useEffect, useState } from "react";
import styled from "styled-components";
import GTA6 from "../assets/GTA6.jpg";
import GTA6Left from "../assets/GTA6Left.png";
import GTA6Right from "../assets/GTA6Right.png";
import watch from "../assets/watch.jpg";

export default function Scroll() {
  useEffect(() => {
    window.addEventListener("scroll", reveal);

    function reveal() {
      let reveals = document.querySelectorAll(".reveal");

      reveals.forEach((reveal) => {
        let windowHeight = window.innerHeight;
        let revealTop = reveal.getBoundingClientRect().top;
        let revealPoint = 150;

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

  useEffect(() => {
    const scrollers = document.querySelectorAll(".scroller");

    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      addAnimation();
    }

    function addAnimation() {
      scrollers.forEach((scroller) => {
        // add data-animated="true" to every `.scroller` on the page
        scroller.setAttribute("data-animated", true);

        // Make an array from the elements within `.scroller-inner`
        const scrollerInner = scroller.querySelector(".scroller__inner");
        const scrollerContent = Array.from(scrollerInner.children);

        // For each item in the array, clone it
        // add aria-hidden to it
        // add it into the `.scroller-inner`
        scrollerContent.forEach((item) => {
          const duplicatedItem = item.cloneNode(true);
          duplicatedItem.setAttribute("aria-hidden", true);
          scrollerInner.appendChild(duplicatedItem);
        });
      });
    }
  });

  return (
    <ScrollWrapper>
      <h2 className="headerSection">Scroll Effect</h2>
      <div className="scroll-watcher"></div>

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

        <section>
          <img className="watchImg" src={watch} />
        </section>

        <div class="scroller" data-speed="fast">
          <ul class="tag-list scroller__inner">
            <li>HTML</li>
            <li>CSS</li>
            <li>JS</li>
            <li>SSG</li>
            <li>webdev</li>
            <li>animation</li>
            <li>UI/UX</li>
          </ul>
        </div>

        <section>
          <article>
            <img className="bg" src={GTA6} />
            <img className="leftTree" src={GTA6Left} />
            <img className="rightTree " src={GTA6Right} />
            <h2>GTA6 - SHYMARO</h2>
          </article>
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

  & .scroll-watcher {
    height: 10px;
    position: fixed;
    top: 0;
    z-index: 1000;
    background-color: lime;
    width: 100%;
    scale: 0 1;
    transform-origin: left;
    animation: scroll-watcher linear;
    animation-timeline: scroll();
  }

  @keyframes scroll-watcher {
    to {
      scale: 1 1;
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

      & .watchImg {
        height: 50%;
        width: 50%;
        border-radius: 5px;
        scale: 0.8;
        opacity: 0;
        animation: fade-Watch linear forwards;
        animation-timeline: view();
        /*animation-range: 250px 500px;*/
        animation-range: entry 100px;
      }
      @keyframes fade-Watch {
        to {
          scale: 1;
          opacity: 1;
        }
      }

      & article {
        position: relative;
        width: 100%;
        height: 100vh;

        & .bg {
          position: absolute;
          width: 100%;
          height: 100%;
          border-radius: 5px;
          z-index: 3;
          background-position: center;
          animation: fade-in cubic-bezier(0.22, 0.61, 0.36, 1);
          animation-timeline: view();
          /*animation-range-start: cover; as soon as the element is seen, looks like the default
          animation-range-end:contain when the element is leaving at the top*/
        }

        & .leftTree {
          position: absolute;
          width: 50%;
          height: 100%;
          bottom: 0;
          left: -50px;
          z-index: 4;
          animation: fade-in cubic-bezier(0.22, 0.61, 0.36, 1);
          animation-timeline: view();
        }

        & .rightTree {
          position: absolute;
          width: 50%;
          height: 100%;
          right: -225px;
          bottom: 0;
          z-index: 4;
          animation: fade-in cubic-bezier(0.22, 0.61, 0.36, 1);
          animation-timeline: view();
        }

        & h2 {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          color: white;
          z-index: 5;
          font-weight: 600;
          filter: drop-shadow(0.2rem 0px 0px firebrick)
            drop-shadow(-0.2rem 0px 0px firebrick)
            drop-shadow(0px 0.2rem 0px firebrick)
            drop-shadow(0px -0.2rem 0px firebrick);
        }
      }

      @keyframes fade-in {
        from {
          scale: 0.8;
          opacity: 0;
        }
        to {
          scale: 1.2;
          opacity: 1;
        }
      }
      @keyframes fade-in2 {
        from {
          scale: 1;
          opacity: 0.2;
        }
        to {
          scale: 1;
          opacity: 1;
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

    /* side Scroll*/
    .scroller {
      max-width: 700px;
    }
    .scroller__inner {
      padding-block: 1rem;
      display: flex;
      flex-wrap: wrap;
      gap: 1rem;
    }
    .scroller[data-animated="true"] {
      overflow: hidden;
      overflow-x: scroll;
      -webkit-mask: linear-gradient(
        90deg,
        transparent,
        white 20%,
        white 80%,
        transparent
      );
      mask: linear-gradient(
        90deg,
        transparent,
        white 20%,
        white 80%,
        transparent
      );
    }

    .scroller[data-animated="true"] .scroller__inner {
      width: max-content;
      flex-wrap: nowrap;
      animation: scroll var(--_animation-duration, 40s)
        var(--_animation-direction, forwards) linear infinite;
    }

    .scroller[data-direction="right"] {
      --_animation-direction: reverse;
    }

    .scroller[data-direction="left"] {
      --_animation-direction: forwards;
    }

    .scroller[data-speed="fast"] {
      --_animation-duration: 20s;
    }

    .scroller[data-speed="slow"] {
      --_animation-duration: 60s;
    }

    @keyframes scroll {
      to {
        transform: translate(calc(-50% - 0.5rem));
      }
    }

    .tag-list {
      margin: 0;
      padding-inline: 0;
      list-style: none;
    }

    .tag-list li {
      padding: 1rem;
      background: var(--clr-primary-400);
      border-radius: 0.5rem;
      box-shadow: 0 0.5rem 1rem -0.25rem var(--clr-primary-900);
    }
    /* side Scroll*/
  }
`;
