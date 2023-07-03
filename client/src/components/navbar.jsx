import {userState} from "react";
import {
    Box,
    IconButton,
    InputBase,
    Typography,
    Select,
    MenuItem,
    FormControl,
    useTheme,
    Button,
  } from "@mui/material";
  import {
    Help,
    Menu,
    Close,
    Forest,
    StickyNote2,
    GpsFixed,
  } from "@mui/icons-material";
  import { useDispatch, useSelector } from "react-redux";
  import { setLogout, setLogin } from "../state";
  import { useNavigate } from "react-router-dom";
  import FlexBetween from "./FlexBetween";

  const Navbar = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const user = useSelector((state) => state.user);

    const fullName = `${user.firstName} ${user.lastName}`

    // const fullName = "Omar Shah"
    return(

        <FlexBetween padding="1rem 6%" style={{
            backgroundColor: "#a9c3ac",
            borderRadius: "10px"
            }}>
                <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@700&display=swap" rel="stylesheet"/>    
                
                <FlexBetween padding={1} style={{
                    borderRadius: "10px",
                    backgroundColor: "white"
                }}>
                    <Typography fontFamily={"Roboto"} fontSize={20}>{fullName}</Typography>
                </FlexBetween>

                <FlexBetween justifyContent={"center"} padding={0} margin={0}>
                    <Typography padding={0} margin={0} fontFamily={"Roboto"} fontWeight={700} fontSize={48} color={"white"}>flow.</Typography>
                </FlexBetween>

                <FlexBetween paddingRight={1.4}>
                    <Button  onClick={() => dispatch(setLogout())} style={{ backgroundColor: "white", borderRadius: "10px"}}>
                      
                        <Typography fontFamily={"Roboto"} fontSize={20}>Logout</Typography>

                    </Button>
                </FlexBetween>

                

        </FlexBetween>

    );

  }

  export default Navbar;