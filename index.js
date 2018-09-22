const express = require("express");

const app =express();

app.get("/",function (req,res){
    res.json({response:"96"});
})
const port=process.env.PORT||5000;
app.listen(port,()=>{
    console.log("server is running at",port);
});