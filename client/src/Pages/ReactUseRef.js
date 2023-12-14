import React from "react";
import styled from "styled-components";
import { useEffect, useState, useContext, useRef } from "react";

const ReactUseRef = () => {
  const [name, setName] = useState("");
  /* const [renderCount, setRenderCount] = useState(0);*/
  const renderCount = useRef(0);
  /*returns an object that looks like this {current:0}*/
  const titleRef = useRef();

  const inputRef = useRef();

  const prevName = useRef(" ");

  function focus() {
    inputRef.current.focus();
    /*inputRef.current.value="some Value
    if you press on focus the value will change to some value*/
  }

  useEffect(function () {
    setTimeout(() => {
      titleRef.current.textContent = "Updated Text";
    }, 500); // Update the content of the element after 2seconds
  }, []);

  useEffect(() => {
    /* setRenderCount((prevRenderCount) => prevRenderCount + 1);
    without the [] it sets up an infinite Loop you wanna avoid that so a useRef could be interesting cause it doesnt reRender when its changed*/
    /*So basically does that mean useRef can be replaced byu UseEffect with the bracket?*/
    renderCount.current = renderCount.current + 1;
  });

  useEffect(() => {
    prevName.current = name;
  }, [name]);

  return (
    <ReactUseRefWrapper>
      <h2 className="headerSection">UseRef WeBDevSimplified</h2>
      <p>
        When you need to store a value that does not trigger a re-render when it
        is updated.
      </p>
      <p>
        When you need to store a value that is not used in the render method.{" "}
      </p>
      <p>
        When you need to store a value that persists for the lifetime of the
        component.
      </p>
      <div className="inputSection">
        <input
          ref={inputRef}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <div>
          My name is {name} and it used to be {prevName.current}
        </div>
        <div>I rendererd {renderCount.current} times</div>
        <button onClick={focus}>Focus</button>
      </div>
      <div className="line"></div>
      <div>Common exemple</div>
      <div className="title" ref={titleRef}>
        Original title
      </div>
    </ReactUseRefWrapper>
  );
};

const ReactUseRefWrapper = styled.section`
  margin: 20px;
  & p {
    margin: 20px;
  }

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
      transform: translate3d(275%, -0.9rem, 0);
      background: white;
    }
  }

  & .inputSection {
    margin: 40px 0px;

    & input {
      margin-bottom: 20px;
    }

    & button {
      margin: 10px 0px;
      box-shadow: 0px 0px 10px black;
      border: 1px solid black;
      border-radius: 3px;
      padding: 10px;

      &:hover {
        transform: scale(1.1);
      }
    }
  }

  & .line:after {
    content: "";
    display: block;
    height: 2px;
    width: 350px;
    background: white;
    margin: 20px 0px;
  }
`;

export default ReactUseRef;
