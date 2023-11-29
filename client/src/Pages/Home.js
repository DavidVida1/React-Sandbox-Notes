import React from "react";
import styled from "styled-components";
import reactLogo from "../assets/logo512.png";

const Home = () => {
  return (
    <>
      <HomeWrapper>
        <div className="HomeContainer">
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
    </>
  );
};

export default Home;

const HomeWrapper = styled.section`
  position: relative;
  height: 100%;
  width: 100%;

  & .HomeContainer {
    height: 100%;
    width: 100%;
    color: var(--color-white);

    & .heroText {
      position: relative;
      display: flex;
      flex-direction: column;
      top: 350px;
      left: 50px;
      padding-left: var(--padding-portfolio);

      & .text {
        max-width: 600px;
        p:last-child {
          color: #00a86b;
          filter: drop-shadow(0.1rem 0px 0px rgba(0, 0, 0, 0.5))
            drop-shadow(-0.1rem 0px 0px rgba(0, 0, 0, 0.5))
            drop-shadow(0px 0.1rem 0px rgba(0, 0, 0, 0.5))
            drop-shadow(0px -0.1rem 0px rgba(0, 0, 0, 0.5));
        }
      }

      & h2 {
        display: flex;
        font-size: 4.5rem;
        letter-spacing: 5px;

        & span {
          color: var(--color-primary);
          filter: drop-shadow(0.1rem 0px 0px rgba(0, 0, 0, 0.5))
            drop-shadow(-0.1rem 0px 0px rgba(0, 0, 0, 0.5))
            drop-shadow(0px 0.1rem 0px rgba(0, 0, 0, 0.5))
            drop-shadow(0px -0.1rem 0px rgba(0, 0, 0, 0.5));
        }
        & img {
          position: relative;
          height: 50px;
          width: 50px;
          filter: drop-shadow(0.1rem 0px 0px rgba(0, 0, 0, 0.5))
            drop-shadow(-0.1rem 0px 0px rgba(0, 0, 0, 0.5))
            drop-shadow(0px 0.1rem 0px rgba(0, 0, 0, 0.5))
            drop-shadow(0px -0.1rem 0px rgba(0, 0, 0, 0.5));
        }
      }
      & p {
        font-size: 2.5rem;
        color: white;
        & span {
          font-size: 27px;
          color: var(--color-primary);
          filter: drop-shadow(0.1rem 0px 0px rgba(0, 0, 0, 0.5))
            drop-shadow(-0.1rem 0px 0px rgba(0, 0, 0, 0.5))
            drop-shadow(0px 0.1rem 0px rgba(0, 0, 0, 0.5))
            drop-shadow(0px -0.1rem 0px rgba(0, 0, 0, 0.5));
        }
      }
    }
  }
`;
