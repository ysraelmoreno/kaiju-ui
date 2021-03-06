import Stitches, { createStitches } from "@stitches/react";

import KaijuUI from "./Kaiju.theme";
import DarkTheme from "./Dark.theme";

const {
  css,
  styled,
  globalCss,
  config,
  getCssText,
  keyframes,
  createTheme,
} = createStitches({
  theme: KaijuUI,
  prefix: "byt-",
  media: KaijuUI.media,
});

export const darkTheme = createTheme(DarkTheme);

export type CSS = Stitches.CSS<typeof config>;

export { css, styled, globalCss, config, keyframes, getCssText };
