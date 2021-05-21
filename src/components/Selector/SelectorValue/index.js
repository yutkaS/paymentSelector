import React from  'react';
import {Input} from "../../Input";

const inputStyles = {
    background:'#016161',
    color: '#ffb800',
    transition: '0.4s ease-out',
    transform: 'scale(1.1)',
    borderRadius: '5px',
}
export const Value = ({isOpen, value, onClick, onChange}) => {
    if (isOpen) return (
        <Input onChange={onChange} styles={inputStyles} className={'value active'} autoFocus={true} placeholder={value}/>
    )
    else  return (
        <div onClick={onClick} className={'value'}>{value}</div>
    )
}