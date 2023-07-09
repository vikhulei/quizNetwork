import React from "react";

export default function Card({ question, flip, onFlipChange, backCenter }) {
  return (
    <div
      className={`card ${flip ? "flip" : ""}`}
      onClick={() => {
        onFlipChange(!flip);
      }}
    >
      <div className="front">{question.q}</div>
      <div className="back" style={ backCenter ? {textAlign: "center"} : {} } >{question.a.split("<br>").map((str) => (<p>{str}</p>))}</div>
    </div>
  );
}
