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
const PORT = 3001 || 6001

mongoose.connect("mongodb+srv://omarshah:omar123@cluster0.5tlflqu.mongodb.net/?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    app.listen(3001, ()=> console.log('Server Port: 3001'))
}).catch((error) => console.log(`${error} did not connect`))