import React from "react";
import "./dock.scss";
import { github } from "react-syntax-highlighter/dist/esm/styles/hljs";
import Cli from "./Windows/Cli";
import Note from "./Windows/Note";
import { resume } from "react-dom/server";
import Spotify from "./Windows/Spotify";

const Dock = ({ windowState, setwindowState }) => {
  return (
    <footer className="dock">
      <div 
      onClick={()=>{
        window.open("https://calendar.google.com/","_blank")
      }}
      className="dock-icon calender">
        <img src="/Dock-icons/calender.svg" alt="" />
        <p className="label">Calender</p>
      </div>
      <div
        onClick={() => {
          setwindowState((state) => ({ ...state, github: true }));
        }}
        className="dock-icon github"
      >
        <img src="/Dock-icons/github.svg" alt="" />
        <p className="label">Git Hub</p>
      </div>
      <div 
      onClick={()=>{
        window.open("https://www.linkedin.com/in/soham-bangar-b8507834a/","_blank")
      }}
      className="dock-icon link">
        <img src="/Dock-icons/link.svg" alt="" />
        <p className="label">Link</p>
      </div>
      <div 
      onClick={()=>{
        window.open("mailto:sohambangar188@gmail.com", "_blank")  
      }}
      className="dock-icon mail">
        <img src="/Dock-icons/mail.svg" alt="" />
        <p className="label">Mail</p>
      </div>
      <div
        onClick={() => {
          setwindowState((state) => ({ ...state, cli: true }));
        }}
        className="dock-icon cli"
      >
        <img src="/Dock-icons/cli.svg" alt="" />
        <p className="label">Cli</p>
      </div>
      <div
        onClick={() => {
          setwindowState((state) => ({ ...state, note: true }));
        }}
        className="dock-icon note"
      >
        <img src="/Dock-icons/note.svg" alt="" />
        <p className="label">Notes</p>
      </div>
      <div
        onClick={() => {
          setwindowState((state) => ({ ...state, resume: true }));
        }}
        className="dock-icon pdf"
      >
        <img src="/Dock-icons/pdf.svg" alt="" />
        <p className="label">Pdf</p>
      </div>
      <div
        onClick={() => {
          setwindowState((state) => ({ ...state, spotify: true }));
        }}
        className="dock-icon spotify"
      >
        <img src="/Dock-icons/spotify.svg" alt="" />
        <p className="label">Spotify</p>
      </div>
    </footer>
  );
};

export default Dock;
