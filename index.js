const express=require("express");
const app=express();
require("dotenv").config()
const dotenv=require("dotenv")
const mongoose=require("mongoose")
const port=process.env.PORT||5000
const mpesaRoutes=require("./routes/mpesa")
dotenv.config()
mongoose.connect(process.env.MONGO_URL)
.then(()=>{
console.log("DB connected")
})
.catch((err)=>{
    console.log(err)
})

app.use(express.json())
app.use("/api",mpesaRoutes);

app.listen(port,()=>{
    console.log(`application is running on port ${port}`)
})
