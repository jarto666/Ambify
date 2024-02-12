import styled from "@emotion/styled";
import mainLogo from "../assets/logo.png";
import Container from "./shared/container";

const HeaderBar = styled.div`
  height: 50px;
  min-height: 50px;
  width: 100%;
  background-color: ${(p) => p.theme.colors.backgroundSecondary};
  flex-direction: row;
  display: flex;
  justify-content: center;
  position: fixed;
  z-index: 5000;
  box-shadow: 0 1px 1px ${(p) => p.theme.colors.backgroundSecondary};
`;

const LogoImageContainer = styled.div`
  height: 50px;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LogoImage = styled.img`
  height: 40px;
`;

const HeaderContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const LeftContainer = styled.div`
  flex: 1;
`;

const RightContainer = styled.div`
  flex: 1;
`;

const Header = () => {
  return (
    <>
      <HeaderBar>
        <Container>
          <HeaderContent>
            <LeftContainer></LeftContainer>
            <LogoImageContainer>
              <LogoImage src={mainLogo} />
            </LogoImageContainer>
            <RightContainer></RightContainer>
          </HeaderContent>
        </Container>
      </HeaderBar>
    </>
  );
};

export default Header;
