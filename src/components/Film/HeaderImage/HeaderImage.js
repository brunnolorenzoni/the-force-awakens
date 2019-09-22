import React, { useState, useEffect } from 'react';

import accents from 'remove-accents'; 

const HeaderImage = (props) => {

    const { image_name } = props;

    const formatImageName = (image_name) => {
        return accents.remove(image_name).replace(/ /g, "-").replace(/_/g, "-").trim().toLowerCase();
    }

    return (

        <div className="header-image" style={{
            backgroundImage: `url('/assets/${formatImageName(image_name)}.jpg')`,
        }}></div>
    )
}

export default HeaderImage;