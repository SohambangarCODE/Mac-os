import React from "react";
import "./spotify.scss";
import MacWindow from "./MacWindow";

const Spotify = ({ windowName, setwindowState }) => {
  return (
    <MacWindow
      windowName={windowName}
      setwindowState={setwindowState}
      width="25vw"
      height="65vh"
    >
      <div className="spotify-wiindow">
        <iframe
          data-testid="embed-iframe"
          style={{ "border-radius": "12px" }}
          src="https://open.spotify.com/embed/playlist/1vNKG1jZ6QZoa2nkX4zRk1?utm_source=generator&theme=0"
          width="100%"
          height="352"
          frameBorder="0"
          allowfullscreen=""
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
      </div>
    </MacWindow>
  );
};

export default Spotify;
