import { defineConfig } from 'vite';
import Uni from '@dcloudio/vite-plugin-uni';
import UniLayouts from '@uni-helper/vite-plugin-uni-layouts';
import fs from 'fs';
import path from 'path';

const environment = process.env.NODE_ENV == 'development';

export default async () => {
  const UnoCSS = (await import('unocss/vite')).default;

  return defineConfig({
    plugins: [UniLayouts(), UnoCSS(), Uni()],
    base: '/',
    envDir: './env',
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
    },
    server: {
      // https: environment
      //   ? {
      //       key: fs.readFileSync('./certificates/localhost-key.pem'),
      //       cert: fs.readFileSync('./certificates/localhost.pem'),
      //     }
      //   : {},
      port: 3002,
      open: false,
      host: '0.0.0.0',
      hmr: true,
    },
  });
};
