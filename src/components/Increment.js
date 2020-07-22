import React from "react";

const Increment = ({ value, increment }) => {
  return (
    <div className="btnBox">
      <button
        className="incrementBtn"
        onClick={() => {
          increment(value + 1);
        }}
      >
        +
      </button>
    </div>
  );
};

export default Increment;
