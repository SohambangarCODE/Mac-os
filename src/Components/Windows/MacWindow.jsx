import React from "react";
import { Rnd } from "react-rnd";
import "./Windows.scss";

const MacWindow = ({children,width="40vw",height="40vh",x=200,y=100,windowName, setwindowState}) => {
  return (
    <Rnd
    default={{
      width: width,
      height: height,
      x: x,
      y: y
    }}
    >
      <div className="window">
        <div className="nav">
          <div className="dots">
            <div 
            onClick={()=>{
              setwindowState(state=>({...state, [windowName]:false}))
            }}
            className="dot red"></div>
            <div className="dot yellow"></div>
            <div className="dot green"></div>
          </div>
          <div className="title">
            <p>sohambangar - zsh</p>
          </div>
        </div>

        <div className="main-content">{children}</div>
      </div>
    </Rnd>
  );
};

export default MacWindow;
