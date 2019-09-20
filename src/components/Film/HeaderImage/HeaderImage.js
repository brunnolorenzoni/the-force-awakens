import React, { useState, useEffect } from 'react';

import accents from 'remove-accents'; 

import "./HeaderImage.scss";

export default function HeaderImage(props) {

    const [heightContainer, setheightContainer] = useState(0);

    const { image_name } = props;

    function formatImageName(image_name)
    {
        return accents.remove(image_name).replace(/ /g, "-").replace(/_/g, "-").trim().toLowerCase();
    }

    function requireImage(image_name){

        try{
            return require("../../../assets/" + image_name + ".jpg");
        } catch (e){
            return ""
        }

    }

    function setHeight()
    {

        const headerHeight = document.getElementById('header-wrapper').offsetHeight;
        const windowHeight = window.innerHeight;

        setheightContainer(windowHeight - headerHeight);

    }

    useEffect(() => {
        setHeight();
    }, []);

    return (

        <div className="header-image" style={{height: heightContainer}}>
            <img className="image" src={requireImage(formatImageName(image_name))} />
        </div>
    )
}