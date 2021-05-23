import React from 'react';
import {Input} from "../../Input";
import './index.css'

const inputStyles = {
    background: '#016161',
    color: '#ffb800',
    transition: '0.4s ease-out',
    transform: 'scale(1.1)',
    borderRadius: '5px',
    width: '120px',
}
export const Value = ({isOpen, placeHolder, value, onFocus, onChange}) => (
        <Input onFocus={onFocus}
               onChange={onChange}
               styles={inputStyles}
               className={'value active'}
               value={value}
               placeHolder={placeHolder}
        />
)
