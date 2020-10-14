const express = require("express");
const router = express.Router();

const userControl = require("../controllers/userController");

router.route('/users').get(userControl.getAllUsers).post(userControl.addUser);

router.route('/users/:id').get(userControl.getSingleUserById).patch(userControl.updateUser).delete(userControl.deleteUser);


module.exports = router;
