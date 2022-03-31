import { useState } from "react";
import * as S from "./styled";
import SubmitButton from "../SubmitButton";
import { ReactComponent as ReactLogo } from "../../images/icon-star.svg";

const Box = () => {
  const [selected, setSelected] = useState();

  return (
    <S.Wrapper>
      <ReactLogo />
      <h1>How did we go?</h1>
      <p>
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <S.WrapperItems>
        <S.Button
          onClick={() => setSelected(1)}
          className={selected === 1 ? "buttonSelected" : "buttonNotSelected"}
        >
          1
        </S.Button>
        <S.Button
          onClick={() => setSelected(2)}
          className={selected === 2 ? "buttonSelected" : "buttonNotSelected"}
        >
          2
        </S.Button>
        <S.Button
          onClick={() => setSelected(3)}
          className={selected === 3 ? "buttonSelected" : "buttonNotSelected"}
        >
          3
        </S.Button>
        <S.Button
          onClick={() => setSelected(4)}
          className={selected === 4 ? "buttonSelected" : "buttonNotSelected"}
        >
          4
        </S.Button>
        <S.Button
          onClick={() => setSelected(5)}
          className={selected === 5 ? "buttonSelected" : "buttonNotSelected"}
        >
          5
        </S.Button>
      </S.WrapperItems>

      <SubmitButton whatIsSelected={selected}>Submit!</SubmitButton>
    </S.Wrapper>
  );
};

export default Box;
