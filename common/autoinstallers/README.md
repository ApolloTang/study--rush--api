
# What is an autoinstaller script? 

An autoinstaller script package is a custom scripts package. It is created by the Rash monorepo maintainer for maintenance of the monorepo. The script can be invoked via custom [rush global command](https://rushjs.io/pages/maintainer/custom_commands/).

## Instruction for creating an autoinstaller script for a rush global command

This short note shows you how to create an autoinstaller script package. We shall call our script package `autoinstaller-example`. 

To initiate an autoinstaller script, use the following rush command in the monorepo: 

```
rush init-autoinstaller --name autoinstaller-example
```

This will create a `package.json` at path `<rush-monorepo>/common/autoinstallers/autoinstaller-example/` with the following content: 

```
{
  "name": "autoinstaller-example",
  "version": "1.0.0",
  "private": true,
  "dependencies": {}
}
```

After that, you can cd into this folder and install any npm package as you normally would. For example, to install `https://www.npmjs.com/package/yargs`: 

```
cd ./common/autoinstallers/autoinstaller-example
pnpm install yargs
```

This will install yargs normally, and you will see a node_modules folder being created: 

```
$ tree -LF 2
.
├── node_modules/
│   └── yargs/
├── package.json
└── pnpm-lock.yaml
```

Lets create a script in `src/` folder called `my-autoinstaller-eg.js`

```
// file <rush-monorepo>/common/autoinstallers/autoinstaller-example/src/my-autoinstaller-eg.js

var argv = require('yargs/yargs')(process.argv.slice(2))
  .default('my-string', 'foo')
  .argv;
console.log('xxxx --my-string: ', argv['my-string']);

console.log('xxxx process.argv: ', process.argv)

console.log('xxxx __dirname: ', __dirname)

console.log('xxxx process.cwd(): ', process.cwd())
```

To execute the above script as a rush command with have to create a command in the file `<rush-monorepo>/common/config/rush/command-line.json`: 

```
  "commands": [
    ...
    ...
    {
      "name": "my-autoinstaller-eg",
      "commandKind": "global",
      "summary": "run the command called 'my-autoinstaller-eg'",
      "safeForSimultaneousRushProcesses": true,
      "autoinstallerName": "autoinstaller-example",
      "shellCommand": "node common/autoinstallers/autoinstaller-example/src/my-autoinstaller-eg.js"
    },
    ...
    ...
  ]
```

Now you can execute the above rush command: 

```
rush my-autoinstaller-eg
```

However, to pass the argument `--my-string` to the above command, we have to register the parameter in the file `<rush-monorepo>/common/config/rush/command-line.json`: 

```
  "parameters": [
    ...
    ...
    {
      "parameterKind": "string",
      "longName": "--my-string",
      "description": "A custom string parameter for the \"my-autoinstaller-eg\" custom command",
      "associatedCommands": ["my-autoinstaller-eg"],
      "argumentName": "SOME_TEXT",
      "required": false
    },
    ...
    ...
  ]
```
