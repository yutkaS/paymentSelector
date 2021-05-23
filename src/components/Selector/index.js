import './index.css'
import React, {useState, useCallback, useEffect} from 'react'
import {List} from "./List";
import {Input} from "../Input";


export const Selector = ({selectorValue, list, onSelect}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [methodsList, setMethodsList] = useState(list);
    const [inputValue, setInputValue] = useState(selectorValue);

    const filterList = useCallback((text) => {
        setInputValue(text);
        const newMethods = list.filter((e) => e.slice(0, text.length) === text);
        setMethodsList(newMethods)
    }, [list, setMethodsList])

    const changeStatus = useCallback(() => {
        setIsOpen(!isOpen)
    }, [setIsOpen, isOpen])

    const handleSelect = useCallback((event) => {
        onSelect(event.target.outerText);
        changeStatus();
        filterList('');
    }, [onSelect, filterList, changeStatus])


    useEffect(() => {
        if (isOpen) window.removeEventListener('click', changeStatus)
        return () => {
            window.removeEventListener('click', changeStatus)
        }
    }, [isOpen, changeStatus]);

    const handleFocus = useCallback(()=>{
        changeStatus();
        setInputValue('')
    })

    const inputStyles = {
        background: '#016161',
        color: '#ffb800',
        transition: '0.4s ease-out',
        transform: 'scale(1.1)',
        borderRadius: '5px',
        width: '120px',
    }

return (
    <div className={'selector'}>
        <Input onFocus={handleFocus}
               onChange={filterList}
               styles={inputStyles}
               className={'value active'}
               value={inputValue}
               placeHolder={selectorValue}
        />
        <List valueArr={methodsList} onSelect={handleSelect} isOpen={isOpen}/>
    </div>
)
}

Selector.defaultProps = {}