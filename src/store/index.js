import { createStore, compose, combineReducers } from 'redux';

import films from './reducers/films';
import characters from './reducers/characters';
import planets from './reducers/planets';
import species from './reducers/species';
import starships from './reducers/starships';
import vehicles from './reducers/vehicles';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const reducers = combineReducers({
    films, characters, planets, species, starships, vehicles
})

const store = createStore(reducers, composeEnhancer);
export default store;