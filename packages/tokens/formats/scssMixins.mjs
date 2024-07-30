const mixinString = (name, styleProps) => {
  return `
@mixin ${name} {
  ${styleProps.join("\n  ")}
}
%${name} {
  ${styleProps.join("\n  ")}
}`;
};
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

    return mixinPropValues.join("\n\n");
  },
};
