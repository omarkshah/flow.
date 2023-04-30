import Task from "../models/Task.js"

//ALL THE TASK RELATED FUCNTIONS GO HERE

//CREATE TASK
export const createTask = async(req, res) => {


    try{
        const {userId, title, description, date} = req.body;

        const users  = [userId]

        const newTask = new Task({
            users,
            title,
            description, 
            date
        })

        await newTask.save();

        const task = await newTask.find({userId: [userId]})

        res.status(201).json(task);

    }catch(err){
        res.status(409).json({ message: err.message })
    }

}


//GET TASK
export const getTasks = async(req,res) => {

try{

    const {user} = req.params

    const task = Posts.find({userId: user })

    res.status(200).json(task)

}
catch(err){
    console.log("TRYING 404")
    res.status(404).json({ message: err.message })
}

}
