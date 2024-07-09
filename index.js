const fsPromises = require('node:fs/promises')
const path = require('node:path')

const foo = async () => {

    const base = path.join(__dirname, 'baseFolder')

    //  - 1. Створити папку "baseFolder". -----------------------------

    await fsPromises.mkdir(base)

    //  - 2. В ній створити 5 папок. -----------------------------------

    await fsPromises.mkdir(path.join(base, 'folder_1'))
    await fsPromises.mkdir(path.join(base, 'folder_2'))
    await fsPromises.mkdir(path.join(base, 'folder_3'))
    await fsPromises.mkdir(path.join(base, 'folder_4'))
    await fsPromises.mkdir(path.join(base, 'folder_5'))

    //  - 3. В кожній з яких створити по 5 файлів з розширенням txt.

    await fsPromises.writeFile(path.join(base, 'folder_1', 'File_1.txt'), 'File_1')
    await fsPromises.writeFile(path.join(base, 'folder_1', 'File_2.txt'), 'File_2')
    await fsPromises.writeFile(path.join(base, 'folder_1', 'File_3.txt'), 'File_3')
    await fsPromises.writeFile(path.join(base, 'folder_1', 'File_4.txt'), 'File_4')
    await fsPromises.writeFile(path.join(base, 'folder_1', 'File_5.txt'), 'File_5')

    await fsPromises.writeFile(path.join(base, 'folder_2', 'File_1.txt'), 'File_1')
    await fsPromises.writeFile(path.join(base, 'folder_2', 'File_2.txt'), 'File_2')
    await fsPromises.writeFile(path.join(base, 'folder_2', 'File_3.txt'), 'File_3')
    await fsPromises.writeFile(path.join(base, 'folder_2', 'File_4.txt'), 'File_4')
    await fsPromises.writeFile(path.join(base, 'folder_2', 'File_5.txt'), 'File_5')

    await fsPromises.writeFile(path.join(base, 'folder_3', 'File_1.txt'), 'File_1')
    await fsPromises.writeFile(path.join(base, 'folder_3', 'File_2.txt'), 'File_2')
    await fsPromises.writeFile(path.join(base, 'folder_3', 'File_3.txt'), 'File_3')
    await fsPromises.writeFile(path.join(base, 'folder_3', 'File_4.txt'), 'File_4')
    await fsPromises.writeFile(path.join(base, 'folder_3', 'File_5.txt'), 'File_5')

    await fsPromises.writeFile(path.join(base, 'folder_4', 'File_1.txt'), 'File_1')
    await fsPromises.writeFile(path.join(base, 'folder_4', 'File_2.txt'), 'File_2')
    await fsPromises.writeFile(path.join(base, 'folder_4', 'File_3.txt'), 'File_3')
    await fsPromises.writeFile(path.join(base, 'folder_4', 'File_4.txt'), 'File_4')
    await fsPromises.writeFile(path.join(base, 'folder_4', 'File_5.txt'), 'File_5')

    await fsPromises.writeFile(path.join(base, 'folder_5', 'File_1.txt'), 'File_1')
    await fsPromises.writeFile(path.join(base, 'folder_5', 'File_2.txt'), 'File_2')
    await fsPromises.writeFile(path.join(base, 'folder_5', 'File_3.txt'), 'File_3')
    await fsPromises.writeFile(path.join(base, 'folder_5', 'File_4.txt'), 'File_4')
    await fsPromises.writeFile(path.join(base, 'folder_5', 'File_5.txt'), 'File_5')

    //  - 4. Вивести в консоль шляхи до кожного файлу чи папки.
    //  - 5. Також вивести поряд інформацію про те, чи є це файл чи папка.

    console.log(path.join(base, 'folder_1'))
    console.log(path.join(base, 'folder_2'))
    console.log(path.join(base, 'folder_3'))
    console.log(path.join(base, 'folder_4'))
    console.log(path.join(base, 'folder_5'))

    console.log(path.join(base, 'folder_1', 'File_1.txt'));
    const stat = await fsPromises.stat
    (path.join(base, 'folder_1', 'File_1.txt'))
    console.log('isDirectory: ', stat.isDirectory())
    console.log('isFile: ', stat.isFile())

    console.log(path.join(base, 'folder_1', 'File_2.txt'));
    const stat2 = await fsPromises.stat
    (path.join(base, 'folder_1', 'File_2.txt'))
    console.log('isDirectory: ', stat2.isDirectory())
    console.log('isFile: ', stat2.isFile())

    console.log(path.join(base, 'folder_1', 'File_3.txt'));
    const stat3 = await fsPromises.stat
    (path.join(base, 'folder_1', 'File_3.txt'))
    console.log('isDirectory: ', stat3.isDirectory())
    console.log('isFile: ', stat3.isFile())

    console.log(path.join(base, 'folder_1', 'File_4.txt'));
    const stat4 = await fsPromises.stat
    (path.join(base, 'folder_1', 'File_4.txt'))
    console.log('isDirectory: ', stat4.isDirectory())
    console.log('isFile: ', stat4.isFile())

    console.log(path.join(base, 'folder_1', 'File_5.txt'));
    const stat5 = await fsPromises.stat
    (path.join(base, 'folder_1', 'File_5.txt'))
    console.log('isDirectory: ', stat5.isDirectory())
    console.log('isFile: ', stat5.isFile())

    //--------------------------------------------------------

    console.log(path.join(base, 'folder_2', 'File_1.txt'));
    const stat6 = await fsPromises.stat
    (path.join(base, 'folder_2', 'File_1.txt'))
    console.log('isDirectory: ', stat6.isDirectory())
    console.log('isFile: ', stat6.isFile())

    console.log(path.join(base, 'folder_2', 'File_2.txt'));
    const stat7 = await fsPromises.stat
    (path.join(base, 'folder_2', 'File_2.txt'))
    console.log('isDirectory: ', stat7.isDirectory())
    console.log('isFile: ', stat7.isFile())

    console.log(path.join(base, 'folder_2', 'File_3.txt'));
    const stat8 = await fsPromises.stat
    (path.join(base, 'folder_2', 'File_3.txt'))
    console.log('isDirectory: ', stat8.isDirectory())
    console.log('isFile: ', stat8.isFile())

    console.log(path.join(base, 'folder_2', 'File_4.txt'));
    const stat9 = await fsPromises.stat
    (path.join(base, 'folder_2', 'File_4.txt'))
    console.log('isDirectory: ', stat9.isDirectory())
    console.log('isFile: ', stat9.isFile())

    console.log(path.join(base, 'folder_2', 'File_5.txt'));
    const stat10 = await fsPromises.stat
    (path.join(base, 'folder_2', 'File_5.txt'))
    console.log('isDirectory: ', stat10.isDirectory())
    console.log('isFile: ', stat10.isFile())

    //-----------------------------------------------------

    console.log(path.join(base, 'folder_3', 'File_1.txt'));
    const stat11 = await fsPromises.stat
    (path.join(base, 'folder_3', 'File_1.txt'))
    console.log('isDirectory: ', stat11.isDirectory())
    console.log('isFile: ', stat11.isFile())

    console.log(path.join(base, 'folder_3', 'File_2.txt'));
    const stat12 = await fsPromises.stat
    (path.join(base, 'folder_3', 'File_2.txt'))
    console.log('isDirectory: ', stat12.isDirectory())
    console.log('isFile: ', stat12.isFile())

    console.log(path.join(base, 'folder_3', 'File_3.txt'));
    const stat13 = await fsPromises.stat
    (path.join(base, 'folder_3', 'File_3.txt'))
    console.log('isDirectory: ', stat13.isDirectory())
    console.log('isFile: ', stat13.isFile())

    console.log(path.join(base, 'folder_3', 'File_4.txt'));
    const stat14 = await fsPromises.stat
    (path.join(base, 'folder_3', 'File_4.txt'))
    console.log('isDirectory: ', stat14.isDirectory())
    console.log('isFile: ', stat14.isFile())

    console.log(path.join(base, 'folder_3', 'File_5.txt'));
    const stat15 = await fsPromises.stat
    (path.join(base, 'folder_3', 'File_5.txt'))
    console.log('isDirectory: ', stat15.isDirectory())
    console.log('isFile: ', stat15.isFile())

    //-----------------------------------------------------

    console.log(path.join(base, 'folder_4', 'File_1.txt'));
    const stat16 = await fsPromises.stat
    (path.join(base, 'folder_4', 'File_1.txt'))
    console.log('isDirectory: ', stat16.isDirectory())
    console.log('isFile: ', stat16.isFile())

    console.log(path.join(base, 'folder_4', 'File_2.txt'));
    const stat17 = await fsPromises.stat
    (path.join(base, 'folder_4', 'File_2.txt'))
    console.log('isDirectory: ', stat17.isDirectory())
    console.log('isFile: ', stat17.isFile())

    console.log(path.join(base, 'folder_4', 'File_3.txt'));
    const stat18 = await fsPromises.stat
    (path.join(base, 'folder_4', 'File_3.txt'))
    console.log('isDirectory: ', stat18.isDirectory())
    console.log('isFile: ', stat18.isFile())

    console.log(path.join(base, 'folder_4', 'File_4.txt'));
    const stat19 = await fsPromises.stat
    (path.join(base, 'folder_4', 'File_4.txt'))
    console.log('isDirectory: ', stat19.isDirectory())
    console.log('isFile: ', stat19.isFile())

    console.log(path.join(base, 'folder_4', 'File_5.txt'));
    const stat20 = await fsPromises.stat
    (path.join(base, 'folder_4', 'File_5.txt'))
    console.log('isDirectory: ', stat20.isDirectory())
    console.log('isFile: ', stat20.isFile())

    //-----------------------------------------------------

    console.log(path.join(base, 'folder_5', 'File_1.txt'));
    const stat21 = await fsPromises.stat
    (path.join(base, 'folder_5', 'File_1.txt'))
    console.log('isDirectory: ', stat21.isDirectory())
    console.log('isFile: ', stat21.isFile())

    console.log(path.join(base, 'folder_1', 'File_2.txt'));
    const stat22 = await fsPromises.stat
    (path.join(base, 'folder_5', 'File_2.txt'))
    console.log('isDirectory: ', stat22.isDirectory())
    console.log('isFile: ', stat22.isFile())

    console.log(path.join(base, 'folder_5', 'File_3.txt'));
    const stat23 = await fsPromises.stat
    (path.join(base, 'folder_5', 'File_3.txt'))
    console.log('isDirectory: ', stat23.isDirectory())
    console.log('isFile: ', stat23.isFile())

    console.log(path.join(base, 'folder_5', 'File_4.txt'));
    const stat24 = await fsPromises.stat
    (path.join(base, 'folder_5', 'File_4.txt'))
    console.log('isDirectory: ', stat24.isDirectory())
    console.log('isFile: ', stat24.isFile())

    console.log(path.join(base, 'folder_5', 'File_5.txt'));
    const stat25 = await fsPromises.stat
    (path.join(base, 'folder_5', 'File_5.txt'))
    console.log('isDirectory: ', stat25.isDirectory())
    console.log('isFile: ', stat25.isFile())


}

void foo()