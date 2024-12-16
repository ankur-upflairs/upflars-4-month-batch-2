const Blog = require('../models/blog');

exports.getAllBlogs=async (req,res)=>{
    const blogs = await Blog.find();
    res.json(blogs);
}
exports.getBlog=async (req,res)=>{
    let id = req.params.id;
    const blog = await Blog.findById(id);
    res.json(blog); 
}
exports.createBlog= async (req,res)=>{
    // console.log(req.body)   
    const {title,description,image} = req.body;
    // console.log(title)
    let blog = new Blog({title,description,image})    
    // let blog = new Blog()
    // blog.title = title
    // blog.description = description
    // blog.image = image
    const newBlog = await blog.save();
    res.json(newBlog)
 }

 exports.updateBlog= async (req,res)=>{
    let id = req.params.id;
   title = req.body.title
   const blog = await Blog.findByIdAndUpdate(id,{title})
   res.json(blog)

}

exports.deleteBlog= async (req,res)=>{
    let id = req.params.id;
   await Blog.findByIdAndDelete(id) 
    res.send('blog deleted')
}



// const fs = require('fs');
// const path= require('path');

// let filePath= path.join(__dirname,'data.json');

// let fileData= fs.readFileSync(filePath);
// let blogs = JSON.parse(fileData);
// exports.getAllBlogs= (req,res)=>{    
//     res.json(blogs);
// }

// exports.createBlog=(req,res)=>{
//     console.log(req.body)
//     let newId = blogs.length > 0? blogs[blogs.length-1].id +1   : 1;
//     let newBlog= {id:newId,title:req.body.title}
//     blogs.push(newBlog)
//     fs.writeFileSync(filePath,JSON.stringify(blogs,null,4))
//     res.json(newBlog)
//  }

//  exports.updateBlog=(req,res)=>{
//     let id = req.params.id;
//    let index = blogs.findIndex(blog => blog.id == id);
//    title = req.body.title
//    blogs[index].title = title
//    fs.writeFileSync(filePath,JSON.stringify(blogs,null,4))
//     res.json(blogs[index])
// }

// exports.deleteBlog=(req,res)=>{
//     let id = req.params.id;
//    blogs = blogs.filter(blog => blog.id != id) 
//    fs.writeFileSync(filePath,JSON.stringify(blogs,null,4))
//     res.send('blog deleted')
// }



// exports.getAllBlogs= (req,res)=>{    
//     res.send(blogs);
// }

// exports.createBlog=(req,res)=>{
//     let newId = blogs.length > 0? blogs[blogs.length-1].id +1   : 1;
//     let blog={title:'climate change', id : newId}
//     blogs.push(blog)
//     res.send('post added')
//  }

//  exports.updateBlog=(req,res)=>{
//     let id = req.params.id;
//    let index = blogs.findIndex(blog => blog.id == id);
//    title = 'sound pollution'
//    blogs[index].title = title
//     res.send('blog update')
// }

// exports.deleteBlog=(req,res)=>{
//     let id = req.params.id;
//    blogs = blogs.filter(blog => blog.id != id) 
//     res.send('blog deleted')
// }