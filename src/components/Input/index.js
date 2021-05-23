import React, {useState, useCallback} from 'react';
import './index.css'

export const Input = ({onFocus, placeHolder, styles, onChange, value, className}) => {

    const handleChange = useCallback((event) => {
        onChange(event.target.value)
    }, [onChange]);

    return <input
        onFocus={onFocus}
        placeholder={placeHolder}
        style={styles}
        className={'input ' + className}
        value={value}
        onChange={handleChange}
    />
}

Input.defaultProps = {
    autoFocus: false,
    styles: {},
    onFocus:()=>{},
}