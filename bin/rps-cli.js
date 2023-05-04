#!/usr/bin/env node

import {RPS} from "../lib/rpsls.js"
import minimist from "minimist"

const args = minimist(process.argv.slice(2));
const choice = args._[0];

RPS(choice);
