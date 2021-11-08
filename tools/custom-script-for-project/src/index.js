console.log('xxxxx message from "custom-script-for-project"')

// https://flaviocopes.com/node-get-current-folder/

// context is this package
console.log('xxxx __dirname: ', __dirname)
const jsonInSource = require('./json-in-source.json')
console.log('xxxx jsonInSource: ', jsonInSource)

// context is the consumer that installed package
console.log('xxxx process.cwd(): ', process.cwd())
const pathToJsonInConsumer = process.cwd() + '/json-in-consumer.json'
const jsonInConsumer = require(pathToJsonInConsumer)
console.log('xxxx jsonInConsumer: ', jsonInConsumer)



