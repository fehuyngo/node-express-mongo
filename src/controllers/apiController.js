const User = require('../models/user');

const getUsersAPI = async (req, res) => {
    let results = await User.find({});
    return res.status(200).json({
        EC: 0,
        data: results
    })
}


const postCreateUserAPI = async (req, res) => {
    const { email, name, city } = req.body;
    let user = await User.create({
        email, name, city
    })
    return res.status(200).json({
        EC: 0,
        data: user
    })
}

const putUpdateUserAPI = async (req, res) => {
    const { email, name, city, userId } = req.body;
    let user = await User.updateOne({ _id: userId }, { email, name, city });
    return res.status(200).json({
        EC: 0,
        data: user
    })
}

const deleteUserAPI = async (req, res) => {
    const id = req.body.userId;
    let result = await User.deleteOne({
        _id: id
    })
    return res.status(200).json({
        EC: 0,
        data: result
    })
}

module.exports = {
    getUsersAPI,
    postCreateUserAPI,
    putUpdateUserAPI,
    deleteUserAPI
}