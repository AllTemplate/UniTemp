import { defineConfig } from 'unocss';
import { presetApplet, presetRemRpx } from 'unocss-applet';
export default defineConfig({
  presets: [
    presetApplet(),
    presetRemRpx({
        // baseFontSize: 4,
        // screenWidth: 750,
    }),
  ],
});
