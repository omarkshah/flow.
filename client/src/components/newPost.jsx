import { Box, Button, InputBase } from "@mui/material";
import { Formik } from 'formik';
import { useState } from "react";
import { useSelector } from "react-redux";

const NewPost = () => {


    const [title, setTitle] = useState(""); //for the new task content
    const [description, setDescription] = useState("")
    const [date, setDate] = useState("")

    const userId = useSelector((state)=>(state.user._id));

    //CREATE A NEW TASK HANDLING FUNCTION 
    /* 
        -takes info from state
        -calls the newpost server call  --> send state information as the body of the call
        -adds the created post to the state (or maybe jsut reloads the page) 
    */

    const handleTask = async()=>{  

        const response = await fetch(`http://localhost:3001/tasks/newTask`, {
            method: "POST",
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify({
                userId: userId,
                title: title,
                description: description,
                date: date
            }),
        });
        
        
        window.location.reload(false)   

    }


    return(

        <Box style={{
            backgroundColor: "#a9c3ac",
            padding: "2rem",
            margin: "1rem",
            borderRadius: "10px",
        }}>

            {/* TOP BOX */}
            <Box style={{ display: "flex" }}>

                <InputBase placeholder="Enter Task Title" style={{ margin: "1rem", padding: "0.5rem", backgroundColor: "#FFFFFF", flexGrow: "8", borderRadius: "10px" }}  onChange={(e) => setTitle(e.target.value)} value={title}>
                
                </InputBase>

                <InputBase placeholder="yyyy-mm-dd" style={{ margin: "1rem",padding: "0.5rem", backgroundColor: "#FFFFFF", flexGrow: "1", borderRadius: "10px" }} onChange={(e) => setDate(e.target.value)} value={date}> </InputBase>


            </Box>

            {/* BOTTOM BOX */}
            <Box style={{ display: "flex"}}>
                <InputBase placeholder="Describe Your Task Here..." style={{ margin: "1rem",padding: "0.5rem", backgroundColor: "#FFFFFF", flexGrow:"7", borderRadius: "10px"}} onChange={(e) => setDescription(e.target.value)} value={description}></InputBase>
                
            </Box>
            <Button  style={{margin: "1rem", padding: "0.5rem", backgroundColor: "white", color: "black", flexGrow: "1" }} onClick={()=>handleTask()}> Post </Button>
           


        </Box>

    )

}

export default NewPost;