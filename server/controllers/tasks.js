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


//GET TASK (find all the user's tasks)
export const getTasks = async(req,res) => {

    try{
        const {userId} = req.params

        const task = await Task.find({userId: userId})

        res.status(200).json(task)

    }
    catch(err){
        console.log("TRYING 404")
        console.log(err)
        res.status(404).json({ message: err.message })
    }

}


//GET SINGLE TASK 

export const getSingleTask = async(req,res) => {


    try{

        const {id} = req.params

        const task = Task.find({_id: id})

        res.status(200).json(task)

    }
    catch(err){
        console.log("TRYING 404")
        res.status(404).json({ message: err.message })
    }

}


//Delete task

export const deleteTask = async(req, res) => {

    try{

        const {userId, taskId} = req.params;

        const users = Task.findOne({_id: taskId}).userId;
        const newUser = [];

        for(var i = 0; i < users.length;i++){
            if(users[i] != userId){
                newUser.push
            }
        }
        
        // const user = (Task.findOne({_id: taskId})).userId;

        // const newUser = [];
        
        // for(var i = 0; i < user.length; i++){

        //     if(user[i] != userId){
        //         newUser.push(user[i]);
        //     }

        // }
        
        // if(newUser.length != 0){
        //     await Task.updateOne({_id: taskId},
        //         {
        //             $set: { _id: newUser},
        //             $currentDate: { lastModified: true }
        //         });
        //     const task = await newTask.find({userId: [userId]})
        //     res.status(200).json(task)
            
    
        // }
        // else{
        //     await Posts.deleteOne({_id: taskId});
        //      const task = await newTask.find({userId: [userId]})
        //     res.status(200).json(task);
        // }
        await Task.deleteOne({_id: joe});

        
        // const task = await Task.find({tas: joe})

        res.status(200).json("hello");
       
    }
    catch(err){
        res.status(404).json({ message: err.message })
        console.log(`bruh ${err}`)
    }
}