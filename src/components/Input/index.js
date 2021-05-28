import React, {useState, useCallback} from 'react';
import './index.css';
import {PropTypes} from 'prop-types';


export const Input = (props) => {

    const {
        onFocus,
        placeHolder,
        styles,
        onChange,
        value,
        className,
    } = props;

    const handleChange = useCallback((event) => {
        onChange(event.target.value)
    }, [onChange]);

    return <input
        onFocus={onFocus}
        placeholder={placeHolder}
        style={styles}
        className={'input'}
        value={value}
        onChange={handleChange}
    />
}

Input.defaultProps = {
    autoFocus: false,
    styles: {},
    onFocus: () => {
    },
}

Input.propTypes = {
    onFocus:PropTypes.func,
    placeholder:PropTypes.string,
    styles:PropTypes.object,
    onChange:PropTypes.func,
    value:PropTypes.string,
    className:PropTypes.string,
}