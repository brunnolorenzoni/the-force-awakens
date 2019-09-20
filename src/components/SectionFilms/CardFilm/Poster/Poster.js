import React from 'react';
import path from 'path';

import accents from 'remove-accents'; 


import "./Poster.scss"

export default function Poster(props) {

    const root = 'src/assets/';

    

    const { image_name } = props;

    function formatImageName(image_name)
    {
        return accents.remove(image_name).replace(/ /g, "-").replace(/_/g, "-").trim().toLowerCase();
    }

    function requireImage(image_name){

        try{
            return require("../../../../assets/" + image_name + ".jpg");
        } catch (e){
            return ""
        }

    }

    return (
        <div className="poster-container">
            <img className="poster-image" src={requireImage(formatImageName(image_name))}/>
        </div>
    )
}