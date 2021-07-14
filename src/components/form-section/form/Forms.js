import React, { useState } from 'react'
import { AiOutlinePlus } from 'react-icons/ai'

import { useGlobalContext } from '../../../context/GlobalState'
import Alert from '../../alerts/Alert'

import './index.css'

const Forms = () => {
    const { addTransaction, alerts, setAlert } = useGlobalContext()
    const [text, setText] = useState('')
    const [amount, setAmount] = useState(0)
    
    const onSubmit = (e) => {
        e.preventDefault()

        if (!text || !amount) {
            setAlert(true, 'Fill up the form', 'danger')
        } else {
            const newTransaction = {
            id: Math.floor(Math.random() * 1000000),
            text,
            amount: +amount
        }
        addTransaction(newTransaction)
        setAlert(true, 'Transaction Added', 'success')
        setText('')
        setAmount('')
        }
    }

    return (
           <form onSubmit={onSubmit}>
               {alerts && <Alert />}
               <div className='form-inputs'>
                   <label>
                       <input type='text' value={text} onChange={(e) => setText(e.target.value)} placeholder='Enter Transaction' />
                   </label>
                   <label>
                       <input type='text' value={amount} onChange={(e) => setAmount(e.target.value)} placeholder='Enter Amount' />
                   </label>
                   <button type='button' onClick={onSubmit}>
                      <AiOutlinePlus className='icon-box' />
                    </button>
               </div>
           </form>   
    )
}

export default Forms
