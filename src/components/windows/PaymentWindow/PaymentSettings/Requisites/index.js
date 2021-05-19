import {Input} from "../Input";
import React from  'react'
import './index.css'
import {Button} from "../Button";

export const Requisites = ({type}) => {
    switch (type) {
        case 'card' :
          return (
              <div className={'requisites'}>
                <p>Card number</p>
                <Input/>
            </div>
          )
        case 'cash' :
            return (
                <div className={'requisites'}>
                    <p className={'important-text'}>go to cash dispenser!!!</p>
                </div>
            )

        case 'nature' :
            return (
                <div className={'requisites'}>
                    <p>invalid payment method :(</p>
                </div>
            )
    }
}