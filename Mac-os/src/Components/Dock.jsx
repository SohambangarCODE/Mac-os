import React from "react";
import "./dock.scss";

const Dock = () => {
  return (
    <footer className="dock">
      <div className="dock-icon calender">
        <img src="/Dock-icons/calender.svg" alt="" />
        <p className="label">Calender</p>
      </div>
      <div className="dock-icon github">
        <img src="/Dock-icons/github.svg" alt="" />
        <p className="label">Git Hub</p>
      </div>
      <div className="dock-icon link">
        <img src="/Dock-icons/link.svg" alt="" />
        <p className="label">Link</p>
      </div>
      <div className="dock-icon mail">
        <img src="/Dock-icons/mail.svg" alt="" />
        <p className="label">Mail</p>
      </div>
      <div className="dock-icon cli">
        <img src="/Dock-icons/cli.svg" alt="" />
        <p className="label">Cli</p>
      </div>
      <div className="dock-icon note">
        <img src="/Dock-icons/note.svg" alt="" />
        <p className="label">Notes</p>
      </div>
      <div className="dock-icon pdf">
        <img src="/Dock-icons/pdf.svg" alt="" />
        <p className="label">Pdf</p>
      </div>
      <div className="dock-icon spotify">
        <img src="/Dock-icons/spotify.svg" alt="" />
        <p className="label">Spotify</p>
      </div>
    </footer>
  );
};

export default Dock;
