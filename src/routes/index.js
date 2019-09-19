import React from 'react';
import { BrowserRouter, Route, Switch} from "react-router-dom";

export default function Routes() {
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
            <Route exact path='*' component={PageNotFound}/>
        </Switch>
    </BrowserRouter>
    );
  }