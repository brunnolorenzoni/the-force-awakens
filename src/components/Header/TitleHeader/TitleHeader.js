import React from 'react';
import { Link } from 'react-router-dom'

const TitleHeader = () => {


    return (
        <>
            <Link to="/" id="link-title">
                <h1 id="main-title">The Force Awakens</h1>
            </Link>
        </>
    )
}

export default TitleHeader;