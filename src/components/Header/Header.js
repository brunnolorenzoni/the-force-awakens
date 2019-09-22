import React from 'react';

import TitleHeader from "./TitleHeader/TitleHeader";
import SocialMediaBar from "./SocialMediaBar/SocialMediaBar";
import MenuNavigation from "./MenuNavigation/MenuNavigation";

 const Header = () => {

    return (
        <>
            <header id="header-wrapper">
                <TitleHeader />
                <MenuNavigation/>
                <SocialMediaBar/>
            </header>
        
        </>
    )
}

export default Header;