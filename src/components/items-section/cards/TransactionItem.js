import React from 'react'
// import { Link } from 'react-dom'
import { AiOutlineDelete } from 'react-icons/ai'
import { FiEdit2 } from 'react-icons/fi'

import { useGlobalContext } from '../../../context/GlobalState'

// import Modal from '../../modal/Modal'

import './index.css'

const TransactionItem = ({ transaction }) => {
    const { 
        // addTransaction,
        deleteTransaction, 
        setAlert,
        openModal
    } = useGlobalContext()

    const handleDelete = () => {
        deleteTransaction(transaction.id)
        setAlert(true, 'You deleted an item', 'danger')
    }

    // const modalOpen = (transaction) => {
    //     openModal()
    // }

    const sign = transaction.amount < 0 ? '-' : '+'

    return (
        <div className='card'>
            <p>{transaction.text}</p>
            <div className='delete-group'>
                <p className={transaction.amount < 0 ? 'minus' : 'plus'}>{sign}${Math.abs(transaction.amount)}</p>
                <button onClick={openModal}><FiEdit2 /></button>
                <button className='delete-group' onClick={() => handleDelete()}><AiOutlineDelete className='delete-icon' /></button>
            </div>
        </div>
    )
}

export default TransactionItem
