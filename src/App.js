import React from "react";
import Container from "@mui/material/Container";
import { BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";

import Header from "./Header";
import Summary from "./summary/Summary";
import Detailed from "./detailed/Detailed";

function App() {
    return (
        <Container maxWidth="md">
            <Router>
                <Header />
                <Routes>
                    <Route path="/" element={<Summary/>} />
                    <Route path="/detailed" element={<Detailed/>} />
                    <Route 
                        path="*" 
                        element={<Navigate to="/" replace />}
                    />
                </Routes>
            </Router>
        </Container>
    );
}

export default App;
