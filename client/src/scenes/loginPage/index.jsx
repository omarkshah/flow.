
import { Box, Button, InputBase, Typography } from "@mui/material";
const LoginPage = () => {

    document.body.backgroundColor = "red"

    return (
            
        <Box style={{
            backgroundColor: "#a9c3ac",
            paddingTop: "1rem",
            paddingBottom: "5rem",
            marginTop: "15rem",
            marginLeft: "25rem",
            marginRight: "25rem",
            fontSize: "20px",
            borderRadius: "10px",
            display: "flex",
            alignitems: "center",
            justifyContent: "center"
        }}>
            
            <Box style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center"
            }}>

                <Typography padding={0} margin={0} fontFamily={"Roboto"} fontWeight={700} fontSize={40} color={"white"}>flow.</Typography>
                
                <Box><br></br></Box>
                <Box>Some words</Box>
            
            </Box>

        </Box>

    )
}

export default LoginPage;