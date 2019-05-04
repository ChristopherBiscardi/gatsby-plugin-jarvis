const Jarvis = require("webpack-jarvis");

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    plugins: [
      new Jarvis({
        port: 1337
      })
    ]
  });
};
