import Box from "./components/Box/index.js";
import { GlobalStyle } from "./global/GlobalStyle.js";
import * as S from "./styled";

function App() {
  return (
    <S.Wrapper>
      <GlobalStyle />
      <Box />
    </S.Wrapper>
  );
}

export default App;
