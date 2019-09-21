import React, { useState, useEffect } from 'react';

import accents from 'remove-accents'; 

import "./HeaderImage.scss";

export default function HeaderImage(props) {

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

    return (

        <div className="header-image" style={{
            backgroundImage: "url(" + requireImage(formatImageName(image_name)) + ")",
        }}></div>
    )
}