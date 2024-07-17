import { useEffect, useRef, useState } from "react";

const WebView = ({ url, onMessage }) => {
  useEffect(() => {
    const handleMessage = (event) => {
      // Check if the message is from the expected origin
      if (event.origin !== new URL(url).origin) {
        return;
      }
      onMessage(event.data);
    };

    window.addEventListener("message", handleMessage);

    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, [url, onMessage]);

  return (
    <iframe
      src={url}
      style={{ width: "100%", height: "100%", border: "none" }}
      title="WebView"
    />
  );
};

export default WebView;
