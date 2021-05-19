import React, {useState, useCallback} from 'react'
import {Selector} from "../../../Selector";
import { paymentMethodsArr } from './paymentMethodsList';
import { Requisites } from "./Requisites";
import { Button } from "../../../Button";

export const PaymentSettings = () => {
    const [paymentMethod, setPaymentMethod] = useState(paymentMethodsArr[0]);
    const [requisites, setRequisites] = useState('')

    const onSubmit = () => {
        console.log('я отправил енто на сервер', {paymentMethod, requisites})
    }

    return(
    <div className={'payment-method'}>
        <p>Choose payment method</p>
        <Selector selectorValue={paymentMethod} paymentMethodsArr={paymentMethodsArr} onSelect={setPaymentMethod}/>
        <Requisites type={paymentMethod} onChange={setRequisites}/>
        <Button onClick={onSubmit} isActive={requisites} text={'Submit'}/>
    </div>
    )
}