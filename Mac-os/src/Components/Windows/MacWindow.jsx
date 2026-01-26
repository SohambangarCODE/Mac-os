import React from "react";
import { Rnd } from "react-rnd";
import "./Windows.scss";

const MacWindow = (props) => {
  return (
    <Rnd>
      <div className="window">
        <div className="nav">
          <div className="dots">
            <div className="dot red"></div>
            <div className="dot yellow"></div>
            <div className="dot green"></div>
          </div>
          <div className="title">
            <p>sohambangar - zsh</p>
          </div>
        </div>

        <div className="main-content">{props.children}</div>
      </div>
    </Rnd>
  );
};

export default MacWindow;
