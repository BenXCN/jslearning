/* eslint-disable no-console */

import webpack from "webpack";
import webpackConfig from "../webpack.config.prod";
import chalk from "chalk";

const B_ERR = 1;
const B_OK = 0;

process.env.NODE_ENV = "production";

console.log(chalk.green("Product Build starts..."));

webpack(webpackConfig).run((err, stats) => {
  if (err) {
    console.log(chalk.red(err));
    return B_ERR;
  }

  const jsonStats = stats.toJson();

  if(jsonStats.hasErrors){
    return jsonStats.erros.map(error => {
      console.log(chalk.red(error));
    });
  }

  if(jsonStats.hasWarnings){
    return jsonStats.warnings.map(warnings => {
      console.log(chalk.red(warnings));
    });
  }

  console.log(chalk.green(`Webpack Stats ${stats}`))
  console.log(chalk.green("Production Build completed and stored in /dist"))


  return B_OK;
});
