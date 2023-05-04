#!/usr/bin/env node

import {RPS} from "../lib/rpsls.js"
import minimist from "minimist"

const argv = minimist(process.argv.slice(2));
const choice = argv._[0];

if (argv.h || argv.help) {
    console.log(
        `
        Usage: node-rps [SHOT]
        Play Rock Paper Scissors (RPS)

            -h, --help      display this help message and exit
            -r, --rules     display the rules and exit

        Examples:
            node-rps        Return JSON with single player RPS result.
                            e.g. {"player":"rock"}
            node-rps rock   Return JSON with results for RPS played against a simulated opponent.
                            e.g {"player":"rock","opponent":"scissors","result":"win"}
        `
    )
    process.exit(0);
}





RPS(choice);
