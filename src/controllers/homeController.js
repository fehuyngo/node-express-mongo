const connection = require('../config/database');
const { getAllUsers } = require('../services/CRUDService');

const getHomepage = async (req, res) => {
    let results = await getAllUsers();
    return res.render('home.ejs', { listUsers: results })
}

const getABC = (req, res) => {
    res.send('check ABC')
}

const getHoiDanIT = (req, res) => {
    res.render('sample.ejs')
}

const getCreatePage = (req, res) => {
    res.render('create.ejs')
}

const getUpdatePage = (req, res) => {
    const userId = req.params.id;
    res.render('edit.ejs')
}

const postCreateUser = async (req, res) => {
    const { email, myname, city } = req.body;

    let [results, fields] = await connection.query(
        `INSERT INTO Users (email, name, city) VALUES (?, ?, ?)`, [email, myname, city],
    );

    res.send('Created user succeed!');
}

module.exports = {
    getHomepage,
    getABC,
    getHoiDanIT,
    postCreateUser,
    getCreatePage,
    getUpdatePage
}