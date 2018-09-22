const express = require("express");

const app =express();

app.get("/",function (req,res){
    res.json({response:"42"});
})

app.listen(5000,()=>{
    console.log("server is running at 5000.")
});