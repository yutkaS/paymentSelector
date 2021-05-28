import {Input} from "../../../../Input";
import React from  'react'
import './index.css'
import {Paragraph} from "../../../../Paragraph";

export const Requisites = ({type, onChange, value}) => {


    switch (type) {
        case 'MasterCard' :
        case 'Visa' :
          return (
              <div className={'requisites'}>
                  <div className={'req'}>
                  <Paragraph
                      text={'Card ID'}
                      styles={{fontSize:'25px', margin:'5px', color:'red',}}
                  />
                  <Input placeHolder={'123456789'} styles={{width:'100%', fontSize:'15px', borderRadius:'5px',}} value={value} onChange={onChange}/>
                  </div>
            </div>
          )
        case 'cash' :
            return (
                <div className={'requisites'}>
                    <p className={'important-text'}>go to cash dispenser!!!</p>
                </div>
            )

        default:
            return (
                <div className={'requisites'}>
                    <p>invalid payment method :(</p>
                </div>
            )

    }
}
