const http = require('node:http')
const path = require('node:path')
const readline = require('node:readline/promises')  //  promised methods
const fs = require('node:fs')
const fsPromises = require('node:fs/promises')

const foo = async () => {

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

    // const readlineInstance = readline.createInterface({
    //     input: process.stdin,
    //     output: process.stdout
    // });
    //
    // const name = await readlineInstance.question('Enter your name:')
    // console.log(`Hello ${name}`)
    // const age = await readlineInstance.question('Enter your age:')
    // console.log(`You are ${age} years old`)
    // process.exit(0)

    // * ============================   FS  ============================ *

    const pathToFile = path.join                             // шлях до файлу
        (__dirname, 'some_dir', 'test.txt')
    // ----------------------------------------------------------------------------------------------------------
    await fsPromises.writeFile                                      // створення файлу
        (pathToFile, 'Hello world !!!')
    // ----------------------------------------------------------------------------------------------------------
    const data
        = await fsPromises.readFile                                 // зчитування даних файлу
        (pathToFile, 'utf8');
    console.log(data)
    // ----------------------------------------------------------------------------------------------------------
    await fsPromises.appendFile                                     // додавання в файл нових даних
        (pathToFile, '\n new data: (appendFile)')
    // ----------------------------------------------------------------------------------------------------------
    // await fsPromises.unlink                                      // видалення файлу
    // (path.join(__dirname, 'some_dir', 'test.txt'))
    // ----------------------------------------------------------------------------------------------------------
    await fsPromises.mkdir                                          // створення папки
        (path.join(__dirname, 'some_dir', 'new_dir', 'new_dir2'),
            {recursive: true})
    // ----------------------------------------------------------------------------------------------------------
    // await fsPromises.rmdir                                       // видалення папки
    // (path.join(__dirname, 'some_dir', 'new_dir', 'new_dir2'))
    // ----------------------------------------------------------------------------------------------------------
    await fsPromises.rm                                             // видалення папок & файлів
        (path.join(__dirname, 'some_dir', 'new_dir'),
            {recursive: true})
    // ----------------------------------------------------------------------------------------------------------
    // await fsPromises.rename                                      // переміщення & перейменування файлу
    //     (path.join(__dirname, 'some_dir', 'test.txt'),
    //         path.join(__dirname, 'testPc.txt'))
    // ----------------------------------------------------------------------------------------------------------
    await fsPromises.copyFile                                       // копіювання файлу
        (path.join(__dirname, 'some_dir', 'test.txt'),
            path.join(__dirname, 'testCopy.txt'))
    // ----------------------------------------------------------------------------------------------------------
    const stat
        = await fsPromises.stat                                     // дані & інформація про файл
        (path.join(__dirname, 'some_dir', 'test.txt'))
    console.log(stat.isDirectory())
    console.log(stat.isFile())

    // * ========================   FS stream  ======================== *




}
void foo()