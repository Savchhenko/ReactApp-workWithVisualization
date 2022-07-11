import React from "react";
import Container from "@mui/material/Container";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Header from "./Header";
import Summary from "./summary/Summary";
import Detailed from "./detailed/Detailed";

function App() {
  return (
    <Container maxWidth="md">
      <Router>
        <Header />
        <Summary />
        <Detailed />
      </Router>
    </Container>
  );
}

export default App;
