const connection = require('../config/database');
const { getAllUsers, getUserById,
    updateUserById, deleteUserById } = require('../services/CRUDService');
const User = require('../models/user');

const getHomepage = async (req, res) => {
    let results = await User.find({});
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

const getUpdatePage = async (req, res) => {
    const userId = req.params.id;
    let user = await User.findById(userId).exec();
    res.render('edit.ejs', { userEdit: user })
}

const postCreateUser = async (req, res) => {
    const { email, name, city } = req.body;
    await User.create({
        email, name, city
    })
    res.send('Created user succeed!');
}

const postUpdateUser = async (req, res) => {
    const { email, name, city, userId } = req.body;
    await User.updateOne({ _id: userId }, { email, name, city });
    res.redirect('/');
}

const postDeleteUser = async (req, res) => {
    const userId = req.params.id;
    let user = await User.findById(userId).exec();
    res.render('delete.ejs', { userEdit: user });
}

const postHandleRemoveUser = async (req, res) => {
    const id = req.body.userId;
    let result = await User.deleteOne({
        _id: id
    })
    console.log(">>> result: ", result);
    res.redirect('/');
}

module.exports = {
    getHomepage,
    getABC,
    getHoiDanIT,
    postCreateUser,
    getCreatePage,
    getUpdatePage,
    postUpdateUser,
    postDeleteUser,
    postHandleRemoveUser
}