import React, { useEffect, useState } from "react";
import api from "../api";

function Summary() {
    const [data, setData] = useState(null);

    useEffect(() => {
        api.get("/summary")
            .then(res => setData(res.data));
    }, []);

    return (
        <div>Summary</div>
    )
}

export default Summary