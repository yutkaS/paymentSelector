import './index.css'
import React, {useState, useCallback, useEffect} from 'react'
import {List} from "./List";
import {SelectorValue} from "./SelectorValue";


export const Selector = ({selectorValue, paymentMethodsArr, onSelect}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [methodsList, setMethodsList] = useState(paymentMethodsArr);

    const filterList = useCallback( (text) => {
        const newMethods = paymentMethodsArr.filter((e)=>e.slice(0, text.length) === text);
        setMethodsList(newMethods)
    }, [paymentMethodsArr, setMethodsList])

    const changeStatus = useCallback(() => {
        setIsOpen(!isOpen);
    }, [isOpen])

    useEffect(()=>{
        const handleClick = () => {
            changeStatus()
            window.removeEventListener('click',handleClick);
        }

        if(isOpen) window.addEventListener('click', handleClick);

    }, [isOpen, changeStatus])

    const handleSelect = useCallback((event) => {
        onSelect(event.target.outerText);
        changeStatus();
        filterList('');
    }, [onSelect, changeStatus])



        return (
        <div className={'selector'}>
            <SelectorValue onChange={filterList} onClick={changeStatus} isOpen={isOpen} value={selectorValue}/>
            <List valueArr={methodsList} onSelect={handleSelect} isOpen={isOpen}/>
        </div>
    )
}

Selector.defaultProps = {}