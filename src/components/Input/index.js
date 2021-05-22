import React, {useCallback} from 'react';
import './index.css'

export const Input = ({placeholder, autoFocus, styles, onChange, value}) => {

    const handleChange = useCallback((event) => {
        onChange(event.target.value)
    }, [onChange]);

    return <input placeholder={placeholder} autoFocus={autoFocus} style={styles} className={'input'} value={value} onChange={handleChange}/>
}

Input.defaultProps = {
    autoFocus: false,
    styles: {},
    placeholder:'',
}