import "./App.css";
import { ThemeProvider } from "@emotion/react";
import { theme } from "./theme/theme";
import styled from "@emotion/styled";
import NoiseManagerPage from "./pages/noise-manager/noise-manager";
import Header from "./components/header";
import Container from "./components/shared/container";

const Root = styled.div`
  background-color: ${(p) => p.theme.colors.background};
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
`;

const ContentRow = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
`;

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Root>
          <Header></Header>
          <ContentRow style={{ marginTop: "50px" }}>
            <Container>
              <NoiseManagerPage></NoiseManagerPage>
            </Container>
          </ContentRow>
        </Root>
      </ThemeProvider>
    </>
  );
}

export default App;
