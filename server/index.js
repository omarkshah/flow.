import express from 'express';
import mongoose from 'mongoose';
import helmet from 'helmet';
import morgan from "morgan";
import cors from "cors";
import bodyParser from "body-parser";
import authRoutes from "./routes/auth.js"
import taskRoutes from "./routes/tasks.js"
// import Task
//  from './models/Task.js';

//Middle-ware setup or smthn

const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy : "cross-origin"}))
app.use(morgan("common"))
app.use(bodyParser.json({limit: "30mb", extended: true}))
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}))
app.use(cors())

//Routes    
app.use("/auth", authRoutes)
app.use("/tasks", taskRoutes)

// respond with "hello world" when a GET request is made to the homepage
app.get('/', (req, res) => {
    res.send('hello world')
  })

import { getTasks } from './controllers/tasks.js';


//Mongoose setup
const PORT = 3001 || 6001

mongoose.connect("mongodb+srv://omarshah:omar123@cluster0.5tlflqu.mongodb.net/?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    app.listen(PORT, ()=> {
        
        console.log(`Server Port: ${PORT}`)
        
})
}).catch((error) => console.log(`${error} did not connect`))




//Task add test 
// const newTask = new Task({

//     userId: "omar",
//     title: "k boss",
//     description: "bruh this a test",
//     date: new Date().getMonth(),
// })

// await newTask.save().then(() => console.log("saved"))