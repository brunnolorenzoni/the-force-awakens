import React from 'react';
import { Link } from 'react-router-dom';

const MoreDetailsButton = (props) => {

    const { id } = props

    return (
        <div className="btn-container">
            <Link to={'films/' + id}>
                <button type="button" className="btn-details">
                    More Details
                </button>
            </Link>                
        </div>
    )
}

export default MoreDetailsButton;