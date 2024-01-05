import React, { useEffect, useState } from "react";
import watch from "../assets/watch.png";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { CiMenuBurger } from "react-icons/ci";
import { useGSAP } from "@gsap/react";
import TweenMax from "gsap/gsap-core";
import Expo from "gsap";
import Power3 from "gsap";

import styled from "styled-components";

export default function GSAPANimation() {
  useGSAP(() => {
    TweenMax.from(".logo", 1, {
      opacity: 0,
      x: -20,
      ease: Expo.easeInOut,
    });

    TweenMax.from(".search", 1, {
      opacity: 0,
      delay: 0.5,
      x: -20,
      ease: Expo.easeInOut,
    });

    TweenMax.from(".menu", 1, {
      opacity: 0,
      delay: 0.6,
      x: -20,
      ease: Expo.easeInOut,
    });

    TweenMax.from(".title", 1, {
      opacity: 0,
      delay: 1,
      y: 20,
      ease: Expo.easeInOut,
    });

    TweenMax.from(".btn", 1, {
      opacity: 0,
      delay: 1.6,
      y: 20,
      ease: Expo.easeInOut,
    });

    TweenMax.from(".line-one", 1, {
      opacity: 0,
      delay: 2,
      y: -800,
      ease: Expo.easeInOut,
    });
    TweenMax.from(".line-two", 1, {
      opacity: 0,
      delay: 2.5,
      y: -800,
      ease: Expo.easeInOut,
    });

    TweenMax.from(".img", 2, {
      opacity: 0,
      delay: 2.9,
      y: -800,
      ease: Expo.easeInOut,
    });

    TweenMax.from(".year", 1, {
      opacity: 0,
      delay: 1.4,
      y: -20,
      ease: Expo.easeInOut,
    });
  }, []);
  return (
    <GSAPAnimation>
      <h2 className="headerSection">GSAPAnimation</h2>

      <section className="container">
        <article className="stripes">
          <div className="line-one"></div>
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
            <FaSearch />
          </div>
          <div className="menu">
            <CiMenuBurger />
          </div>
        </nav>
        {/*==================misc======================================*/}
        <div className="img">
          <img src={watch} alt="" />
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
              <FaFacebookF />
            </li>
            <li>
              <FaInstagram />
            </li>
            <li>
              <FaTwitter />
            </li>
          </ul>
        </aside>
      </section>
    </GSAPAnimation>
  );
}

const GSAPAnimation = styled.section`
  font-family: "Poppins", sans-serif;

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
  & .container {
    height: 90vh;
    width: 100%;
    overflow: hidden;
    background-color: white;
    border-radius: 5px;
    box-shadow: inset rgba(0, 0, 0, 0.25) 0px 54px 55px,
      rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
      rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;

    & .stripes {
      position: relative;
      & .line-one {
        position: absolute;
        width: 15px;
        height: 100vh;
        background: #ff3131;
        left: 23%;
      }
      & .line-two {
        position: absolute;
        width: 25px;
        height: 100vh;
        background: #183d79;
        left: 25%;
      }
    }

    & nav {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      padding: 5px 0;
      width: 100%;
      color: #000;
      z-index: 2;

      & .logo {
        position: relative;
        left: 80px;
        font-weight: bold;
        text-transform: uppercase;
        color: #000;
      }
      & ul {
        flex: 1;
        text-align: right;
        padding-right: 270px;

        & li {
          display: inline-block;
          list-style: none;
          margin: 10px 30px;

          & a {
            color: #000;
            text-decoration: none;
            position: relative;
            text-transform: uppercase;
            font-size: 1.4rem;
            &::after {
              content: "";
              width: 0;
              height: 3px;
              position: absolute;
              bottom: -5px;
              left: 50%;
              transform: translateX(-50%);
              background-color: #ff3131;
              transition: width 0.4s;
            }
            &:hover::after {
              width: 100%;
            }
          }
        }
      }

      & .search {
        position: fixed;
        right: 160px;
      }

      & .menu {
        position: fixed;
        right: 100px;
      }
    }

    & .img img {
      position: relative;
      width: 450px;
      left: 8.5%;
      top: -20px;
    }

    & .title {
      position: fixed;
      position: absolute;
      top: 276px;
      left: 43%;
      line-height: 1;
      font-size: 10rem;
      font-weight: 700;
      letter-spacing: -6px;

      p {
        font-size: 2.5rem;
        font-weight: 300;
        color: grey;
        text-transform: uppercase;
        left: 150px;
        letter-spacing: 10px;
      }
      span {
        color: black;
      }
    }
    & .btn a {
      position: relative;
      text-decoration: none;
      bottom: 240px;
      right: -50%;
      text-transform: uppercase;
      background: #ff3131;
      color: white;
      padding: 10px 20px;
      border-radius: 4px;
      transition: 0.4s;

      &:hover {
        background: black;
        color: white;
      }
    }

    & .year {
      font-weight: 700;
      position: relative;
      bottom: 150px;
      left: 200px;
      padding: 10px 30px;
      color: black;
    }
    & .media {
      color: black;

      & ul {
        list-style: none;
        position: fixed;
        right: 20px;
        top: 63%;
        padding: 10px 10px;

        & li {
          font-size: 1.8rem;
          margin: 24px 0;
          transition: 0.3s;

          &:hover {
            transform: scale(1.8);
          }
        }
      }
    }
  }
`;
