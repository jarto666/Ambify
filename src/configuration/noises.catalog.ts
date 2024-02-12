import {
  faUmbrella,
  faCloudBolt,
  faWind,
  faTree,
  faCity,
  faWater,
  IconDefinition,
} from "@fortawesome/free-solid-svg-icons";

export interface NoiseDefinition {
  title: string;
  urls: string[];
  icon: IconDefinition;
}

export const noisesCatalog: NoiseDefinition[] = [
  {
    title: "Rain",
    urls: [
      "https://f003.backblazeb2.com/file/nonoise-sounds/mixkit-forest-heavy-rain-loop-1226.wav",
      "https://f003.backblazeb2.com/file/nonoise-sounds/forest-binaural-birds.wav",
    ],
    icon: faUmbrella,
  },
  {
    title: "Thunder",
    urls: [
      "https://f003.backblazeb2.com/file/nonoise-sounds/mixkit-forest-heavy-rain-loop-1226.wav",
      "https://f003.backblazeb2.com/file/nonoise-sounds/mixkit-forest-heavy-rain-loop-1226.wav",
      "https://f003.backblazeb2.com/file/nonoise-sounds/forest-binaural-birds.wav",
      "https://f003.backblazeb2.com/file/nonoise-sounds/forest-binaural-birds.wav",
    ],
    icon: faCloudBolt,
  },
  {
    title: "Wind",
    urls: [
      "https://f003.backblazeb2.com/file/nonoise-sounds/mixkit-forest-heavy-rain-loop-1226.wav",
    ],
    icon: faWind,
  },
  {
    title: "Forest",
    urls: [
      "https://f003.backblazeb2.com/file/nonoise-sounds/forest-binaural-birds.wav",
    ],
    icon: faTree,
  },
  {
    title: "City",
    urls: [
      "https://f003.backblazeb2.com/file/nonoise-sounds/mixkit-forest-heavy-rain-loop-1226.wav",
    ],
    icon: faCity,
  },
  {
    title: "Waves",
    urls: [
      "https://f003.backblazeb2.com/file/nonoise-sounds/mixkit-forest-heavy-rain-loop-1226.wav",
    ],
    icon: faWater,
  },
];
