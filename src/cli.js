#!/usr/bin/env node
import chalk from 'chalk';
import mingify from '.';
import meow from 'meow';

var cli = meow(`Usage
  mingify <text>

  example
    mingify Angular
`);

console.log(mingify(cli.input[0], 'cli'));
