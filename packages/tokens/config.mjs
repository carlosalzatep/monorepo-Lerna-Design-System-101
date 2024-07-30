import StyleDictionary from "style-dictionary";
import scssMixins from "./formats/scssMixins.mjs";

const buildPath = "dist/";

StyleDictionary.registerFormat(scssMixins);

export default {
  source: [`dictionaries/**/*.json`],
  platforms: {
    figma: {
      transformGroup: "web",
      buildPath: buildPath,
      prefix: "pgds",
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
      buildPath: buildPath,
      prefix: "pgds",
      files: [
        {
          destination: "tokens.mjs",
          format: "javascript/es6",
        },
      ],
    },
    css: {
      transformGroup: "css",
      buildPath: buildPath,
      prefix: "pgds",
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
      buildPath: buildPath,
      prefix: "pgds",
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
