import React, {useState, useCallback} from 'react'
import {Selector} from "../../../Selector";
import { paymentMethodsArr } from './paymentMethodsList';
import { Requisites } from "./Requisites";
import { Button } from "../../../Button";

export const PaymentSettings = () => {
    const [paymentMethod, setPaymentMethod] = useState(paymentMethodsArr[0]);
    const [requisites, setRequisites] = useState('');

    const onSubmit = () => {
        console.log('я отправил енто на сервер', {paymentMethod, requisites});
        setRequisites('');
    }

    const handleSelectPaymentMethod = useCallback((method) => {
        console.log('меняю на ', method);
        setPaymentMethod(method);
        setRequisites('');
    }, [setRequisites, setPaymentMethod])

    return(
    <div className={'payment-method'}>
        <p>Choose payment method</p>
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