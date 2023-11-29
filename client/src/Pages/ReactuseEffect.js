import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const ReactUseEffect = () => {
  const [ressourceType, setRessourceType] = useState("posts");
  const [items, setItems] = useState([]);
  const [windowWidth, setwindowWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setwindowWidth(window.innerWidth);
  };

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${ressourceType}`)
      .then((response) => response.json())
      .then((json) => setItems(json));
  }, [ressourceType]);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      /* return in useEffect is a cleamUp so always have one when an addEventListener is at use
      so you dont constantly re add */
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <ReactUseEffectWrapper>
      <h2 className="headerSection">UseEffect</h2>

      <div className="containerDevSimplified">
        <button onClick={() => setRessourceType("posts")}>Posts</button>
        <button onClick={() => setRessourceType("users")}>users</button>
        <button onClick={() => setRessourceType("comments")}>Comments</button>
        <button>{windowWidth}</button>
      </div>
      <h2>{ressourceType}</h2>
      {items.map((item) => {
        return <pre>{JSON.stringify(item)}</pre>;
      })}
    </ReactUseEffectWrapper>
  );
};

const ReactUseEffectWrapper = styled.section`
  margin: 20px;

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

  & .containerDevSimplified {
    margin: 40px 0px;
    & button {
      margin: 0px 10px;
      padding: 10px;
      border-radius: 3px;

      &:hover {
        box-shadow: 0px 0px 10px black;
      }
    }
  }
`;

export default ReactUseEffect;
