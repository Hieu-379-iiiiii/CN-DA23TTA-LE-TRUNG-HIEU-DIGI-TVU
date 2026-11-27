const { Post } = require('../models');

function isValidId(id) {
  return /^\d+$/.test(String(id));
}

exports.getPosts = async (req, res) => {
  try {
    const { limit, offset, orderBy, order } = req.query;
    const options = {};
    if (limit !== undefined) options.limit = Number(limit);
    if (offset !== undefined) options.offset = Number(offset);
    if (orderBy) options.orderBy = orderBy;
    if (order) options.order = order;

    if ((limit !== undefined && (!Number.isInteger(options.limit) || options.limit < 0)) ||
        (offset !== undefined && (!Number.isInteger(options.offset) || options.offset < 0))) {
      return res.status(400).json({ success: false, message: 'limit and offset must be non-negative integers' });
    }

    const posts = await Post.findAll(options);
    res.json({ success: true, data: posts });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

exports.getPostById = async (req, res) => {
  try {
    if (!isValidId(req.params.id)) return res.status(400).json({ success: false, message: 'Invalid post id' });
    const post = await Post.findById(req.params.id);
    if (!post) return res.status(404).json({ success: false, message: 'Post not found' });
    res.json({ success: true, data: post });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

exports.createPost = async (req, res) => {
  try {
    if (!req.body || Object.keys(req.body).length === 0) {
      return res.status(400).json({ success: false, message: 'Post data is required' });
    }
    const post = await Post.create(req.body);
    res.status(201).json({ success: true, data: post });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

exports.updatePost = async (req, res) => {
  try {
    if (!isValidId(req.params.id)) return res.status(400).json({ success: false, message: 'Invalid post id' });
    if (!req.body || Object.keys(req.body).length === 0) {
      return res.status(400).json({ success: false, message: 'Post data is required' });
    }
    const post = await Post.update(req.params.id, req.body);
    if (!post) return res.status(404).json({ success: false, message: 'Post not found' });
    res.json({ success: true, data: post });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

exports.deletePost = async (req, res) => {
  try {
    if (!isValidId(req.params.id)) return res.status(400).json({ success: false, message: 'Invalid post id' });
    const post = await Post.delete(req.params.id);
    if (!post) return res.status(404).json({ success: false, message: 'Post not found' });
    res.json({ success: true, data: post });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
