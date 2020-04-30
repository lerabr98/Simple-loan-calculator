import React from 'react';
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import {Box} from "@material-ui/core";

const Header = () => {
    return (
        <Box>
            <AppBar position="static" style={{backgroundColor: "#009688"}}>
                <Toolbar variant="dense" >
                    <IconButton color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" color="inherit">
                        Simple loan calculator
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    )
}
export default Header;
