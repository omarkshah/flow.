import { green } from "@mui/material/colors";
import Navbar from "../../components/navbar";
import { Box, useMediaQuery } from "@mui/material";
import Tasks from "../../components/tasks";
import NewPost from "../../components/newPost";

const HomePage = () => {
    return (
    
        <Box>
            <Navbar />


                    <Box style={{ width: "50%", padding: "1rem", margin: "auto"}}>
                        <NewPost />
                    </Box>

                    <Box style={{display: "flex", justify: "center"}}>
                        
                       
                        <Box style={{ width: "50%", padding: "1rem", margin: "auto"}}>
                            <Tasks />
                        </Box>
                        

                    </Box>

        </Box>
    

    )
}

export default HomePage;