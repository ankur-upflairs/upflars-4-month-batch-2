const express=require('express');
const app=express();
const blogRouter=require('./routes/blog');
const userRouter=require('./routes/user');
var morgan = require('morgan');
const {dbConnect} = require('./config/db');
const cors=require('cors');


// app.use('/',(req,res,next)=>{
//     console.log(req.method,req.path);
//     next();
// })
dbConnect()
// app.use(cors({
//         origin: '*',
//         // methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
//         // allowedHeaders: ['Content-Type', 'Authorization']
// }))
app.use(cors())
app.use(morgan('tiny'))
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use('/blogs',blogRouter);
app.use('/users',userRouter);

app.get('/',(req,res)=>{
    res.send('Hello World');
 });

app.listen(3000,'localhost', () => {
        console.log('Server is running on port 3000');
});

// app.get('/blogs',(req,res)=>{
    
//     res.send(blogs);
// })
// app.post('/blogs',(req,res)=>{
//    let newId = blogs.length > 0? blogs[blogs.length-1].id +1   : 1;
//    let blog={title:'climate change', id : newId}
//    blogs.push(blog)
//    res.send('post added')
// })
// app.put('/blogs/:id',(req,res)=>{
//     let id = req.params.id;
//    let index = blogs.findIndex(blog => blog.id == id);
//    title = 'sound pollution'
//    blogs[index].title = title
//     res.send('blog update')
// })
// app.delete('/blogs/:id',(req,res)=>{
//     let id = req.params.id;
//    blogs = blogs.filter(blog => blog.id != id) 
//     res.send('blog deleted')
// })

// app.get('/',(req,res)=>{
//    res.send('Hello World');
// });
// app.get('/blogs',(req,res)=>{
//     res.send(blogs);
// })
// app.post('/blogs',(req,res)=>{
//     res.send('post added')
// })
// app.put('/blogs',(req,res)=>{
//     res.send('blog update')
// })
// app.delete('/blogs',(req,res)=>{
//     res.send('blog deleted')
// })







