import React from "react";
import styled from "styled-components";

export default function Tabs() {
  return (
    <TabsWrapper>
      <h2 className="headerSection">Tabs</h2>

      <div className="tab1Wrapper">
        <div className="tabs">
          <RadioTab pos={0} type="radio" name="tabs" checked id="tab1" />
          <label for="tab1">Project</label>

          <RadioTab pos={1} type="radio" name="tabs" checked id="tab2" />
          <label for="tab2">Employee</label>

          <RadioTab pos={2} type="radio" name="tabs" checked id="tab3" />
          <label for="tab3">Completed</label>
          <div className="glider"></div>
        </div>
      </div>
    </TabsWrapper>
  );
}

const TabsWrapper = styled.section`
  margin: 20px;
  color: black;

  & .headerSection {
    position: relative;
    font-weight: bold;
    font-size: 3rem;
    color: var(--color-white);

    &.headerSection:after {
      content: "";
      display: block;
      height: 2px;
      width: 130px;
      transform: translate3d(100%, -0.9rem, 0);
      background: white;
    }
  }

  & .tab1Wrapper {
    position: relative;
    /*the flex gives the define the width?*/
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: sans-serif;
    width: 100%;
    height: 100%;
    margin: 20px 0px;

    & .tabs {
      display: flex;
      position: relative;
      padding: 10px;
      border-radius: 5rem;
      background: white;
      box-shadow: 0 px 0px 15px 0px rgba(0, 0, 0, 0.1);

      & label {
        display: flex;
        justify-content: center;
        align-items: center;

        height: 55px;
        width: 200px;
        font-size: 2rem;
        font-weight: 500;
        cursor: pointer;
        z-index: 2;
      }

      & .glider {
        position: absolute;
        top: 10px;
        left: 10px;
        background: #e6eef9;
        width: 200px;
        height: 55px;
        border-radius: 3rem;
        transition: ease 0.3s;
      }
    }
  }
`;

const RadioTab = styled.input`
  &:checked ~ .glider {
    transform: translate(${(props) => props.pos * 200}px);
  }

  &[type="radio"] {
    display: none;
  }

  &:checked + label {
    color: #185ee0;
  }
`;
