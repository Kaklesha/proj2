import React from 'react'

const Price =({price})=>{
    return (
        <p>{new Intl.NumberFormat('ru-RU',{
            style: 'currency',
            currency: "USD",
            currencyDisplay: 'narrowSymbol',
        }).format(price)}</p>
    )
}

export default React.memo(Price)