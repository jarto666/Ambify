import { Colors } from "./colors.interface";
import { FontSizes } from "./font-sizes.interface";
import { Media } from "./media.interface";
import { Spacings } from "./spacings.interface";

export interface CustomTheme {
  colors: Colors;
  fontSizes: FontSizes;
  media: Media;
  spacings: Spacings;
}
