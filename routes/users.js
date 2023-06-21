const express = require("express");
const router = express.Router();
const userController = require("../controllers/user");

const createUser = async(request, response) => {
  // userController.createUser(request, response);
  userController.createUser(request, response);
}

const updateUser = async(request, response) => {
  userController.updateUser(request, response);
}

const deleteUser = async(request, response) => {
  userController.deleteUser(request, response);
}

const getUser = async(request, response) => {
  userController.getUserById(request, response);
}

const getAllUsers = async(request, response) => {
  userController.getAllUsers(request, response);
}

const authenticateUser = async (request, response) => {
  userController.authenticateUser(request, response);
}

router.post('/create', createUser);
router.put('/update', updateUser);
router.delete('/delete', deleteUser);
router.get('/getuser', getUser);
router.get('/getallusers', getAllUsers);
router.post('/authentication', authenticateUser);

module.exports = router;


