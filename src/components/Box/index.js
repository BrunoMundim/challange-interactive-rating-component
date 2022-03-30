import { useState } from "react";
import * as S from "./styled";

const Box = () => {
  const [selected, setSelected] = useState();

  return (
    <S.Wrapper>
      <S.WrapperItems>
        <h1>How did we go?</h1>
      </S.WrapperItems>
      <S.WrapperItems>
        <p>
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
        </p>
      </S.WrapperItems>
      <S.WrapperItems>
        <button
          onClick={() => setSelected(1)}
          className={selected === 1 ? "buttonSelected" : "buttonNotSelected"}
        >
          1
        </button>
        <button
          onClick={() => setSelected(2)}
          className={selected === 2 ? "buttonSelected" : "buttonNotSelected"}
        >
          2
        </button>
        <button
          onClick={() => setSelected(3)}
          className={selected === 3 ? "buttonSelected" : "buttonNotSelected"}
        >
          3
        </button>
        <button
          onClick={() => setSelected(4)}
          className={selected === 4 ? "buttonSelected" : "buttonNotSelected"}
        >
          4
        </button>
        <button
          onClick={() => setSelected(5)}
          className={selected === 5 ? "buttonSelected" : "buttonNotSelected"}
        >
          5
        </button>
      </S.WrapperItems>
      <S.WrapperItems>
        <button>Submit!</button>
      </S.WrapperItems>
    </S.Wrapper>
  );
};

export default Box;
