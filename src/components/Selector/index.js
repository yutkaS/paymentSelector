import './index.css'
import React, {useState, useCallback, useEffect, useRef} from 'react'
import {PropTypes} from 'prop-types';
import {List} from "./List";
import {Input} from "../Input";
import {inputStyles} from "./inputStyles";


export const Selector = (props) => {

    const {
        selectorValue,
        list,
        onSelect,
    } = props;



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
        const value = event.target.outerText;
        setInputValue(value);
        changeStatus();
        onSelect(value);
    }, [onSelect, filterList, changeStatus, setInputValue])

    const handleFocus = useCallback(() => {
        changeStatus();
        setInputValue('')
    }, [changeStatus, setInputValue])

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

                <List items={methodsList} styles={{maxHeight: '100px',}} onSelect={handleSelect} open={isOpen}/>

        </div>
    )
}

Selector.propTypes = {
    selectorValue:PropTypes.string,
    list:PropTypes.array,
    onSelect:PropTypes.func,
}

