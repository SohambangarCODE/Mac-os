import React, { useEffect, useState } from "react";
import "./deviceWarning.scss";

const DeviceWarning = ({ children }) => {
  const [isSmallDevice, setIsSmallDevice] = useState(false);

  useEffect(() => {
    const checkSize = () => {
      if (window.innerWidth < 1024 || window.innerHeight < 600) {
        setIsSmallDevice(true);
      } else {
        setIsSmallDevice(false);
      }
    };

    checkSize();
    window.addEventListener("resize", checkSize);
    return () => window.removeEventListener("resize", checkSize);
  }, []);

  if (isSmallDevice) {
    return (
      <div className="device-warning">
        <div className="warning-box">
          <h1>⚠️ Device Not Supported</h1>
          <p>
            This site is not built for mobile or small screens.
            <br />
            Please open on a laptop or desktop.
          </p>
        </div>
      </div>
    );
  }

  return children;
};

export default DeviceWarning;

