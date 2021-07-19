import React from 'react'

import { useGlobalContext } from '../../../context/GlobalState'
import { numberWithCommas} from '../../../utils/format'

const BalanceHeader = () => {
    const { transactions } = useGlobalContext()
    
    const amounts = transactions.map(transaction => transaction.amount)
    const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2)

    return (
        <div className='balance'>
            <h1>Balance</h1>
            <p>₱{numberWithCommas(total)}</p>
        </div>
    )
}

export default BalanceHeader
