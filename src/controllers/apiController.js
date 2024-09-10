const User = require('../models/user');
const { uploadSingleFile } = require('../services/fileService');

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

const postUploadSingleFileApi = async (req, res) => {
    if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).send('No files were uploaded.');
    }

    let result = await uploadSingleFile(req.files.image);
    console.log(">>> check result: ", result);

    return res.send("ok single")
}

module.exports = {
    getUsersAPI,
    postCreateUserAPI,
    putUpdateUserAPI,
    deleteUserAPI,
    postUploadSingleFileApi
}