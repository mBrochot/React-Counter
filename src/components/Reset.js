import React from "react";

const Reset = ({ value, reset }) => {
  return (
    <button
      className="reset"
      onClick={() => {
        reset((value = 0));
      }}
    >
      Reset
    </button>
  );
};

export default Reset;
