import React from "react";
import { Route } from "react-router-dom";
import Home from "./pages/Home";

import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";

const Routes: React.FC = () => {
    return (
        <>
            <Route exact path="/" component={Home} />
           
            <Route path="/portfolio" component={Portfolio} />
            <Route path="/contact" component={Contact} />
        </>
    )
}

export default Routes;
