import React, { useState, useEffect } from 'react';

import NavList from "./NavList/NavList";
import HeaderImage from "./HeaderImage/HeaderImage";
import TitleFilm from "./TitleFilm/TitleFilm";
import ChapterFilm from "./ChapterFilm/ChapterFilm";

import { getFilms, getInfo } from '../../services/API';

import { setFilms } from '../../store/actions/films';
import { addCharacters } from '../../store/actions/characters';
import { addPlanets } from '../../store/actions/planets';
import { addSpecies } from '../../store/actions/species';
import { addStarships } from '../../store/actions/starships';
import { addVehicles } from '../../store/actions/vehicles';

import { connect } from 'react-redux';

const Film = (props) => {

    const { id_film, storeFilms, setFilms, storeCharacters, addCharacters, storePlanets, addPlanets, storeSpecies, addSpecies, storeStarships, addStarships, storeVehicles, addVehicles } = props;

    const [currentFilm, setCurrentFilm] = useState();

    const [currentCharacters, setCurrentCharacters] = useState([]);
    const [currentPlanets, setCurrentPlanets] = useState([]);
    const [currentSpecies, setCurrentSpecies] = useState([]);
    const [currentStarships, setCurrentStarships] = useState([]);
    const [currentVehicles, setCurrentVehicles] = useState([]);

    const getId = (url) => {
        return parseInt(url.match(/\d+/g).map(Number)[0]);
    };

    const filterCharacters = (id_film) => {

        let characters = currentFilm.characters.map(characterCurrentFilm => {
            let idCharacter = getId(characterCurrentFilm);
            return storeCharacters.find(character => character.id === idCharacter);
        })

        return characters;
    }

    const filterPlanets = (id_film) => {

        let planets = currentFilm.planets.map(planetCurrentFilm => {
            let idPlanets = getId(planetCurrentFilm);
            return storePlanets.find(planet => planet.id === idPlanets);
        })

        return planets;
    }
    
    const fitlerSpecies = (id_film) => {

        let species = currentFilm.species.map(specieCurrentFilm => {
            let idSpecie = getId(specieCurrentFilm);
            return storeSpecies.find(specie => specie.id === idSpecie);
        })

        return species;
    }

    const fitlerStarships = (id_film) => {

        let starships = currentFilm.starships.map(starshipCurrentFilm => {
            let idStarship = getId(starshipCurrentFilm);
            return storeStarships.find(starship => starship.id === idStarship);
        })

        return starships;
    }

    const fitlerVehicles = (id_film) => {

        let vehicles = currentFilm.vehicles.map(vehicleCurrentFilm => {
            let idVehicle = getId(vehicleCurrentFilm);
            return storeVehicles.find(vehicle => vehicle.id === idVehicle);
        })

        return vehicles;
    }

    const requestFilm = () => {
        getFilms().then(response => {
            setFilms(response);
            setCurrentFilm(response.find(res => getId(res.url) === parseInt(id_film)))
        });
    }
    

    const requestCharacters = () => {

        let characters = currentFilm.characters;

        if(storeCharacters.length){

            characters = [];

            currentFilm.characters.map(filmCharacter => {
                let idCharacter = getId(filmCharacter);
                let exist = storeCharacters.find(character => character.id === idCharacter);
                if(!exist){ characters.push(filmCharacter) }
            });

        }

        const charactersRequests = characters.map(entry => getInfo(entry));
        Promise.all(charactersRequests).then(response => { 
            addCharacters(response.map(character => {
                return { ...character, id: getId(character.url) }
            })); 
        });

    }

    const requestPlanets = () => {

        let planets = currentFilm.planets;

        if(storePlanets.length){

            planets = [];

            currentFilm.planets.map(filmPlanet => {
                let idPlanet = getId(filmPlanet);
                let exist = storePlanets.find(planet => planet.id === idPlanet);
                if(!exist){ planets.push(filmPlanet) }
            });

        }

        const planetsRequest = planets.map(entry => getInfo(entry));
        Promise.all(planetsRequest).then(response => { 
            addPlanets(response.map(planet => {
                return { ...planet, id: getId(planet.url) }
            })); 
        });

    }

    const requestSpecies = () => {

        let species = currentFilm.species;

        if(storeSpecies.length){

            species = [];

            currentFilm.species.map(filmSpecie => {
                let idSpecie = getId(filmSpecie);
                let exist = storeSpecies.find(specie => specie.id === idSpecie);
                if(!exist){ species.push(filmSpecie) }
            });

        }

        const speciesRequest = species.map(entry => getInfo(entry));
        Promise.all(speciesRequest).then(response => { 
            addSpecies(response.map(specie => {
                return { ...specie, id: getId(specie.url) }
            })); 
        });

    }

    const requestStarships = () => {

        let starships = currentFilm.starships;

        if(storeStarships.length){

            starships = [];

            currentFilm.starships.map(filmStarship => {
                let idStarship = getId(filmStarship);
                let exist = storeStarships.find(starship => starship.id === idStarship);
                if(!exist){ starships.push(filmStarship) }
            });

        }

        const starshipsRequest = starships.map(entry => getInfo(entry));
        Promise.all(starshipsRequest).then(response => { 
            addStarships(response.map(starship => {
                return { ...starship, id: getId(starship.url) }
            })); 
        });

    }

    const requestVehicles = () => {

        let vehicles = currentFilm.vehicles;

        if(storeVehicles.length){

            vehicles = [];

            currentFilm.vehicles.map(filmVehicle => {
                let idVehicle = getId(filmVehicle);
                let exist = storeVehicles.find(vehicle => vehicle.id === idVehicle);
                if(!exist){ vehicles.push(filmVehicle) }
            });

        }

        const vehiclesRequest = vehicles.map(entry => getInfo(entry));
        Promise.all(vehiclesRequest).then(response => { 
            addVehicles(response.map(vehicle => {
                return { ...vehicle, id: getId(vehicle.url) }
            })); 
        });

    }

    const requestFilmData = () => {

        requestCharacters();
        requestPlanets();
        requestSpecies();
        requestStarships();
        requestVehicles();
        
    }  

    useEffect(() => {

        const filmFound = storeFilms.find(film => getId(film.url) === parseInt(id_film));

        if(filmFound){
            setCurrentFilm(filmFound)
        } else {
            requestFilm();
        }

    }, []);

    useEffect(() => {
        if(currentFilm){
            requestFilmData();
        }
    }, [currentFilm]);

    useEffect(() => {
        if(storeCharacters.length && currentFilm){
            setCurrentCharacters(filterCharacters(id_film));
        }
    }, [storeCharacters])

    useEffect(() => {
        if(storePlanets.length && currentFilm){
            setCurrentPlanets(filterPlanets(id_film));
        }
    }, [storePlanets])

    useEffect(() => {
        if(storeSpecies.length && currentFilm){
            setCurrentSpecies(fitlerSpecies(id_film));
        }
    }, [storeSpecies])
    
    useEffect(() => {
        if(storeStarships.length && currentFilm){
            setCurrentStarships(fitlerStarships(id_film));
        }
    }, [storeStarships])

    useEffect(() => {
        if(storeVehicles.length && currentFilm){
            setCurrentVehicles(fitlerVehicles(id_film));
        }
    }, [storeVehicles])

    return (

        <>
            { currentFilm ? 

                <HeaderImage image_name={currentFilm.title}/> : null

            }

            <article className="article-film">

                { currentFilm ?  <TitleFilm title={currentFilm.title}/> : null }
                { currentFilm ?  <ChapterFilm episode_id={currentFilm.episode_id}/> : null }

                { currentFilm ?  <p className="synopsis">{currentFilm.opening_crawl}</p> : null }

                <section className="nav-section">
                    
                    { 
                        currentCharacters.length ? 
                    
                            <NavList href="characters" title="Characters" data={currentCharacters} color="#bf4545"/> 
                    
                        : null
                    }

                    { 
                        currentPlanets.length ? 
                    
                            <NavList href="planets" title="Planets" data={currentPlanets} color="#08780e"/> 
                    
                        : null
                    }
                    
                    { 
                        currentSpecies.length ? 
                    
                            <NavList href="species" title="Species" data={currentSpecies} color="#916119"/> 
                    
                        : null
                    }

                    { 
                        currentStarships.length ? 
                        
                        <NavList href="starships" title="Starships" data={currentStarships} color="#045b87"/> 
                    
                        : null
                    }

                    { 
                        currentVehicles.length ? 
                        
                        <NavList href="vehicles" title="Vehicles" data={currentVehicles} color="#9c33ab"/> 
                        
                        : null
                    }

                </section>


            </article>
            
        </>
    )
}

const mapStateToProps = (state) => {
    return { 
        storeFilms:      state.films,
        storeCharacters: state.characters, 
        storePlanets:    state.planets,
        storeSpecies:    state.species,
        storeStarships:  state.starships,
        storeVehicles:   state.vehicles,
    };
}

const mapDispatchToProps = (dispatch) => {
    return { 
        setFilms: (films) => { dispatch(setFilms(films)) },
        addCharacters: (characters) => { dispatch(addCharacters(characters)) } ,
        addPlanets: (planets) => { dispatch(addPlanets(planets)) }, 
        addSpecies: (species) => { dispatch(addSpecies(species)) }, 
        addStarships: (starships) => { dispatch(addStarships(starships)) }, 
        addVehicles: (vehicles) => { dispatch(addVehicles(vehicles)) }, 
    };
}


export default connect(mapStateToProps, mapDispatchToProps)(Film);