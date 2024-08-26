const connection = require('../config/database');

const getHomepage = (req, res) => {
    connection.query(
        'SELECT * FROM Users',
        (err, results, fields) => {
            users = results;
            console.log(">>> results= ", results);

            res.send(JSON.stringify(users));
        }
    );
}

const getABC = (req, res) => {
    res.send('check ABC')
}

const getHoiDanIT = (req, res) => {
    res.render('sample.ejs')
}

module.exports = {
    getHomepage,
    getABC,
    getHoiDanIT,
}