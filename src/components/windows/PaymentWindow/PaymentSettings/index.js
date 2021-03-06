import React, {useState, useCallback} from 'react'
import {Selector} from "../../../Selector";
import { paymentMethodsArr } from './paymentMethodsList';
import { Requisites } from "./Requisites";
import { Button } from "../../../Button";
import { Paragraph } from "../../../Paragraph";
import './index.css'

export const PaymentSettings = () => {
    const [paymentMethod, setPaymentMethod] = useState(paymentMethodsArr[0]);
    const [requisites, setRequisites] = useState('');

    const onSubmit = useCallback( () => {
        console.log('я отправил енто на сервер', {paymentMethod, requisites});
        setRequisites('');
    }, [paymentMethod, requisites, setRequisites,])

    const handleSelectPaymentMethod = useCallback((method) => {
        setPaymentMethod(method);
        setRequisites('');
    }, [setRequisites, setPaymentMethod])

    return(
    <div className={'payment-method'}>
        <Paragraph
            text={'Choose payment method'}
            styles={{fontSize:'30px',   color:'#0099e0',}}
        />
        <Selector
            selectorValue={paymentMethod}
            list={paymentMethodsArr}
            onSelect={handleSelectPaymentMethod}
        />
        <Requisites
            value={requisites}
            type={paymentMethod}
            onChange={setRequisites}
        />
        <Button
            onClick={onSubmit}
            isActive={!requisites}
            text={'Submit'}
        />
    </div>
    )
}