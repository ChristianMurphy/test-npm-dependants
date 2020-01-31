#!/usr/bin/env node
'use strict'
process.title = 'test-npm-dependants'

const test = require('..')
const minimist = require('minimist')
const pkg = require('../package')

const argv = minimist(process.argv.slice(2), {
  boolean: ['verbose', 'version', 'help'],
  alias: {
    filter: 'f',
    verbose: 'V',
    version: 'v',
    help: 'h'
  }
})

if (argv.version) {
  console.log(pkg.version)
  process.exit()
}

const args = {
  name: argv._[0],
  version: argv._[1],
  nextVersion: argv._[2],
  filter: argv.filter,
  verbose: argv.verbose
}

if (!args.name || !args.version || argv.help) {
  console.log()
  console.log('  test-npm-dependants NAME STABLEVERSION [NEXTVERSION]')
  console.log()
  console.log('  Options:')
  console.log()
  console.log('    --help, -h     Print help text')
  console.log('    --version, -v  Print program version')
  console.log('    --filter, -f   Filter dependant names by this regexp')
  console.log('    --verbose, -V  Verbose mode')
  console.log()
  process.exit(Number(!argv.help))
}

test(args).catch(err => {
  console.error(err)
  process.exit(1)
})
