const { User } = require("../models/user.model");

const addUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const response = await User.create({
      name: name,
      email: email,
      password: password,
    });

    return res.status(200).json({
      status: true,
      data: response,
    });
  } catch (error) {
    return res.status(200).json({
      status: false,
      error: error.message,
    });
  }
};

const getUsers = async (req, res) => {
  try {
    const response = await User.find();

    return res.status(200).json({
      status: true,
      length: response.length,
      data: response,
    });
  } catch (error) {
    return res.status(200).json({
      status: false,
      error: error.message,
    });
  }
};

const getUserById = async (req, res) => {
  try {
    const id = req.params.id;

    const response = await User.find({
      _id: id,
    });

    return res.status(200).json({
      status: true,
      data: response,
    });
  } catch (error) {
    return res.status(200).json({
      status: false,
      error: error.message,
    });
  }
};

const updateUser = async (req, res) => {
  try {
    const id = req.params.id;

    const updateObj = req.body;

    await User.update({ _id: id }, { $set: updateObj });

    const response = await User.find({ _id: id });

    return res.status(200).json({
      status: true,
      data: response,
    });
  } catch (error) {
    return res.status(200).json({
      status: false,
      error: error.message,
    });
  }
};

const deleteUser = async (req, res) => {
  try {
    const id = req.params.id;

    await User.deleteOne({
      _id: id,
    });

    return res.status(200).json({
      status: true,
      message: "record deleted!",
    });
  } catch (error) {
    return res.status(200).json({
      status: false,
      error: error.message,
    });
  }
};

module.exports = {
  addUser,
  getUsers,
  getUserById,
  updateUser,
  deleteUser,
};
