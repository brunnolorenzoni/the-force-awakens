import React from 'react';
import { BrowserRouter, Route, Switch} from "react-router-dom";

export default function Routes() {
    return (
        <BrowserRouter>
        <Switch>
            <Route exact  path="/" exact component={Films} />
            <Route exact path="/films/:id" component={Films} />
            <Route exact path="/characters/:id" component={Characters} />
            <Route exact path="/starships/:id" component={Starships} />
            <Route exact path="/vehicles/:id" component={Vehicles} />
            <Route exact path="/planets/:id" component={Planets} />
            <Route exact path="/species/:id" component={Species} />
            <Route exact path='*' component={PageNotFound}/>
        </Switch>
    </BrowserRouter>
    );
  }