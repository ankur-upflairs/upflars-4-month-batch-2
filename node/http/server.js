const http=require('node:http');
const fs= require('node:fs');
const path=require('node:path');
const { serveStaticFiles } = require('./utils/StaticFileServing');


let dir= __dirname

let indexHtml= fs.readFileSync(path.join(dir,'/views/index.html'),'utf-8')

let requestListner = (req,res)=>{
    // console.log(req.url,req.method,req.headers);
    let filesend= serveStaticFiles(req,res,dir+'/static')
    if(filesend) return
      
    if(req.url==='/'){    
        res.setHeader('Content-Type','text/html')
        res.write(indexHtml) 
        res.end()
    }
    else 
    if(req.url == '/blogs'){
        res.setHeader('Content-Type','application/json')
        res.end(JSON.stringify(blog))
        // res.end('welcome to our blog page')
    }
    else if(req.url == '/createblog'){
        res.statusCode=201
        res.setHeader('Content-Type','text/html')
        // res.writeHead(200,{'Content-Type':'text/html'})
        res.write('<h1>create blog</h1>')
        res.write('<form><input type="text" /><button>submit</button> </form>')
        res.end('<form><input type="text" /><button>submit</button> </form>')
    }
    // res.end('hello world')
}



const server=http.createServer(requestListner);

// server.on('connection',()=>{
//     console.log('new connection');
// })
// console.log(server.address().port)
server.listen(3000,'localhost',()=>{
    console.log(`server is running on ${2}`);
    console.log(`http://localhost:${ server.address().port}`)

})


// const server=http.createServer((req,res)=>{
//     // console.log(req.url,req.method,req.headers);
//     if(req.url==='/'){
//         res.setHeader('Content-Type','text/csv')
//         res.end(csv)
//         res.end('welcome to our home page')

//     }
//     else if(req.url == '/blogs'){
//         res.setHeader('Content-Type','application/json')
//         res.end(JSON.stringify(blog))
//         // res.end('welcome to our blog page')
//     }
//     else if(req.url == '/createblog'){
//         res.statusCode=201
//         res.setHeader('Content-Type','text/html')
//         // res.writeHead(200,{'Content-Type':'text/html'})
//         res.write('<h1>create blog</h1>')
//         res.write('<form><input type="text" /><button>submit</button> </form>')
//         res.end('<form><input type="text" /><button>submit</button> </form>')
//     }
//     // res.end('hello world')
// });

