import React, { useEffect, useState } from "react";
import api from "../api";
import Grid from "@mui/material/Grid";
import GlobalDataBlock from "./GlobalDataBlock";
import CountryDataBlock from "./CountryDataBlock";

function Summary() {
    const [data, setData] = useState(null);

    useEffect(() => {
        api.get("/summary")
            .then(res => setData(res.data));
    }, []);

    return (
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <GlobalDataBlock />
            </Grid>
            <Grid item xs={3}>
                <CountryDataBlock />
            </Grid>
        </Grid>
    )
}

export default Summary