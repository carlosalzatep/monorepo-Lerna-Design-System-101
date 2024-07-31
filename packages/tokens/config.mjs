import StyleDictionary from "style-dictionary";
import scssMixins from "./formats/scssMixins.mjs";

const buildPath = (folderName) => `dist/${folderName}/`;
const prefix = "pgds";

StyleDictionary.registerFormat(scssMixins);

export default {
  source: [`dictionaries/**/*.json`],
  platforms: {
    figma: {
      transformGroup: "web",
      buildPath: buildPath('figma'),
      prefix: prefix,
      files: [
        {
          destination: "figma-tokens.json",
          format: "json/flat",
          filter: (token) => token.name.includes("base"),
        },
      ],
    },
    js: {
      transformGroup: "js",
      buildPath: buildPath('js'),
      prefix: prefix,
      files: [
        {
          destination: "tokens.mjs",
          format: "javascript/es6",
        },
      ],
    },
    css: {
      transformGroup: "css",
      buildPath: buildPath('css'),
      prefix: prefix,
      files: [
        {
          destination: "_tokens.css",
          format: "css/variables",
        },
      ],
      expand: true,
    },
    scss: {
      transforms:
        StyleDictionary.hooks.transformGroups.scss.concat("color/rgb"),
      buildPath: buildPath('scss'),
      prefix: prefix,
      files: [
        {
          destination: "_tokens.scss",
          format: "scss/variables",
          filter: (token) => !token.mixin,
        },
        {
          destination: "_mixins.scss",
          format: "scss/mixin",
          filter: (token) => token.mixin,
        },
      ],
    },
  },
};
