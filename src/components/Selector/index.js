import './index.css'
import React, {useState, useCallback, useEffect} from 'react'
import {List} from "./List";
import {Value} from "./Value";


export const Selector = ({selectorValue, list, onSelect}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [methodsList, setMethodsList] = useState(list);

    const filterList = useCallback((text) => {
        const newMethods = list.filter((e) => e.slice(0, text.length) === text);
        setMethodsList(newMethods)
    }, [list, setMethodsList])

    const changeStatus = useCallback(()=>{
        setIsOpen(!isOpen)
    })

    const handleSelect = useCallback((event) => {
        onSelect(event.target.outerText);
        changeStatus();
        filterList('');
    }, [onSelect, isOpen])



    useEffect(() => {
        if (isOpen) window.addEventListener('click', changeStatus);
        return () => {
            window.removeEventListener('click', changeStatus);
        }
    }, [isOpen, changeStatus]);

    return (
        <div className={'selector'}>
            <Value
                onChange={filterList}
                onFocus={changeStatus}
                isOpen={isOpen}
                placeHolder={selectorValue}
                value={selectorValue}
            />
            <List valueArr={methodsList} onSelect={handleSelect} isOpen={isOpen}/>
        </div>
    )
}

Selector.defaultProps = {}