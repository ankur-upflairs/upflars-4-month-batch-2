const express = require('express');
const router = express.Router();
const {getAllBlogs, createBlog, updateBlog, deleteBlog , getBlog} = require('../controllers/blogController')



router.get('/',getAllBlogs)
router.post('/',createBlog)
router.get('/:id',getBlog)
router.put('/:id',updateBlog)
router.delete('/:id',deleteBlog)

module.exports= router
