var express = require('express');
var router = express.Router();
let user=[{
  email:"a@b.com",
  password:"123"
}]
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.get('/login',(req,res)=>{res.render('login')})
router.post('/login',(req,res)=>{
  let {email,password}=req.body;
  let found=user.find((u)=>u.email===email&&u.password===password);
  console.log(found)
  if(found){
    req.session.user=found.email;
    res.redirect('/')
  }else{
    res.redirect('/users/login')
  }
})
router.get('/hello',(req,res)=>{
  console.log(req.session);
  if(req.session.user){
    res.send('Hello')
  }else{
    res.redirect('/users/login')
  }
}
)
module.exports = router;
