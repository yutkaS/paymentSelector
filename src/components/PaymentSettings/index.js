import React, {useState, useCallback} from 'react'
import {Selector} from "../Selector";
import { paymentMethodsArr } from './paymentMethodsList';
import { Requisites } from "../Requisites";

export const PaymentSettings = ({onSubmit}) => {
    const [paymentMethodIndex, setPaymentMethodIndex] = useState(0);
    const [requisites, setRequisites] = useState('')

    const submitForm = {
        paymentMethod:paymentMethodsArr[paymentMethodIndex],
        requisites:requisites,
    }

    const selectPaymentMethod = useCallback((i)=>{
        setPaymentMethodIndex(i);
    })

    return(
    <div className={'payment-method'}>
        <p>Choose payment method</p>
        <Selector selectorValueIndex={paymentMethodIndex} paymentMethodsArr={paymentMethodsArr} onSelect={selectPaymentMethod}/>
        <Requisites type={submitForm.paymentMethod} onChange={setRequisites}/>
    </div>
    )
}