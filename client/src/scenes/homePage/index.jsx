import { green } from "@mui/material/colors";
import Navbar from "../../components/navbar";
import { Box, useMediaQuery } from "@mui/material";
import Post from "../../components/post";
import Tasks from "../../components/tasks";

const HomePage = () => {
    return (
    
        <Box>
            <Navbar />


                    <Box style={{display: "flex", justify: "center"}}>
                        
                        <Box></Box>

                        <Box style={{ width: "50%", padding: "1rem", margin: "1rem", backgroundColor: "red"}}>
                            <Tasks />
                        </Box>
                        

                    </Box>

        </Box>
    

    )
}

export default HomePage;