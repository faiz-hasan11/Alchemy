import express from "express"
import cors from "cors"
import mongoose from "mongoose"
import bodyParser from "body-parser"
import postRoutes from "./routes/posts.js"
import userRoutes from "./routes/users.js"
import dotenv from "dotenv"

//Middlewares
const app = express()
app.use(bodyParser.json({limit:"30mb" , extended: true}))
app.use(bodyParser.urlencoded({limit:"30mb" , extended: true}))
app.use(cors())
dotenv.config()

//Database Connection
const PORT = process.env.PORT || 5000
mongoose.connect(process.env.CONNECTION_URL , {useNewUrlParser:true , useUnifiedTopology:true ,  useFindAndModify: false})
.then(() => app.listen(PORT , () => console.log(`Server Connected to ${PORT}`)))
.catch((error) => console.log(error.message))

//Setting Routes
app.use("/posts" , postRoutes)
app.use('/users' , userRoutes)
app.get("/",(req,res) =>
{
    res.send("Backend Hosted")
})

