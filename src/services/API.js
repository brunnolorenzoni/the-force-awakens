  
import axios from 'axios';

export const getFilms = async(id) => {

    var request = await axios.get('https://swapi.co/api/films/' +  (id || ''))
    .then(function (response) {
        return response;
    })
    .catch(function (error) {
        return error.response;
    })

    return (request);
}

export const getCharacter = async(id) => {

    var request = await axios.get('https://swapi.co/api/people/' +  (id || ''))
    .then(function (response) {
        return response;
    })
    .catch(function (error) {
        return error.response;
    })

    return (request);
}


