import React from "react";
import { Link } from "react-router-dom";

const SubmitButton = (props) => {
  const Aha = (selected) => {
    console.log(selected);
  };

  return (
    <button onClick={() => Aha(props.whatIsSelected)}>
      <Link to="/submit">Submit</Link>
    </button>
  );
};

export default SubmitButton;
