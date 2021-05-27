import React from 'react';
import {PropTypes} from 'prop-types';

import './style.css'



export const List = (props) => {
    const {
        onSelect,
        items,
        styles = {},
        open = false,
    } = props;

    const newStyles = styles;
    console.log(open);
    if (!open) Object.assign(newStyles, {opacity:'0', visibility:'hidden', margin:'0 auto',})
    else Object.assign(newStyles, {opacity:'100%', visibility:'visible', margin: '45px auto', })
    console.log(newStyles);
    return (
        <div style={newStyles} className={'list'}>{
            items.map((element)=>(
            <div  key={element} onClick={onSelect} className={'listElement'}> {element} </div>
        ))
        }</div>
    )

}

