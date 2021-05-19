import React, {useCallback} from 'react'

export const Input = ({onChange,}) => {

    const handleChange = useCallback((event)=>{
        onChange(event.target.value)
    })

    return <input onChange={handleChange}/>
}