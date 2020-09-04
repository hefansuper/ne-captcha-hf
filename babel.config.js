// module.exports = function (api) {
//   api.cache(false);
//   const presets = [
//     ["@babel/preset-react"],
//     [
//       "@babel/preset-env",
//       {
//         targets: {
//           browsers: ["last 2 versions", "safari >= 7", "ios >= 8"],
//         },
//         // modules: "auto",
//         useBuiltIns: "usage",
//         corejs: "3",
//       },
//     ],
//   ];
//   const plugins = [
//     [
//       "@babel/plugin-proposal-decorators",
//       {
//         legacy: true,
//       },
//     ],
//     [
//       "@babel/plugin-proposal-class-properties",
//       {
//         loose: false,
//       },
//     ],
//   ];

//   return {
//     presets,
//     plugins,
//   };
// };
