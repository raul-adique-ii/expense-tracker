import React from 'react'

import { useGlobalContext } from '../../../context/GlobalState'
import { numberWithCommas } from '../../../utils/format'

const IncomeExpenses = () => {
    const { transactions } = useGlobalContext()

    const amounts = transactions.map(transaction => transaction.amount)

    const income = amounts
        .filter(item => item > 0)
        .reduce((acc, item) => (acc += item), 0)
        .toFixed(2)

    const expense = amounts
        .filter(item => item < 0)
        .reduce((acc, item) => (acc += item), 0) * -1
        .toFixed(2)
    return (
        <div className='income-expense'>
            <div className='income-items'>
                <h3>INCOME</h3>
                <p>₱{numberWithCommas(income)}</p>
            </div>
            <div className='income-items'>
                <h3>EXPENSE</h3>
                <p>₱{numberWithCommas(expense)}</p>
            </div>
        </div>
    )
}

export default IncomeExpenses
