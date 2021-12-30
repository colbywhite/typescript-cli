#!/usr/bin/env node

import {docopt} from 'docopt';
import path from 'path';
import {echo} from './funcs';
import inquirer from 'inquirer';

const CLI_NAME = path.basename(__filename);
const USAGE = `
Usage:
  ${CLI_NAME}
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
} else {
  inquirer.prompt([
    {
      type: 'expand',
      name: 'echo',
      message: 'What should be echoed?',
      choices: [
        {key: 'f', name: 'Foo', value: 'Foo'},
        {key: 'b', name: 'Bar', value: 'Bar'},
        {key: 'z', name: 'Baz', value: 'Baz'}
      ]
    }
  ])
    .then((answers: Record<string, string>) => echo([answers.echo]))
}
