import React from "react";

export default function RangeInput({ min, max, title, value, setValue, step }) {
  return (
    <>
      <div className="rangeInfo">
        <div>{title}</div>
        <div>{value / 100}</div>
      </div>
      <input
        type="range"
        value={value}
        step={step ? step : 0}
        onChange={(e) => setValue(e.target.value)}
        min={min}
        max={max}
      />
    </>
  );
}
