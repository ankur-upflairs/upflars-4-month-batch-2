const mongoose = require('mongoose');
const {Schema} = mongoose;

const blogSchema = new Schema({
  title : {
    type : String,
    required : true
  },
  description : {
    type : String,
    required : true
  },
  image : {
    type : String,
    required : true
  },
  author : {
    type : mongoose.Schema.Types.ObjectId,
    ref : 'User',
    required : true
  },
  comments : [{
    content: {
      type: String,
      required: true
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
  }],
})


module.exports = mongoose.model('Blog',blogSchema);
