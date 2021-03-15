module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: / node_modules /,
        사용: {
          loader: "babel-loader",
        },
      },
    ],
  },
};
