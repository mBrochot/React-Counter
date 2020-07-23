import React from "react";

const Decrement = ({ value, decrement }) => {
  return (
    <button
      className="decrementBtn"
      onClick={() => {
        decrement(value - 1);
      }}
    >
      -
    </button>
  );
};

export default Decrement;
