const http = require('node:http')
const path = require('node:path')
const readline = require('node:readline')

// * ========================   HTTP   ======================== *

// const server
//     = http.createServer((req, res) => {
//     res.writeHead(200, {'Content-Type': 'text/plain'})
//     res.end('Hello World\n2222')
// })
// server.listen(3000)

// * ========================   Path   ======================== *

// console.log(__filename)                                            // absolute file path
// console.log(path.basename(__filename))                             // base file name
// console.log(path.dirname(__filename))                              // the path to the folder in which the file is located
// console.log(path.extname(__filename))                              // file extension
// console.log(path.parse(__filename))                                // data about the file and the path to it
// console.log(path.normalize                                         // normalization of the path
//     ('C:\//Users\\///user\\//IdeaProjects\/node.js')
// )
// console.log(path.isAbsolute                                        // absolute path check
//     ('C:\\Users\\user\\IdeaProjects\\node.js\\index.js\n')
// )

// * ========================   Readline   ======================== *