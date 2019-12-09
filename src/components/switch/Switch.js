import React from 'react';
import './switch.css';

export const Switch = ({props}) => {
    return(
        <input type="checkbox" aria-label="display monthly or yearly packages" {...props}/>
    )
}