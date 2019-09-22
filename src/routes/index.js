import React from 'react';
import { BrowserRouter, Route, Switch} from "react-router-dom";

import Home from "../pages/Home/Home";
import Films from "../pages/Films/Films";
import Starships from "../pages/Starships/Starships";
import Characters from "../pages/Characters/Characters";
import Vehicles from "../pages/Vehicles/Vehicles";
import Planets from "../pages/Planets/Planets";
import Species from "../pages/Species/Species";
import PageNotFound from "../pages/PageNotFound/PageNotFound";


const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/films/:id?" component={Films} />
                <Route path="/characters/:id?" component={Characters} />
                <Route path="/starships/:id?" component={Starships} />
                <Route path="/vehicles/:id?" component={Vehicles} />
                <Route path="/planets/:id?" component={Planets} />
                <Route path="/species/:id?" component={Species} />
                <Route component={PageNotFound}/>
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;