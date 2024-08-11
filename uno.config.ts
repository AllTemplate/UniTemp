import { type Preset, defineConfig, presetAttributify, presetUno, transformerDirectives, transformerVariantGroup } from 'unocss';
import { presetApplet, presetRemRpx, transformerAttributify } from 'unocss-applet';

const isMp = process.env?.UNI_PLATFORM?.startsWith('mp') ?? false;
const presets: Preset[] = [];
if (isMp) {
  presets.push(presetApplet(), presetRemRpx());
} else {
  presets.push(presetUno(), presetAttributify());
}

export default defineConfig({
  presets: [
    presetApplet(),
    presetRemRpx({
      baseFontSize: 4,
      // screenWidth: 750,
    }),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
    transformerAttributify({
      prefixedOnly: true,
      prefix: 'fg',
    }),
  ],
});
