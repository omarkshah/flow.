import { Box } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPosts } from "../state/index.js";
import Post from "./post";


const Tasks = () => {

    const dispatch = useDispatch();
    const tasks = useSelector((state) => state.tasks);
    const token = useSelector((state) => state.token);
  

    //Getting all the posts here

    const user = useSelector((state) => state.user)
    console.log(`slim jim is :  ${user._id}`); //GET RID OF THIS TESTING CODE LATER PLEASE FOR THE LOVE OF GOD REMEMEBR OR THIS WOULD BE EMBARRISING ON GITHUB
    const userId = user._id;

    const getTasks = async() => {
        const response = await fetch(
            `http://localhost:3001/tasks/${userId}/tasks`,
            {
            method: "GET",
            headers: { Authorization: `Bearer ${token}` },
            }
        );
        
        const data = await response.json();

        dispatch(setPosts({ tasks: data }));
    }

    useEffect(() => {
        getTasks();
      }, []); // Empty dependency array


    //mapping all the posts to a post here in the return
    return (

       <Box style={{
            margin: "auto"

       }}>



         { tasks.map(
            ({
            _id,
            title,
            date,
            }) => (
            <Post
                taskId={_id}
                title={title}
                date={date}
            />
            )
        )}  

        </Box>


    )

}

export default Tasks;