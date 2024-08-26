const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.send('Hello World! & nodemon')
})

router.get('/abc', (req, res) => {
    res.send('check ABC')
})

router.get('/hoidanit', (req, res) => {
    // res.send('<h1>Hoi Dan IT with Eric</h1>')
    res.render('sample.ejs')
})

module.exports = router;