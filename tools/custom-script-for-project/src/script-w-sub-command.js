var yargs = require('yargs/yargs')

yargs(process.argv.slice(2))
  .command(
    'subCommand1',
    'description for subCommand1',
    function (yargs) { },
    function (argv) { console.log('executing subCommad1') }
  )
  .command(
    'subCommand2 <arg1>',
    'description for subCommand2',
    function (yargs) { },
    function (argv) { console.log('executing subCommad2 with argument: ', argv.arg1) }
  )
  .help()
  .argv
