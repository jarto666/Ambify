import styled from "@emotion/styled";
import SoundCard from "./sound-card";
import { noisesCatalog } from "../../configuration/noises.catalog";

const PageWrapper = styled.div`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  height: calc(100vh - 50px);
`;

const SoundCards = styled.div`
  width: 700px;
  display: grid;
  grid-template-columns: repeat(
    auto-fill,
    minmax(25%, 1fr) /* 25% = 4 columns */
  );
  align-content: flex-start;
`;

const SoundCardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 170px;
  max-height: 200px;
`;

const SoundCardStyled = styled(SoundCard)``;

const NoiseManagerPage = () => {
  return (
    <>
      <PageWrapper>
        <SoundCards>
          {noisesCatalog &&
            noisesCatalog.map((noise, i) => (
              <SoundCardContainer key={i}>
                <SoundCardStyled
                  noise={noise}
                  defaultSequence={0}
                ></SoundCardStyled>
              </SoundCardContainer>
            ))}
        </SoundCards>
      </PageWrapper>
    </>
  );
};

export default NoiseManagerPage;
