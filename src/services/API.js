  
import axios from 'axios';

export const getFilms = async (id) => {

    var request = await axios.get('https://swapi.co/api/films/' +  (id || ''))
    .then(function (response) {
        return response.data.results;
    })
    .catch(function (error) {
        return error.response;
    })

    return (request);
}

export const getInfo = async(url) => {

    var request = await axios.get(url)
    .then(function (response) {
        return response.data;
    })
    .catch(function (error) {
        return error.response;
    })

    return (request);
}


