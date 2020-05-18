import Loader from "react-loader-spinner";

import React from "react";

function ISLoader() {
  return (
    <div
      style={{
        height: "60vh",
        margin: "0",
        paddingTop: "10vh",
        backgroundColor: "#282c34",
        color: "rgb(0, 191, 255)",
      }}
    >
      <h2 style={{ color: "rgb(0, 191, 255)" }}>Please Wait...</h2>
      <Loader type="Bars" color="rgb(0, 191, 255)" height={280} width={400} />
    </div>
  );
}

export default ISLoader;
