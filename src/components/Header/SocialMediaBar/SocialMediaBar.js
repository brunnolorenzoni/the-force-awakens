import React from 'react';
import { Link } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faFacebookF } from "@fortawesome/free-brands-svg-icons"
import { faTwitter } from "@fortawesome/free-brands-svg-icons"
import { faInstagram } from "@fortawesome/free-brands-svg-icons"

import "./SocialMediaBar.scss"

export default function SocialMediaBar() {

    return (
        <nav id="social-media-bar">
            <a className="link" target="_blank" href="https://www.facebook.com/">
                <FontAwesomeIcon className="icon" icon={faFacebookF} size="lg"/>
            </a>

            <a className="link" target="_blank" href="https://twitter.com/">
                <FontAwesomeIcon className="icon" icon={faTwitter} size="lg"/>
            </a>

            <a className="link" target="_blank" href="https://www.instagram.com/">
                <FontAwesomeIcon className="icon" icon={faInstagram} size="lg"/>
            </a>
        </nav>
    )
}