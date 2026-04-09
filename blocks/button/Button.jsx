import React from "react";

export default function Button({ text }) {
  return (
    <button
      style={{
        padding: "10px 20px",
        backgroundColor: "blue",
        color: "white",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
      }}
    >
      {text}
    </button>
  );
}
