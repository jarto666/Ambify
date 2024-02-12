import styled from "@emotion/styled";
import { useState } from "react";

const StyledVolumeSlider = styled.div`
  pointer-events: none;
`;

const StyledVolumeInput = styled.input`
  pointer-events: auto;
  appearance: none;
  -webkit-appearance: none;
  background-color: rgba(255, 255, 255, 0.2);
  position: absolute;
  /* top: 53px;
  right: -53px; */
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  transform: rotate(-90deg);
  border-radius: 1rem;
  overflow: hidden;
  cursor: pointer;

  &::-webkit-slider-runnable-track {
    -webkit-appearance: none;
    width: 0;
    background: ${(p) => p.theme.colors.rangePrimary};
    opacity: 0.5;
    transition: 0.3s;

    &:hover {
      opacity: 0.8;
    }
  }

  &::-webkit-slider-thumb {
    width: 0px;
    -webkit-appearance: none;
    height: var(--card-volume-slider-height);
    box-shadow: calc(-1 * 300px) 0 0 300px
      ${(p) => p.theme.colors.rangeSecondary};
    opacity: 0.5;
    transition: 0.3s;

    &:hover {
      opacity: 0.8;
    }
  }

  /* TODO: cover Firefox */
`;

type VolumeSliderProps = {
  className?: string;
  defaultVolume: number;
  onVolumeChanged: (vol: number) => void;
};

const VolumeSlider = ({
  className,
  defaultVolume,
  onVolumeChanged,
}: VolumeSliderProps) => {
  const [volume, setVolume] = useState<number>(defaultVolume);

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseInt(e.target.value);
    setVolume(newVolume);
    onVolumeChanged(newVolume);
  };

  return (
    <>
      <StyledVolumeSlider className={className}>
        <StyledVolumeInput
          type="range"
          min="0"
          max="100"
          value={volume}
          onChange={(e) => handleVolumeChange(e)}
        />
      </StyledVolumeSlider>
    </>
  );
};

export default VolumeSlider;
