// let data=readFile({
//     path:"data.txt",
//     onread:()=>{},
//     onerror:()=>{}
// }) //psydo code

//promise based 2015 
//fullfilled or rejected or pending 
// Promise.then().catch() 
const fs=require('node:fs')
const fsPromise=require('node:fs/promises')

// let data = fs.readFileSync('data.txt','utf-8') 
// console.log(data)
// console.log(data.toString())
// fs.writeFileSync('data1.txt','this data')
// fs.appendFileSync('data1.txt','\nthis is new data')

//asynchronous programing 
// console.log('hello')
// function createFile(data){
//     fs.writeFileSync('data12.txt',data)
// }
// fs.readFile('data.txt','utf-8',(err,data)=>{
//     if(err){
//         console.log(err)
//         return
//     }
//     console.log(data)
//     createFile(data)
// })

// console.log('bye')

// fs.writeFile('data1.txt','hello everyone',(err)=>{
//     if(err){
//         console.log(err)
//         return
//     }
//     console.log('file created')
// })

// fs.appendFile('data1.txt','\nhello everyone',(err)=>{
//     if(err){
//         console.log(err)
//         return
//     }   
// })

//promise based approach  
// fsPromise.readFile('data.txt','utf-8')
// .then(data=>{
//     console.log(data)
// })
// .catch(err=>{
//     console.log(err)
// })
// fs.mkdirSync('dir1')
// fs.unlinkSync('data12.txt')
console.log(fs.readdirSync('.'))

//create a dir name myfiles and create files with loop sample1-sample10.txt 
//in myfiles delete only files that contains odd no. 
//wiki pedia > S replace with X 
//write a script to create a file with data and filename and data should be inserted by
//user from console(prompt-Sync)
//provide a script to delete any file in current folder



