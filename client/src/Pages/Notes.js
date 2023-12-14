import React from "react";
import styled from "styled-components";
import { useEffect, useState, useContext } from "react";

const Notes = () => {
  return (
    <NotesWrapper>
      <h2 className="headerSection">Notes</h2>
      <div className="pushGit">
        <p>Need To Push into github.IO</p>
        <p>1- Npm Run Build or yarn build</p>
        <p>2- pass the build from your project to the Io Folder</p>
        <p>3- go back to the folder through the terminal cd...</p>
        <p>4- git add --all</p>
        <p>5- ~$git commit -m "Initial commit"</p>
        <p>6- ~$git push -u origin main</p>
      </div>
    </NotesWrapper>
  );
};

const NotesWrapper = styled.section`
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
      width: 170px;
      transform: translate3d(100%, -0.9rem, 0);
      background: white;
    }
  }

  .pushGit {
    margin: 40px 0px;
  }
`;

export default Notes;
