export const Input = ({onChange,}) => {
    return <input onChange={(element)=>onChange(element.target.value)}/>
}