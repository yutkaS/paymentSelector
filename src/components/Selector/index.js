import './index.css'
import React, {useState, useCallback} from 'react'
import {List} from "../List";


export const Selector = ({selectorValueIndex, paymentMethodsArr, onSelect}) => {
    const [status, setStatus] = useState('disable');

    const changeStatus = useCallback( () => {
        setStatus( status === "disable" ? 'enable' : 'disable')
    }, [status])

    return (
        <div className={'selector'}>
            <div className={'value'} onClick={changeStatus}>{paymentMethodsArr[selectorValueIndex]}</div>
            <List valueArr={paymentMethodsArr} onSelect={onSelect} status={status}/>
        </div>
    )
}

Selector.defaultProps = {
    selectorValueIndex : 0,
}