import './index.css'
import React, {useState, useCallback, useEffect, useRef} from 'react'
import {List} from "./List";
import {Input} from "../Input";


export const Selector = ({selectorValue, list, onSelect}) => {
    const inputStyles = {
        background: '#016161',
        color: '#ffb800',
        transition: '0.4s ease-out',
        transform: 'scale(1.1)',
        borderRadius: '5px',
        width: '120px',
        margin: '0 auto',
    }
    const [isOpen, setIsOpen] = useState(false);
    const [methodsList, setMethodsList] = useState(list);
    const [inputValue, setInputValue] = useState(selectorValue);

    const filterList = useCallback((text) => {
        setInputValue(text);
        const newMethods = list.filter((e) => e.slice(0, text.length) === text);
        setMethodsList(newMethods)
    }, [list, setMethodsList])

    // const openSelector = useCallback(() => {
    //     setIsOpen(true)
    // }, [setIsOpen])
    //
    // const closeSelector = useCallback(() => {
    //     setIsOpen(false)
    // }, [setIsOpen])

    const changeStatus = useCallback(() => {
        // isOpen ? closeSelector() : openSelector()
        setIsOpen(!isOpen)
    }, [setIsOpen, isOpen])


    const handleSelect = useCallback((event) => {
        const value = event.target.outerText
        setInputValue(value)
        onSelect(value);
        changeStatus()
    }, [onSelect, filterList, changeStatus, setInputValue])

    const handleFocus = useCallback(() => {
        changeStatus();
        setInputValue('')
    })

    const selectorRef = useRef(null);

    const handleWindowClick = useCallback((e) => {
        const isSelectorClick = !!e.path.find((element) => element === selectorRef.current);
        if (isSelectorClick) return;
        changeStatus()
        filterList('')
        setInputValue(selectorValue)
    }, [changeStatus])

    useEffect(() => {
        if (isOpen) window.addEventListener('click', handleWindowClick);
        return () => {
            window.removeEventListener('click', handleWindowClick);
        }
    }, [isOpen, handleWindowClick]);

    return (
        <div className={'selector'} ref={selectorRef}>
            <Input
                styles={inputStyles}
                onChange={filterList}
                onFocus={handleFocus}
                isOpen={isOpen}
                placeHolder={selectorValue}
                value={inputValue}
            />
            <List valueArr={methodsList} onSelect={handleSelect} isOpen={isOpen}/>
        </div>
    )
}

Selector.defaultProps = {}