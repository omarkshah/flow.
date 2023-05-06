import express from 'express';
import mongoose from 'mongoose';
import helmet from 'helmet';
import authRoutes from "./routes/auth.js"
import taskRoutes from "./routes/tasks.js"

//Middle-ware setup or smthn
const app = express();
app.use(express.json);
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({policy: "cross-origin"}));

//Routes    
app.use("/auth", authRoutes)
app.use("/tasks", taskRoutes)

//Mongoose setup
const PORT = 3000 || 6000

mongoose.connect("mongodb+srv://omarshah:omar123@cluster0.5tlflqu.mongodb.net/?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    app.listen(PORT, ()=> console.log(`Server Port: ${PORT}`))
}).catch((error) => console.log(`${error} did not connect`))

// Task add test 
// const newTask = new Task({

//     userId: "omar",
//     title: "new task",
//     description: "bruh this a test",
//     date: new Date().getMonth(),
// })

// await newTask.save().then(() => console.log("saved"))