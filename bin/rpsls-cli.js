import {RPSLS} from "../lib/rpsls.js"
import minimist from "minimist"

const args = minimist(process.argv.slice(2));
const choice = args._[0];

console.log(choice)