#!/usr/bin/env node

import {docopt} from 'docopt';
import path from 'path';
import {echo} from './funcs';

const CLI_NAME = path.basename(__filename);
const USAGE = `
Usage:
  ${CLI_NAME} echo [options] <arg>...
  ${CLI_NAME} -h | --help | --version

Options: 
  -v,--verbose    Extra logging
`;

const args: Record<string, any> = docopt(USAGE, {version: '1.0.0-rc.0'});

if (args['--verbose']) {
  console.log('All arguments', args);
}
if (args.echo) {
  echo(args['<arg>']);
}
