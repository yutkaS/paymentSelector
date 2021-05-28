import React from 'react';
import {PropTypes} from 'prop-types';
import { CSSTransition } from 'react-transition-group';

import './style.css'
import {Selector} from "../index";



export const List = (props) => {
    const {
        onSelect,
        items,
        styles = {},
        open = false,
    } = props;


    const animationStyles = open ? {opacity:'100%',  margin:'45px auto', visibility:'visible'} : {opacity:'0', margin:'0 auto', visibility:'hidden'}

    return (
        <div style={{...styles, ...animationStyles}} className={'list'}>{
            items.map((element)=>(
            <div  key={element} onClick={onSelect} className={'listElement'}> {element} </div>
        ))
        }</div>
    )
}

List.propTypes = {
    onSelect:PropTypes.func,
    items:PropTypes.array,
    styles:PropTypes.object,
    open:PropTypes.bool,
}
