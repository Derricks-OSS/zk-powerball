import React from "react";
import {Route, Switch} from "react-router-dom";
import Index from "../pages/Index";
import About from "../pages/About";
import Powerball from "../pages/Powerball";
import ScratchOffs from "../pages/ScratchOffs";
import Faqs from "../pages/Faqs";


const Routes = () => {
    return(
        <main style={{textAlign: "center"}}>
            <Switch>
                <Route exact key="/" path="/" component={Index} />;
                <Route exact key="/" path="/about" component={About} />;
                <Route exact key="/" path="/powerball" component={Powerball} />;
                <Route exact key="/" path="/scratch-offs" component={ScratchOffs} />;
                <Route exact key="/" path="/faqs" component={Faqs} />;
            </Switch>
        </main>
    )
};

export default Routes;