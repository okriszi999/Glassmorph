import React from "react";

export default function Bubble({positionX, positionY}) {
  let style = {
    position: "absolute",
    background: "rgba(255, 255, 255, 0.2)",
    top: "25%",
    left: "25%",
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    backdropFilter: "blur(2px)"
};

  return <div style={style}></div>;
}
