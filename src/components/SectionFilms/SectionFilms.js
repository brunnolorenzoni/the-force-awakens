import React, { useState, useEffect } from 'react';

import { setFilms } from '../../store/actions/films';
import { connect } from 'react-redux';

import CardFilm from "./CardFilm/CardFilm";

import { getFilms } from '../../services/API';


const SectionFilms = (props) => {

    const { storeFilms, setFilms } = props;

    function sortByDate (data)
    {
        return data.sort((a,b) => (new Date(a.release_date) > new Date(b.release_date)) ? 1 : ((new Date(b.release_date) > new Date(a.release_date)) ? -1 : 0)); 
    }

    function requestFilms()
    {
        getFilms().then( response => {
            setFilms(sortByDate(response))
        });

    }

    const getId = (url) => {
        return parseInt(url.match(/\d+/g).map(Number)[0]);
    };

    useEffect(() => {
        if(!storeFilms.length){
            requestFilms();
        }
    }, []);

    return (
        <section className="section" id="section-film">

            <div className="container-cards">

                {storeFilms.length ? storeFilms.map(film => (
                    <CardFilm key={film.episode_id} item={film} id={getId(film.url)}></CardFilm>
                )) : null}

            </div>

        </section>

    )
}

const mapStateToProps = (state) => {
    return { storeFilms: state.films }
}

const mapDispatchToProps = (dispatch) => {
    return { setFilms: (films) => dispatch(setFilms(films)) }
}

export default connect(mapStateToProps, mapDispatchToProps)(SectionFilms);