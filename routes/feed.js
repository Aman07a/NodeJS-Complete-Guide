const express = require('express');

const feedControlller = require('../controllers/feed');

const router = express.Router();

// GET /feed/posts
router.get('/posts', feedControlller.getPosts);

module.exports = router;
