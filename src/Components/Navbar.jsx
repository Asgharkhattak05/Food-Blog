import { Mail, Notifications } from "@mui/icons-material";
import FlutterDashIcon from "@mui/icons-material/FlutterDash";
import DinnerDiningIcon from '@mui/icons-material/DinnerDining';
import {
  AppBar,
  Avatar,
  Badge,
  Box,
  InputBase,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
  styled,
  useTheme,
} from "@mui/material";
import React, { useState } from "react";

const ToolbarStyle = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
  gap: "20px"
});

const Search = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'light' ? 'white' : 'black', // Background color conditionally set based on theme
  padding: "0px 10px",
  borderRadius: theme.shape.borderRadius,
  color: theme.palette.mode === 'light' ? 'black' : 'white', // Text color conditionally set based on theme
}));

const Icons = styled(Box)(({ theme }) => ({
  display: "none",
  gap: "20px",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: {
    display: "flex"
  }
}));

const ResBox = styled(Box)(({ theme }) => ({
  [theme.breakpoints.up("sm")]: {
    display: "none"
  },
  display: "flex", gap: "5px", alignItems: "center"
}));

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const theme = useTheme();
 const  handleLogout=()=>{
  setOpen(false)
  
 }

  return (
    <>
      <AppBar position="sticky">
        <ToolbarStyle>
          <Typography
            variant="h6"
            sx={{ display: { xs: "none", sm: "block" } }}>
            <DinnerDiningIcon />
            <span> Szes Food</span>
          </Typography>
          <FlutterDashIcon sx={{ display: { xs: "block", sm: "none" } }} />
          <Search>
            <InputBase placeholder="Search..." sx={{ color: theme.palette.mode === 'light' ? 'black' : 'white' }} />
          </Search>
          <Icons>
            <Badge badgeContent={4} color="error">
              <Mail />
            </Badge>
            <Badge badgeContent={4} color="error">
              <Notifications />
            </Badge>
            <Avatar
              
              onClick={e => setOpen(true)}
              sx={{ cursor:"pointer", width: "30px", marginBottom: "8px", height: "30px" }} alt="Remy Sharp" src="./src/image/avatar (1).jpg" />
          </Icons>
          <ResBox onClick={e => setOpen(true)}>
            <Avatar sx={{ width: "30px", height: "30px" }} alt="Remy Sharp" src="./src/image/avatar (1).jpg"/>
            <Typography variant="span">
              hSez
            </Typography>
          </ResBox>
        </ToolbarStyle>
        <Menu
           sx={{marginTop:"47px"}}
          id="demo-positioned-menu"
          aria-labelledby="demo-positioned-button"
          open={open}
          onClose={e => setOpen(false)}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
        >
          <MenuItem  onClick={e => setOpen(false)} >Profile</MenuItem>
          <MenuItem onClick={e => setOpen(false)} >My account</MenuItem>
          <MenuItem onClick={handleLogout} >Logout</MenuItem>
        </Menu>
      </AppBar>
    </>
  );
};

export default Navbar;
