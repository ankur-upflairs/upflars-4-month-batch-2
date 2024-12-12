const fs = require('fs');
const path= require('path');

let filePath= path.join(__dirname,'data.json');

let fileData= fs.readFileSync(filePath);
let blogs = JSON.parse(fileData);
exports.getAllBlogs= (req,res)=>{    
    res.json(blogs);
}

exports.createBlog=(req,res)=>{
    console.log(req.body)
    let newId = blogs.length > 0? blogs[blogs.length-1].id +1   : 1;
    let newBlog= {id:newId,title:req.body.title}
    blogs.push(newBlog)
    fs.writeFileSync(filePath,JSON.stringify(blogs,null,4))
    res.json(newBlog)
 }

 exports.updateBlog=(req,res)=>{
    let id = req.params.id;
   let index = blogs.findIndex(blog => blog.id == id);
   title = req.body.title
   blogs[index].title = title
   fs.writeFileSync(filePath,JSON.stringify(blogs,null,4))
    res.json(blogs[index])
}

exports.deleteBlog=(req,res)=>{
    let id = req.params.id;
   blogs = blogs.filter(blog => blog.id != id) 
   fs.writeFileSync(filePath,JSON.stringify(blogs,null,4))
    res.send('blog deleted')
}



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