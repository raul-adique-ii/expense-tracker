import React, { useState } from 'react'
import { AiOutlinePlus } from 'react-icons/ai'
import { v4 as uuidv4 } from 'uuid';

import logo from '../../images/logo.svg'

import { useGlobalContext } from '../../context/GlobalState'
import Alert from '../alerts/Alert'

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
            id: uuidv4(),
            text,
            amount: +amount
        }
        addTransaction(newTransaction)
        setAlert(true, 'Transaction Added', 'success')
        setText('')
        setAmount(0)
        }
    }

    return (
        <>
            <div className='dash-form'>
                <div className='logo-section'>
                    <img src={logo} alt='logo' />
                    <h1>Expense Tracker</h1>
                </div>
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
           </div>
        </>
    )
}

export default Forms
