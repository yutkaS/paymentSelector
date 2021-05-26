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
                      text={'Card ID'}
                      styles={{fontSize:'25px', margin:'5px', color:'red',}}
                  />
                  <Input placeHolder={'123456789'} styles={{width:'100%', fontSize:'15px',}} value={value} onChange={onChange}/>
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
