import { Box, InputBase } from "@mui/material";
import { Formik } from 'formik';

const newPost = () => {


    return(

        <Box>

            {/* TOP BOX */}
            <Box>

                <InputBase placeholder="Enter Task Title">
                
                </InputBase>

                <InputBase placeholder="yyyy-mm-dd"> </InputBase>


            </Box>

            {/* BOTTOM BOX */}
            <Box>

            </Box>




        </Box>

    )

}

export default newPost;