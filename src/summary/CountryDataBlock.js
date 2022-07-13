import React from "react";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

function CountryDataBlock() {
    return (
        <Paper style={infoBlockStyle}>
            <Typography variant="h6">Country</Typography>
            <Typography variant="subtitle1">Confirmed: </Typography>
            <Typography variant="subtitle1">Deaths: </Typography>
            <Typography variant="subtitle1">Recovered: </Typography>
        </Paper>
    );
}

export default CountryDataBlock;

const infoBlockStyle = {
    padding: "10px",
};
