import React, { useState, useEffect } from 'react';
import Header from '../../components/Header/Header';

const PageNotFound = () => {

    const [heightHeader, setheightHeader] = useState(0);

    useEffect(() => {
        setheightHeader(document.getElementById('header-wrapper').offsetHeight);
    }, []);

    return (
        <>
            <Header />
            <main className='main-wrapper' style={{paddingTop: heightHeader}}>
                <h1>Página não encontrada</h1>
            </main>
        </>
        
    )
}

export default PageNotFound;