import React from 'react';

import "./Title.scss";

export default function Title(props) {

    const { title } = props;

    return (

        <h3 className="title-film">{title}</h3>
    )
}