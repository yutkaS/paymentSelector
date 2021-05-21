import './index.css'
import React, {useState, useCallback} from 'react'
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
        const handleCloseList = ()=>{
            setIsOpen(false);
            window.removeEventListener('click', handleCloseList);
            console.log('листенер убит');
        }

        if (!isOpen){
            console.log('ставлю листенер');
            setTimeout(()=>{ window.addEventListener('click', handleCloseList) },100)
        }
        setIsOpen(!isOpen);
    }, [isOpen])

    const handleSelect = useCallback((event) => {
        onSelect(event.target.outerText);
        changeStatus();
    }, [onSelect, changeStatus])

    return (
        <div className={'selector'}>
            <SelectorValue onChange={filterList} onClick={changeStatus} isOpen={isOpen} value={selectorValue}/>
            <List valueArr={methodsList} onSelect={handleSelect} isOpen={isOpen}/>
        </div>
    )
}

Selector.defaultProps = {}