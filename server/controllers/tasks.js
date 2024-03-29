import Task from "../models/Task.js"

//ALL THE TASK RELATED FUCNTIONS GO HERE

//CREATE TASK
export const createTask = async(req, res) => {


    try{
        const {userId, title, description, date} = req.body;

        

        // const users  = [userId, "omar"]

        // console.log(users[0])

        const newTask = new Task({
            userId,
            title,
            description, 
            date
        })

        await newTask.save();

        const task = await Task.find({userId: userId})

        res.status(201).json(task);

    }catch(err){
        console.log(err.message);
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

        // console.log("sfsfasfjkasdfl;akjsf;ladksjfa");
        const {userId, taskId} = req.params;

        const users = (await Task.findOne({_id: taskId})).userId;
        const newUser = [];


        if(users.length == 1){
            await Task.deleteOne({_id: taskId});
        }
        else{     
            
            for(var i = 0; i < users.length;i++){
                if(users[i] != userId){
                    newUser.push(users[i])
                }
            }   
        
        

            await Task.updateOne({_id:taskId},{
                $set: {
                userId: newUser
                },
                $currentDate: { lastUpdated: true }
            });
        }

   
        res.status(200).json("hello");
       
    }
    catch(err){
        res.status(404).json({ message: err.message })
        console.log(`bruh wha thte hell boi ${err}`)
    }
}