// file <rush-monorepo>/common/autoinstallers/autoinstaller-example/src/my-autoinstaller-eg.js

var argv = require('yargs/yargs')(process.argv.slice(2))
  .default('my-string', 'foo')
  .argv;
console.log('xxxx --my-string: ', argv['my-string']);

console.log('xxxx process.argv: ', process.argv)

console.log('xxxx __dirname: ', __dirname)

console.log('xxxx process.cwd(): ', process.cwd())
