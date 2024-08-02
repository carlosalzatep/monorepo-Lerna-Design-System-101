const mixinString = (name, styleProps) => {
  return `
@mixin ${name} {
  ${styleProps.join("\n  ")}
}
%${name} {
  ${styleProps.join("\n  ")}
}`;
};

/**
 * Parses the style properties of a mixin and generates the mixin string.
 * 
 * @param {Object} mixin - The mixin object.
 * @param {string} mixin.name - The name of the mixin.
 * @param {Object} mixin.$value - The style properties of the mixin.
 * @returns {string} The SCSS mixin string.
 */
const parseMixinStyleProps = (mixin) => {
  const { name, $value: value } = mixin;
  const styleProps = Object.keys(value || {}).map(
    (styleKey) => `${styleKey}: ${value[styleKey]};`,
  );
  return mixinString(name, styleProps);
};

export default {
  name: "scss/mixin",
  format({ dictionary }) {
    // Get only mixin props
    const mixinProperties = dictionary.allTokens.filter((p) => p.mixin);
    const mixinPropValues = mixinProperties.map((mixin) =>
      parseMixinStyleProps(mixin),
    );

    return `// Do not edit directly, this file was auto-generated.
      ${mixinPropValues.join("\n\n")}
    `;
  },
};
