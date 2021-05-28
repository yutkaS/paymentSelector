import React from 'react';
import './index.css';
import {PropTypes} from 'prop-types';


export const Heading = ({styles, text}) => (
    <h1 style={styles} className={'heading'}>{text}</h1>
)
Heading.defaultProps = {
    text:'PaymentWindow',
}

Heading.propTypes = {
    styles:PropTypes.object,
    text:PropTypes.string,
}
