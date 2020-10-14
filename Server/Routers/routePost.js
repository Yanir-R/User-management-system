const express = require("express");
const router = express.Router();

const postController = require('../controllers/postController');

router.route('/posts').get(postController.getAll);
router.route('/posts/:userid').post(postController.addPost);
router.route('/posts/:id').get(postController.getSinglePost).patch()

module.exports = router;
