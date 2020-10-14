const User = require('../model/userModel');
const Post = require('../model/postModel');
const Todo = require('../model/toToModel');

const getNextId = async (model) => { 
        let collection = null;
        switch (model) {
            case 'user':
                collection = await User.find();
                break;
            case 'post':
                collection = await Post.find();
                break;
            case 'todo':
                collection = await Todo.find();
                break;
        }
        if (!collection) {
            throw('Could not Find Data')
        }
        let id = 0

        collection.forEach((el) => {
            if (el.id > id) {
                id = el.id;
            }
        });
        return(id + 1);    
};

module.exports = getNextId;