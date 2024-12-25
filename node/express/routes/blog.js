const express = require('express');
const router = express.Router();
const {getAllBlogs, createBlog, updateBlog, deleteBlog , getBlog} = require('../controllers/blogController')
const multer = require('multer');
const { auth, authentice } = require('../middleware/auth');
// const upload = multer({dest:'uploads/'});

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
      cb(null,Date.now()+'-'+ file.originalname)
    }
  })
  const upload = multer({ storage: storage ,limits:{fileSize:1024*1024*5}}) 

router.get('/',getAllBlogs)
router.post('/',auth,authentice('user','creator'),upload.single('image'),createBlog)
router.get('/:id',getBlog)
router.put('/:id',updateBlog)
router.delete('/:id',deleteBlog)
module.exports= router
