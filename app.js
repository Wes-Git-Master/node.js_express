const express = require('express');
const app = express();
const users = require('./users.json')
const fs = require("node:fs");
const path = require("node:path");

app.use(express.json())
app.use(express.urlencoded({extended: true}))

const PORT = 5000

const allowedKeys = ['name', 'age', 'status'];

//===========================================================================================================

app.get('/users', (req, res) => {

    if (users && users.length > 0) {
        res.json(users)
    } else {
        res.status(404).json({message: 'No users found'})
    }

})

//===========================================================================================================

app.post('/users', (req, res) => {
    const newUser = req.body
    const allowedKeys = ['name', 'age', 'status']
    const receivedKeys = Object.keys(newUser)
    const isValidKeys = receivedKeys.every(key => allowedKeys.includes(key))

    if (Object.keys(newUser).length === 0 && newUser.constructor === Object) {
        return res.status(400).json({message: 'Empty object provided'});
    }

    if (!isValidKeys) {
        return res.status(400).json({message: 'Invalid keys provided'})
    }

    if (!newUser.name || typeof newUser.name !== 'string') {
        return res.status(400).json({message: 'Invalid or missing name'})
    }

    if (!newUser.age || isNaN(newUser.age) || typeof newUser.age !== 'number') {
        return res.status(400).json({message: 'Invalid or missing age'})
    }

    if (typeof newUser.status !== 'boolean') {
        return res.status(400).json({message: 'Invalid or missing status'})
    }

    const newId = users.length > 0 ? users[users.length - 1].id + 1 : 1

    const userWithId = {id: newId, ...newUser}
    users.push(userWithId)

    fs.writeFile(path.join(__dirname, 'users.json'), JSON.stringify(users, null, 2), (err) => {
        if (err) {
            console.error(err)
            return res.status(500).json({message: 'Internal Server Error'})
        }

        res.status(201).json({message: 'User added successfully', user: userWithId})
    })
});

app.listen(PORT, () => {
    console.log(`Server has started on PORT ${PORT}`)
})