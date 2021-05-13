import React from "react";

export default function Bubble({positionX, positionY, blur, transparency, height, width}) {
  let style = {
    position: "absolute",
    background: `rgba(255, 255, 255, ${transparency})`,
    top: `${positionY}%`,
    left: `${positionX}%`,
    width: `${height}px`,
    height: `${width}px`,
    borderRadius: "50%",
    backdropFilter: `blur(${blur}px)`
};

  return <div style={style}></div>;
}
