module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      [
        "babel-preset-expo",
        {
          jsxRuntime: "automatic",
        },
      ],
    ],
    plugins: [
      "babel-plugin-styled-components",
      "react-native-reanimated/plugin",
    ],
  };
};
