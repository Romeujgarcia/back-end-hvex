const { error } = require("console");
const { response } = require("express");
const { find } = require("../models/indexmodels");
const indexmodels = require("../models/indexmodels");

// get User  
const getUsers = (req, res, next) => {
  indexmodels.find()
    .then((response) => {
      res.json({
        response,
      });
    })
    .catch((error) => {
      res.json({
        message: "An error occured!",
      });
    });
};

// get id User 
const getUserById= (req, res, next) => {
  let noderestID = req.body.noderestID;
  indexmodels.findById(noderestID)
    .then((response) => {
      res.json({
        response,
      });
    })
    .catch((error) => {
      res.json({
        message: "An error Occured!",
      });
    });
};

// add new User
const createUser = (req, res, next) => {
  let noderest = new indexmodels({
    name: req.body.name,
    name_de_usuario: req.body.name_de_usuario,
    senha: req.body.senha,
  });
  noderest
    .save()
    .then((response) => {
      res.json({
        message: "User Added Successfully!",
      });
    })
    .catch((error) => {
      res.json({
        message: "An error Occured!",
      });
    });
};

// update an User

const UpdateUser = (req, res, next) => {
  let noderestID = req.body.noderestID;

  let updatedData = {
    name: req.body.name,
    name_de_usuario: req.body.name_de_usuario,
    senha: req.body.senha,
  };
  indexmodels.findByIdAndUpdate(noderestID, { $set: updatedData })
    .then(() => {
      res.json({
        message: "User updated successfully!",
      });
    })
    .catch((error) => {
      res.json({
        message: "An error Occured!",
      });
    });
};
// delete as User
const deleteUser = (req, res, next) => {
  let noderestID = req.body.noderestID;
  indexmodels.findByIdAndRemove(noderestID)
    .then(() => {
      res.json({
        message: "User deleted successfully",
      });
    })
    .catch((error) => {
      res.json({
        message: "An error Occured!",
      });
    });
};

module.exports = {
  getUsers,
  getUserById,
  createUser,
  UpdateUser,
  deleteUser,
};