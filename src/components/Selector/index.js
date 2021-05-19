import './index.css'
import React, {useState, useCallback} from 'react'
import {List} from "./List";


export const Selector = ({selectorValue, paymentMethodsArr, onSelect}) => {
    const [isOpen, setIsOpen] = useState(false);

    const changeStatus = useCallback( () => {
        setIsOpen(!isOpen);
    }, [isOpen])

    const handleSelect = useCallback((event)=>{
        onSelect(event.target.outerText);
        changeStatus()
    }, [onSelect, changeStatus])

    return (
        <div className={'selector'}>
            <div className={'value'} onClick={changeStatus}>{selectorValue}</div>
            <List valueArr={paymentMethodsArr} onSelect={handleSelect} isOpen={isOpen}/>
        </div>
    )
}

Selector.defaultProps = {
}