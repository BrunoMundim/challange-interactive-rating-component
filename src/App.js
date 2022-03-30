import { Outlet } from "react-router-dom";
import Box from "./components/Box/index.js";
import * as S from "./styled";

function App() {
  return (
    <S.Wrapper>
      <Box />
      <Outlet />
    </S.Wrapper>
  );
}

export default App;
