export const List = ({valueArr, status, onSelect}) => {
    if (status === 'disable') return <div></div>
    const html = [];
    valueArr.forEach((e, i)=>{
        html.push(<div onClick={()=>onSelect(i)} className={'payment-method'}>{e}</div>)
    })
    return <div  className={'list'}>{html}</div>
}