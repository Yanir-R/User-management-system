const axios = require("axios");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let todoArray = [];

const todoDataLink = async (url) => {
  const response = await axios.default.get(url)
  todoArray = response.data
}

const TodoSchema = new Schema(
  {
    userId: {type: Number},
    id:  {type: Number} ,
    title: {type: String},
    completed: {type: Boolean, default: false },
  },
  {
    collection: "todos",
  }
);

const Todo = mongoose.model("Todo", TodoSchema);

const getTodosFromApiAndSaveToDb = async (url) => {
  const response = await axios.default.get(url);
  const todos = response.data;
  todos.forEach(async (todo) => {
    if(todoArray.length<=0){
      const currentTodo = new Todo(todo)
      await currentTodo.save()
    }
  });
};

getTodosFromApiAndSaveToDb("https://jsonplaceholder.typicode.com/todos");
todoDataLink("http://localhost:8000/api/todos");
module.exports = Todo;
