module.exports = {
  // ... outras configurações do webpack ...

  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: true,
              // outras opções do CSS Modules, se necessário
            },
          },
        ],
      },
    ],
  },
};
