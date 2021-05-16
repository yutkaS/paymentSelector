import React from 'react'
import './index.css'

export const Heading = ({styles, text}) => {
    return <h1 style={styles} className={'heading'}>{text}</h1>
}

Heading.defaultProps = {
    text:'PaymentWindow',
}

