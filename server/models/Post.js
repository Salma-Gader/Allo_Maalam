const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId, 
    required: true
  },
  titre: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  adresse: {
    type: String,
    required: true
  }
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;
