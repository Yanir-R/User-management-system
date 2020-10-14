const axios = require("axios");
const mongoose = require("mongoose");

const Schema = mongoose.Schema;
let userArray = [];


const userArrayLink = async (url) => {
  const respoone = await axios.default.get(url)
  userArray = respoone.data
}
const UserScehma = new Schema(
  {
    
    id: {type: Number, unique: true},
    name: {type: String, required: [true, 'provide your full name']},
    email: { type: String, unique: true, required: [true, 'provide your email']},
    address: { type: Map, of: String},
    username: {type: String},
  
  },
  {
    collection: "users",
  }
);

const User = mongoose.model("User", UserScehma);
const getUsersFromApiAndSaveToDb = async (url) => {
	return new Promise(async (resolve) => {
		try {
			const response = await axios.default.get(`${url}/users`);
			const users = response.data;

      users.forEach(async (user) => {
        if (userArray.length <= 0) {
          const currentUser = new User({
            id: user.id,
            name: user.name,
            email: user.email,
            username: user.username,
            address: {
              city: user.address.city,
              street: user.address.street,
             
            },
          });
          await currentUser.save();
          resolve()
        }
			;
			})
		} catch (error) {
			console.log(error.stack);
		}
	});
}
  


getUsersFromApiAndSaveToDb("https://jsonplaceholder.typicode.com", "users", User);
userArrayLink("http://localhost:8000/api/users");
module.exports = User;
