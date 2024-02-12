import { colors } from "./colors";
import { fontSizes } from "./font-size";
import { CustomTheme } from "./interfaces/theme.interface";
import { media } from "./media";
import { spacings } from "./spacings";

export const theme: CustomTheme = {
  colors,
  fontSizes,
  media,
  spacings,
};

declare module "@emotion/react" {
  export interface Theme extends CustomTheme {} // Merge your custom theme interface with the default Emotion theme interface
}
