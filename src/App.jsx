
import React, { useState } from "react";
import Navbar from "./Components/Navbar"
import Sidebar from "./Components/Sidebar"
import Feed from "./Components/Feed"
import Rightbar from "./Components/Rightbar"
import { Box,  Stack, ThemeProvider, createTheme } from "@mui/material";
import Adds from "./Components/Adds";

const App = () => {
  const [mode, setMode]=useState("light")
  const darkTheme = createTheme({
    palette:{
      mode:mode

    }
  })
  return (
    <>
    <ThemeProvider  theme={darkTheme}>
    <Navbar  />
    <Box bgcolor={"background.default"} color={"text.primary"}>
    <Stack direction="row" sx={{paddingTop:"15px"}} spacing={2} 
     justifyContent="space-between">
    
    <Sidebar setMode={setMode} mode={mode} />
    <Feed />
    <Rightbar />
    </Stack>
    <Adds />
    </Box>
    </ThemeProvider>
     </>
  );
};

export default App;
