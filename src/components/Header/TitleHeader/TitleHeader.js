import React from 'react';
import { Link } from 'react-router-dom'

import "./TitleHeader.scss"

export default function TitleHeader() {


    return (
        <>
            <Link to="/" id="link-title">
                <h1 id="main-title">The Force Awakens</h1>
            </Link>
        </>
    )
}