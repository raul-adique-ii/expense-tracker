import React from 'react'

import TransactionItem from './TransactionItem'

import { useGlobalContext } from '../../../context/GlobalState'


const TransactionList = () => {
    const { transactions, clearTransactions, setAlert } = useGlobalContext()
    
    const onClearTransactions = () => {
        clearTransactions()
        setAlert(true, 'Deleted all items', 'danger')
    }

    return (
        <div>
            <h1 className='history'>History</h1>
            {transactions.length === 0 ? <button disabled>Clear List</button> : <button onClick={onClearTransactions}>Clear List</button>}
            {transactions.map(transaction => <TransactionItem key={transaction.id} transaction={transaction} />)}
        </div>
    )
}

export default TransactionList
