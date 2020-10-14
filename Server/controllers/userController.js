const User = require('../model/userModel')
const Post = require('../model/postModel')
const Todo = require('../model/toToModel')

const getNextId = require('../shared/getNextId')

//get ALL users:
exports.getAllUsers = async (req, res) => {
    User.find({}, (err, users) => {
      if (err) {
        return res.send(err);
      }
      return res.json(users);
    });
};

//get Single User:
exports.getSingleUserById = async (req, res) => {
    User.find({ id: req.params.id }, (err, singleUser) => {
      if (err) {
        return res.send(err);
      }
      return res.json(singleUser);
    });
};

//create New User:
exports.addUser = async (req, res) => {
  try {

    const user = new User(req.body);

    user.id = await getNextId('user');
    
    const addedUser = await user.save();
    
    if (!addedUser) {
        return res.status(500).send('could not add user, try again later');
    }
    res.status(201).json(addedUser);
} catch (error) {
    res.json(error);
}
};
  
//Update User:
exports.updateUser = async (req, res) => {
 
  let doc = await User.findOneAndUpdate({ id: req.params.id}, req.body, (err)=> {
    if(err)
    {
        return res.send(err)
    }
    else
    {
        return console.log("User updated")
    }
  });
  res.json(doc);
};
   
//Delete User:
exports.deleteUser = async (req, res) => {

    const deletedUser = User.findOneAndDelete({ id: req.params.id }).exec()
    const deletedPost = Post.deleteMany({ userId: req.params.id }).exec()
    const deletedTodo = Todo.deleteMany({ userId: req.params.id }).exec()
  
    Promise.all([deletedUser, deletedPost, deletedTodo]).then(() => {
        console.log('User Deleted')
    }).catch(console.error)
};