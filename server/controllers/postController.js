const Post = require('../models/Post');

// Controller functions for CRUD operations

// Create a new post
const createPost = async (req, res) => {
  try {
    const newPost = new Post(req.body);
    const savedPost = await newPost.save();
    res.status(201).json(savedPost);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all posts
const getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find();
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get a single post by ID
const getPostById = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) {
      return res.status(404).json({ error: 'Post not found' });
    }
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update a post by ID
const updatePostById = async (req, res) => {
  try {
    const updatedPost = await Post.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedPost) {
      return res.status(404).json({ error: 'Post not found' });
    }
    res.status(200).json(updatedPost);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete a post by ID
const deletePostById = async (req, res) => {
  try {
    const deletedPost = await Post.findByIdAndDelete(req.params.id);
    if (!deletedPost) {
      return res.status(404).json({ error: 'Post not found' });
    }
    res.status(200).json({ message: 'Post deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
const searchPostsByAddress = async (req, res) => {
    try {
      const { address } = req.query;
      const posts = await Post.find({ adresse: address });
      res.status(200).json(posts);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

module.exports = {
  createPost,
  getAllPosts,
  getPostById,
  updatePostById,
  deletePostById,
  searchPostsByAddress
};
