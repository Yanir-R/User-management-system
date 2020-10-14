const axios = require("axios");
const mongoose = require("mongoose");


const Schema = mongoose.Schema;

let postArray = [];
const postArrayLink = async (url) => {
  const response = await axios.default.get(url)
  postArray = response.data;
}

const PostSchema = new Schema(
  {
    userId: {type: Number, required: true },
    id:  {type: Number, unique: true },
    title: {type: String},
    body: {type: String, required: true},
  },
  {
    collection: "posts",
  }
);

const Post = mongoose.model("Post", PostSchema);

const getPostsFromApiAndSaveToDb = async (url) => {
  const response = await axios.default.get(url);
  const posts = response.data;
  posts.forEach(async (post) => {
    if(postArray.length<=0){
    currentPost = new Post(post);
      await currentPost.save();
    }
  });
};

getPostsFromApiAndSaveToDb("https://jsonplaceholder.typicode.com/posts");
postArrayLink("http://localhost:8000/api/posts")
module.exports = Post;
