import React from "react";
import { Link } from "react-router-dom";
import * as S from "./styled";

export let numberSelected = 0;

const SubmitButton = (props) => {
  const showSelected = (whatIsSelected) => {
    numberSelected = whatIsSelected;
  };

  return (
    <Link to="/submit">
      <S.Button onClick={() => showSelected(props.whatIsSelected)}>
        {" "}
        Submit{" "}
      </S.Button>
    </Link>
  );
};

export default SubmitButton;
