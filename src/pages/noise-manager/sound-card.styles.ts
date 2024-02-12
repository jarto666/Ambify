import styled from "@emotion/styled";
import { lighten } from "polished";
import VolumeSlider from "./volume-slider";
import InfoTooltip from "./info-tooltip";
import RotateSoundButton from "./rotate-sound-button";

export const StyledSoundGeneratorCard = styled.div<{ isActivated: boolean }>`
  width: 120px;
  height: 120px;
  background-color: ${(p) => p.theme.colors.backgroundSecondary};
  border-radius: 20px;
  position: relative;
  transition: background-color 0.2s linear;
  text-transform: uppercase;
  user-select: none;

  .volume-input {
    visibility: ${(props) => (props.isActivated ? "visible" : "hidden")};
    opacity: ${(props) => (props.isActivated ? 1 : 0)};
    transition: visibility 0s, opacity 0.2s linear;
  }

  .info-tooltip {
    opacity: 0;
    transition: visibility 0s, opacity 0.2s linear;
  }

  .rotate-sound-button {
    visibility: ${(props) => (props.isActivated ? "visible" : "hidden")};
    opacity: ${(props) => (props.isActivated ? 1 : 0)};
    transition: visibility 0.2s, opacity 0.2s linear;
  }

  :hover .volume-input,
  :hover .info-tooltip {
    visibility: visible;
    opacity: 1;
  }

  :hover {
    background-color: ${(p) =>
      lighten(0.05, p.theme.colors.backgroundSecondary)};
  }
`;

export const StyledSoundGeneratorCardContent = styled.div<{
  isActivated: boolean;
}>`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: ${(props) => (props.isActivated ? 1 : 0.7)};
  transition: opacity 0.3s ease;
  flex-direction: column;
  gap: 5px;
  color: ${(p) => p.theme.colors.iconPrimary};
`;

export const StyledVolumeSlider = styled(VolumeSlider)`
  position: absolute;
  width: 100px;
  height: 12px;
  top: 54px;
  left: 57px;
`;

export const StyledInfoTooltip = styled(InfoTooltip)`
  position: absolute;
  top: 8px;
  left: 10px;
`;

export const StyledRotateSoundButton = styled(RotateSoundButton)`
  position: absolute;
  top: 77px;
  left: 10px;
`;
