import React from 'react'

import { useGlobalContext } from '../../../context/GlobalState'

import './index.css'

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
            <div>
                <h3>INCOME</h3>
                <p>${income}</p>
            </div>
            <div>
                <h3>EXPENSE</h3>
                <p>${expense}</p>
            </div>
        </div>
    )
}

export default IncomeExpenses
