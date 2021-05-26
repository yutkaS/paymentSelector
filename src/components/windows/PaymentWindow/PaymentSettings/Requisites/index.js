import {Input} from "../../../../Input";
import React, {useCallback} from  'react'
import './index.css'
import {Paragraph} from "../../../../Paragraph";

export const Requisites = ({type, onChange, value}) => {


    switch (type) {
        case 'card' :
          return (
              <div className={'requisites'}>
                  <Paragraph
                      text={'Choose payment method'}
                      styles={{fontSize:'25px', marginTop:'20px', color:'red',}}
                  />
                  <Input value={value} onChange={onChange}/>
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
        default: break;
    }
}
