/*
 * This script generates mock data for local development,
 * This way you don't have to point to an actual API
 * but you can enjoy the realistic, yet random data,
 * and the rapid page load due to local, static data.
 *
 */

 import jsf from "json-schema-faker";
 import {mySchema} from "./mockDataSchema";
 import fs from "fs";
 import chalk from "chalk";

 const json = JSON.stringify(jsf(mySchema));

 fs.writeFile("./src/api/db.json", json, function(err){
   if(err){
     return console.log(chalk.red(err));
   }
   else{
     console.log(chalk.green("Mock data generation completed."));
   }
 });