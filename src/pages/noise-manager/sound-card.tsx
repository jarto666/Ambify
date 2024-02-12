import { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NoiseDefinition } from "../../configuration/noises.catalog";
import Howler, { HowlPlayerRefType } from "../../lib/react-howler";
import {
  StyledSoundGeneratorCard,
  StyledSoundGeneratorCardContent,
  StyledVolumeSlider,
  StyledInfoTooltip,
  StyledRotateSoundButton,
} from "./sound-card.styles";

type SoundCardProps = {
  className?: string;
  noise: NoiseDefinition;
  defaultSequence: number;
};

const SoundCard = ({ className, noise, defaultSequence }: SoundCardProps) => {
  const defaultVolume = 50;
  const ref = useRef<HTMLDivElement>(null);
  const [isActivated, setIsActivated] = useState<boolean>(false);
  const audioRef = useRef<HowlPlayerRefType>(null);
  const [sequence, setSequence] = useState<number>(defaultSequence);
  const [audioSrc, setAudioSrc] = useState<string>(noise.urls[sequence]);
  const [internalVolume, setInternalVolume] = useState<number>(
    defaultVolume / 100
  );
  const [autoplay, setAutoplay] = useState<boolean>(false);

  const handleOnClick = () => {
    const newActivated = !isActivated;
    setIsActivated(newActivated);
    if (audioRef.current) {
      if (newActivated) {
        setAutoplay(true);
        audioRef.current.reset();
        audioRef.current.play();
        audioRef.current.fade(0, internalVolume, 500);
      } else {
        audioRef.current.fade(internalVolume, 0, 500, () => {
          audioRef.current!.pause();
        });
        setAutoplay(false);
      }
    }
  };

  const handleVolumeChange = (vol: number) => {
    const newVol = vol / 100;

    if (audioRef.current) {
      setInternalVolume(newVol);
      audioRef.current.volume(newVol); // Convert volume to a value between 0 and 1
    }
  };

  const rotateSound = () => {
    const count = noise.urls.length;
    const nextSequence = (sequence + 1) % count;
    setSequence(nextSequence);
    setAudioSrc(noise.urls[nextSequence]);
  };

  return (
    <>
      <StyledSoundGeneratorCard
        ref={ref}
        className={className}
        isActivated={isActivated}
      >
        <StyledSoundGeneratorCardContent
          isActivated={isActivated}
          onClick={handleOnClick}
        >
          <FontAwesomeIcon
            icon={noise.icon}
            height="50px"
            width="50px"
            size="3x"
          />
        </StyledSoundGeneratorCardContent>

        <StyledVolumeSlider
          className="volume-input"
          defaultVolume={defaultVolume}
          onVolumeChanged={handleVolumeChange}
        ></StyledVolumeSlider>

        <StyledInfoTooltip
          className="info-tooltip"
          content={noise.title}
        ></StyledInfoTooltip>

        <StyledRotateSoundButton
          className="rotate-sound-button"
          content="Rotate sound"
          onClick={rotateSound}
        ></StyledRotateSoundButton>

        <Howler
          ref={audioRef}
          src={audioSrc}
          preload
          loop
          html5
          volume={internalVolume}
          autoplay={autoplay}
        />
      </StyledSoundGeneratorCard>
    </>
  );
};

export default SoundCard;
