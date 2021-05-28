import './index.css';
import React from 'react';
import {PropTypes} from 'prop-types';

export const Paragraph = ({text, styles}) => <h5 className={'paragraph'} style={styles}>{text}</h5>

Paragraph.defaultProps = {
    text: '',
    styles:{},
}

Paragraph.propTypes = {
    text: PropTypes.string,
    styles: PropTypes.object,
}