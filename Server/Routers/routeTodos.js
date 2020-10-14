const express = require("express");
const router = express.Router();

const todoController = require("../controllers/todoController");


router.route('/todos').get(todoController.getAll);
router.route('/todos/:id').get(todoController.getSingleTodo).patch(todoController.markCompleted)
router.route('/todos/:userid').post(todoController.addTodo);




module.exports = router;
