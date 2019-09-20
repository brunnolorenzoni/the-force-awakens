  
import axios from 'axios';

export const getFilms = async(params) => {

    var request = await axios.get('https://swapi.co/api/films/', params)
    .then(function (response) {
        return response;
    })
    .catch(function (error) {
        return error.response;
    })

    return (request);
}


