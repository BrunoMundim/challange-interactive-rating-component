import React from "react";
import { GlobalStyle } from "../../global/GlobalStyle";
import { ReactComponent as ReactLogo } from "../../images/thank-you.svg";
import { numberSelected } from "../SubmitButton";
import * as S from "./styled";

const SubmitScreen = () => {
  return (
    <S.Wrapper2>
      <GlobalStyle />
      <S.Wrapper>
        <ReactLogo />
        <S.Rating>You selected {numberSelected} out of 5</S.Rating>
        <h1>Thank you!</h1>
        <p>
          We appreciate you taking the time to give a rating. If you ever need
          more support, don't hesitate to get in touch!
        </p>
      </S.Wrapper>
    </S.Wrapper2>
  );
};

export default SubmitScreen;
