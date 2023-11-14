import React from "react";
import styled from "styled-components";
import HeroVideo from "./assets/garden.jpg";
import reactLogo from "./assets/logo512.png";
import Sandbox from "./Sandbox.js";

const Home = () => {
  return (
    <>
      <HomeWrapper>
        <img className="bg" src={HeroVideo} alt="hero-video" />
        <div className="container">
          <div className="heroText">
            <div className="text">
              <h2>
                <img src={reactLogo} />
                <span>REACT</span> Sandbox | Notes
              </h2>
              <p>
                The Journey of a thousand miles begins with{" "}
                <span> One Step.</span>
              </p>
              <p>- Lao Tzu</p>
            </div>
          </div>
        </div>
      </HomeWrapper>
      <Sandbox />
    </>
  );
};

export default Home;

const HomeWrapper = styled.section`
  position: relative;
  height: 100vh;
  width: 100vw;
  padding: 15px;

  & .bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  & .container {
    height: 100%;
    width: 100%;
    /* From https://css.glass */
    background: rgba(255, 255, 255, 0.15);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5.5px);
    -webkit-backdrop-filter: blur(9.5px);
    border: 1px solid rgba(255, 255, 255, 0.3);
    color: var(--color-white);

    .heroText {
      position: relative;
      display: flex;
      flex-direction: column;
      top: 350px;
      left: 50px;
      padding-left: var(--padding-portfolio);

      .text {
        max-width: 600px;
      }

      h2 {
        display: flex;
        font-size: 40px;
        letter-spacing: 5px;

        span {
          color: var(--color-primary);
        }
        img {
          height: 50px;
          width: 50px;
        }
      }
      p {
        font-size: 25px;
        color: white;
        span {
          font-size: 27px;
          text-shadow: rgba(216, 179, 144, 0.5) 1px 0 10px;
          color: var(--color-primary);
        }
      }
    }
  }
`;
