const express = require("express")
const jwt = require('jsonwebtoken')
const app = express();
app.use(express.json())
const secretKey = "gjgjgjgjgkyytt"
app.get("/",(req,res)=>{
    res.json({message:"a simple api"})
})
app.post("/login",(req,res)=>{
    // const user = {
    //     id:1,
    //     username:"simran",
    //     email:"simran@gmail.com"
    // }
    const id = req.body.id
    const email = req.body.email
    const password = req.body.password
    const user = {email,password,id}

    // console.log(req.body.email)
   
       console.log(user)
       jwt.sign({user},secretKey,{expiresIn:'300s'},(err,token)=>{
        res.json({token})
    })
})
    
        

 
app.post("/profile",verifyToken,(req,res)=>{
    jwt.verify(req.token,secretKey,(err,authData)=>{
        if(err){
            res.send({result:"invalid token"})
            
        }
        else{
            res.json({message:"Profile accesssed"})
            authData
        }
    })

})
function verifyToken(req,res,next){
  const bearerdHeader = req.headers['authentication'];

  if(typeof bearerdHeader !== 'undefined'){
   
    const token = bearerdHeader
    
   
   req.token = token
   next();

  }
  else{
    res.send({
        result:"Token is not valid"
    })
  }
}
app.listen(5000,()=>{
    console.log("app is running on 5000 port")
})