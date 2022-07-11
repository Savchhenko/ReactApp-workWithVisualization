import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

function Header() {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Covid19 Stats
                </Typography>
                <Button color="inherit" component={Link} to="/">Summary</Button>
                <Button color="inherit" component={Link} to="/detailed">Detailed</Button>
            </Toolbar>
        </AppBar>
    )
}

export default Header
