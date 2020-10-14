const Post = require('../model/postModel');
const User = require('../model/userModel');

const getNextId = require('../shared/getNextId');

//get ALL posts:
exports.getAll = async (req, res) => {
    Post.find({}, (err, users) => {
      if (err) {
        return res.send(err);
      }
      return res.json(users);
    });
};
  
//get Single user:
exports.getSinglePost = async (req, res) => {
    Post.find({ id: req.params.id }, (err, singlePosts) => {
        if (err) {
            return res.send(err);
        }
        return res.json(singlePosts);
    });
};

//create new Post:
exports.addPost = async (req, res) => {

    const userid = req.params.userid;

    const user = await User.findOne({ id: userid });
    if (!user) {
        return res.status(401).send('could not add new post, all post must have a userId')
    }

    const id = await getNextId('post');

    const newPost = new Post({
        userId: userid,
        id: id,
        title: req.body.title,
        body: req.body.body,
    });
    await newPost.save((err) => {
        if (err) {
            return res.send(err);
        } else {
            res.status(201).json(newPost)
        }
    });
};

