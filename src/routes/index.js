import React from 'react';
import { BrowserRouter, Route, Switch} from "react-router-dom";

<<<<<<< HEAD
=======
function Films() {
    return <h2>Films</h2>;
}

function Characters() {
    return <h2>Characters</h2>;
}

function Starships() {
    return <h2>Starships</h2>;
}

function Vehicles() {
    return <h2>Vehicles</h2>;
}

function Planets() {
    return <h2>Planets</h2>;
}

function Species() {
    return <h2>Species</h2>;
}

function PageNotFound() {
    return <h2>PageNotFound</h2>;
}

>>>>>>> Routes
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