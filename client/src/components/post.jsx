import{
    Delete
} from "@mui/icons-material"
import { Box, Button, Typography } from "@mui/material";
import FlexBetween from "./FlexBetween";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";


const Post = ({title, date, taskId }) => {


    const dispatch = useDispatch();
    const tasks = useSelector((state) => state.tasks);
    const user = (useSelector((state) => state.user));
    const token = useSelector((state) => state.token);


    //Changing task colour based on due date
    var color = "DC6060"
    const currDate = new Date();
    const d = new Date(date);
    // const d = new Date("2015-03-25");
    if(currDate < d){
        console.log("changing the colour")
        color = "a9c3ac"
    }
    

    const deleteTask = async() => {


        const response = await fetch(
            `http://localhost:3001/tasks/${user._id}/${taskId}/delete`, 
            {
                method: "DELETE",
                headers: { Authorization: `Bearer ${token}` },
            }
        );


        window.location.reload(false)   

    }

    

    



    return (
    
        <Box id={taskId} style={{
            backgroundColor: `#${color}`,
            padding: "2rem",
            margin: "1rem",
            borderRadius: "10px"
            }} >

             
            
            <Box style={{
                backgroundColor: "white",
                marginBottom: "10px",
                padding: "10px",
                borderRadius: "10px"
            }}>
                <Typography >{title}</Typography>
            </Box>

                
            <Box style={{display: "flex", }}>
               
                <Button  style={{
                    backgroundColor: "white",
                    color: "black",
                }} onClick={() => { deleteTask() }}> 
                    <Delete /> 
                </Button>

                <Box style={{ borderRadius: "10px", padding: "10px",backgroundColor: "white", marginLeft: "10px", textAlign: "center"}}>
                    <Typography> {date.toString()}</Typography>
                </Box>

            </Box>

          




        </Box>
    
    )
}

export default Post;