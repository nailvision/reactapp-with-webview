const WebView = ({ url }) => {
  return (
    <iframe
      src={url}
      style={{ width: "100%", height: "100%", border: "none" }}
      title="WebView"
    />
  );
};

export default WebView;
