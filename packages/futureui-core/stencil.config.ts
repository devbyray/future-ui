import { Config } from '@stencil/core';
import { postcss } from '@stencil/postcss';
import autoprefixer from 'autoprefixer';
import { vueOutputTarget } from '@stencil/vue-output-target';

const purgecss = require('@fullhuman/postcss-purgecss')({
  content: ['./src/**/*.tsx', './src/**/*.css', './src/index.html'],
  defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || [],
});

export const config: Config = {
  namespace: 'futureui',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
    vueOutputTarget({
      componentCorePackage: '@devbyray/futureui',
      proxiesFile: '../futureui-vue/lib/components.ts',
    }),
  ],
  testing: {
    browserHeadless: 'new',
  },
  globalStyle: 'www/build/tailwind.css',
  plugins: [
    postcss({
      plugins: [
        require('postcss-import'),
        require('tailwindcss')('./tailwind.config.ts'),
        autoprefixer(),
        ...(process.env.NODE_ENV === 'production' ? [purgecss, require('cssnano')] : []),
      ],
    }),
    // tailwindGlobal({
    //   tailwindCssPath: './src/styles/tailwind.css',
    //   tailwindConf: tailwindConfig,
    //   postcss: {
    //     plugins: [atImport(), tailwindcss(), autoprefixer()],
    //   },
    // }),
    // tailwind({
    //   tailwindCssPath: './src/styles/tailwind.css',
    //   tailwindConf: tailwindConfig,
    //   postcss: {
    //     plugins: [atImport(), tailwindcss(), autoprefixer()],
    //   },
    // }),
    // tailwindHMR(),
  ],
};
