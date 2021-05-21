import React from 'react';
import './style.css'

export const List = ({valueArr, isOpen, onSelect}) => {
    if (!isOpen) return null

    // const handleSelect = useCallback((event)=>{
    //     onSelect(event.target.value)
    // }, [ onSelect ])


           const listJSX = valueArr.map((e) => <div key={e} onClick={onSelect} className={'listElement'}> {e} </div>)

    return <div className={'list'}> {listJSX} </div>


}