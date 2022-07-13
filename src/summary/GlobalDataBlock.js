import React from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

function GlobalDataBlock() {
    return (
        <Paper style={infoBlockStyle}>
            <Grid container>
                <Grid item xs={3}>
                    <Typography variant="h4">Global</Typography>
                </Grid>
                <Grid item xs={3}>
                    <Typography variant="h6">Confirmed: </Typography>
                </Grid>
                <Grid item xs={3}>
                    <Typography variant="h6">Deaths: </Typography>
                </Grid>
                <Grid item xs={3}>
                    <Typography variant="h6">Recovered: </Typography>
                </Grid>
            </Grid>
        </Paper>
    );
}

export default GlobalDataBlock;

const infoBlockStyle = {
    padding: "10px",
};