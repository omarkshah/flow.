import{
    Delete
} from "@mui/icons-material"
import { Box, Button, Typography } from "@mui/material";
import FlexBetween from "./FlexBetween";


const Post = ({title, date, taskId }) => {


    var color = "a9c3ac"
    
    const currDate = new Date();
    const d = new Date("2015-03-25");
    if(currDate > d){
        color = "DC6060"
    }
    

    return (
    
        <Box onClick={()=>{console.log("bruh u just clicked this ")}} style={{
            backgroundColor: `#${color}`,
            padding: "1rem",
            borderRadius: "10px"
            }} >

             
            
            <Box style={{
                backgroundColor: "white",
                marginBottom: "10px",
                padding: "10px",
                borderRadius: "10px"
            }}>
                <Typography > ADD A TASK TITLE HERE</Typography>
            </Box>

                
            <Box style={{display: "flex", }}>
               
                <Button style={{
                    backgroundColor: "white",
                    color: "black",
                }}> 
                    <Delete /> 
                </Button>

                <Box style={{ borderRadius: "10px", padding: "10px",backgroundColor: "white", marginLeft: "10px", textAlign: "center"}}>
                    <Typography> THIS IS THE DATE:</Typography>
                </Box>

            </Box>

          




        </Box>
    
    )
}

export default Post;