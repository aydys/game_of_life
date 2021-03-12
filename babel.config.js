module.exports = {
  presets: [
    ["@babel/preset-env", { targets: { node: "current" } }],
    ["@emotion/babel-preset-css-prop"],
    "@babel/preset-react",
    "@babel/preset-typescript"    
  ],
  plugins: [
    "@babel/plugin-proposal-optional-chaining"
  ]
};
