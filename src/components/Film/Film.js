import React, { useState, useEffect } from 'react';

import NavList from "./NavList/NavList";
import HeaderImage from "./HeaderImage/HeaderImage";
import TitleFilm from "./TitleFilm/TitleFilm";
import ChapterFilm from "./ChapterFilm/ChapterFilm";

import { getFilms, getInfo } from '../../services/API';

import { setFilms } from '../../store/actions/films';
import { addCharacters } from '../../store/actions/characters';
import { addPlanet } from '../../store/actions/planets';
import { addSpecie } from '../../store/actions/species';
import { addStarship } from '../../store/actions/starships';
import { addVehicle } from '../../store/actions/vehicles';

import { connect } from 'react-redux';

const Film = (props) => {

    const { id_film, storeFilms, storeCharacters, addCharacters, storePlanets, addPlanet, storeSpecies, addSpecie, storeStarships, addStarship, storeVehicles, addVehicle } = props;

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

    const requestFilm = () => {
        getFilms().then(response => {
            setFilms(response);
            setCurrentFilm(response.find(res => getId(res.url) === parseInt(id_film)))
        });
    }

    const requestFilmData = () => {

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
                    
                            <NavList href="planets" title="Planets" data={storePlanets} color="#08780e"/> 
                    
                        : null
                    }
                    
                    { 
                        currentSpecies.length ? 
                    
                            <NavList href="species" title="Species" data={storeSpecies} color="#916119"/> 
                    
                        : null
                    }

                    { 
                        currentStarships.length ? 
                        
                        <NavList href="starships" title="Starships" data={storeStarships} color="#045b87"/> 
                    
                        : null
                    }

                    { 
                        currentVehicles.length ? 
                        
                        <NavList href="vehicles" title="Vehicles" data={storeVehicles} color="#9c33ab"/> 
                        
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
        setFilms: (films) => dispatch(setFilms(films)),
        addCharacters: (characters) => { dispatch(addCharacters(characters)) } ,
        addPlanets: (planets) => { dispatch(addPlanets(planets)) }, 
        addSpecies: (species) => { dispatch(addSpecies(species)) }, 
        addStarships: (starships) => { dispatch(addStarships(starships)) }, 
        addVehicles: (vehicles) => { dispatch(addVehicles(vehicles)) }, 
    };
}


export default connect(mapStateToProps, mapDispatchToProps)(Film);