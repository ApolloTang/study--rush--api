// This script run after npm package.json finished installing
const execa = require('execa')
const packagejson = require('./package.json')



if (packagejson.bin == null) {
  console.log('[Post installer] No bin exist in package.json')
} else {
  let binEntries = []
  binEntries = Object.entries(packagejson.bin)
  console.log('[Post installer] bin in package.json read.', binEntries)
  binEntries.forEach( async (_entry) => { await makeNpmExec(_entry) })
}

async function makeNpmExec (_entry) {
  try {
    await execa('chmod', ['744', _entry[1]])

    // await execa('mkdir', ['-p', './node_modules/.bin/'])
    // await execa('cp', [_file, './node_modules/.bin/'])
    // console.log(`[post-install-script.js] Installed npm execute-able: \'${_file}\'}`)
  } catch (_e) {
    console.log('[post-install-script.js] Error copy file')
    console.log(_e.stderr)
  }
}
