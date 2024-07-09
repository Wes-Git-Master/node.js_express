const EE = require('node:events')

const emitter = new EE()

emitter.on('test2', (...data) => {
    console.log(data)
})

emitter.once('test2', (...data) => {  //  єдине спрацювання
    console.log(data)
})

module.exports = {emitter}