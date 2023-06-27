import React, { useState } from "react";
import {
  LightModeOutlined,
  DarkModeOutlined,
  Menu as MenuIcon,
  Search,
  SettingsOutlined,
  ArrowDropDownOutlined,
} from "@mui/icons-material";
import FlexBetween from "components/FlexBetween";
import { useDispatch } from "react-redux";
import { setMode } from "state";
import profileImage from "assets/profile.jpeg";
import {
  AppBar,
  Button,
  Box,
  Typography,
  IconButton,
  InputBase,
  Toolbar,
  Menu,
  MenuItem,
  useTheme,
} from "@mui/material";

const Navbar = () =>{
 const dispatch = useDispatch();
 const theme = useTheme();

 return <AppBar
    sx={{
        position: "static",
        background: "none",
        boxShadow: "node",
    }}
 >
    <Toolbar sx= {{justifyContent: "space-between"}}>
        {/* Left Side */}
        <FlexBetween>
            <IconButton onClick={() => console.log('open/close sidebar')}>
                <MenuIcon/>
            </IconButton>
            <FlexBetween
            backgroundColor = {theme.palette.background.alt}
            backgroundRadius = "9px"
            gap= "3rem"
            p="0.1rem 1.5rem"
            >
                <InputBase placeholder="Search...."/>
                <IconButton>
                    <Search/>
                </IconButton>
            </FlexBetween>
        </FlexBetween >

    </Toolbar>

 </AppBar>
}

export default Navbar;