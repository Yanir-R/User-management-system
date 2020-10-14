const Todo = require('../model/toToModel')

const getNextId = require('../shared/getNextId')

//get ALL to-do's:
exports.getAll = async (req, res) => {
    Todo.find({}, (err, todos) => {
      if (err) {
        return res.send(err);
      }
      return res.json(todos);
    });
};
  
//get Single To-do:
exports.getSingleTodo = async (req, res) => {
 
    Todo.find({id: req.params.id }, (err, todo) => {
      if (err) {
        return res.send(err);
      }
      return res.json(todo);
    });
};
  
//create New To-do:
exports.addTodo = async (req, res) => {
 
    const userid = req.params.userid;

    const id = await getNextId('todo');
    const todo = new Todo({
      userId: userid,
      id: id,
      title: req.body.title,
      completed: false,
    });

    const newTodo = await todo.save();
    
    if (!newTodo) {
        return res.status(500).send('could not Add new Todo')
    }
    res.status(201).json(newTodo);
};

//update Todo:
exports.markCompleted = async (req, res) => {
    const id = req.params.id;

    const todo = await Todo.findOneAndUpdate({ id: id }, { completed: true }, { new: true })
    
    if (!todo) {
        return res.status(500).send('could not update todo')
    }
    res.status(200).json(todo);
}



