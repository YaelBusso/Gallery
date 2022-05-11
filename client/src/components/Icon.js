import React from 'react';
import Parser from 'html-react-parser';

import icons from'../iconLib';

export default function Icon(props) {
    const {name}=props;
    let icon=icons[name];
    if(!icon)
        console.error("There is no icon named: "+name);

        return (
        <>
        {icon && Parser(icons[name])}
        </>
    )
}