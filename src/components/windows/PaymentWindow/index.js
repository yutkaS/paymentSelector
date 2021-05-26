import React from 'react'
import './index.css'
import {Heading} from "../../Heading";
import {PaymentSettings} from "./PaymentSettings";


export const PaymentWindow = () => {


    return (
        <div className={'wrapper'}>
            <div className={'PaymentWindow'}>
                <Heading/>
                <PaymentSettings/>
            </div>
        </div>
    )
}