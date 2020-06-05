const { override, fixBabelImports, addLessLoader, addWebpackAlias } = require('customize-cra');
const path = require("path");

module.exports = override(
  fixBabelImports('antd', {
    libraryDirectory: 'es',
    style: true,
  }),
  addLessLoader({
    lessOptions: {
      javascriptEnabled: true,
      modifyVars: {
        '@primary-color': '#25b864',
        '@border-radius-base': '6px',
      },
    },
  }),
  addWebpackAlias({
    ['@']: path.resolve(__dirname, "src")
  })
);
