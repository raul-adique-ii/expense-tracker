import React from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineDelete } from 'react-icons/ai'
import { FiEdit2 } from 'react-icons/fi'

import { useGlobalContext } from '../../../context/GlobalState'

import './index.css'

const TransactionItem = ({ transaction }) => {
    const { 
        deleteTransaction, 
        setAlert,
    } = useGlobalContext()

    const handleDelete = () => {
        deleteTransaction(transaction.id)
        setAlert(true, 'You deleted an item', 'danger')
    }

    const sign = transaction.amount < 0 ? '-' : '+'

    return (
        <div className='card'>
            <p>{transaction.text}</p>
            <div className='delete-group'>
                <p className={transaction.amount < 0 ? 'minus' : 'plus'}>{sign}${Math.abs(transaction.amount)}</p>            
                    <Link to={`/edit/${transaction.id}`}><button style={{ color: '#b3ff66' }}><FiEdit2 /></button></Link>
                    <button className='delete-group' onClick={() => handleDelete()}><AiOutlineDelete className='delete-icon' /></button>
            </div>
        </div>
    )
}


export default TransactionItem