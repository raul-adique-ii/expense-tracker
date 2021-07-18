import React, { useState, useEffect} from 'react'
import { useHistory, Link } from 'react-router-dom'

import Container from '../container/Container'

import { useGlobalContext } from '../../context/GlobalState'

const EditPage = (route) => {
    let history = useHistory()

    const { transactions, editTransaction} = useGlobalContext()
    
    const [selectedTransaction, setSelectedTransaction] = useState({
        id: null,
        text: '',
        amount: 0
      });


    const currentTransactionId = route.match.params.id
    
    useEffect(() => {
        const transactionId = currentTransactionId
        const selectedTransaction = transactions.find((transaction) => transaction.id === transactionId)
        setSelectedTransaction(selectedTransaction)
    }, [currentTransactionId, transactions])

    const onSubmit = (e) => {
        e.preventDefault()
        editTransaction(selectedTransaction)
        history.push('/')
    }

    const handleOnChange = (transactionKey, newValue) => {
        if (transactionKey === 'amount') {
            return setSelectedTransaction({ ...selectedTransaction, [transactionKey]: +newValue})
        } else {
            setSelectedTransaction({ ...selectedTransaction, [transactionKey]: newValue })
        }

        if (!selectedTransaction || !selectedTransaction.id) {
            return <div>Invalid Transaction ID</div>
        }
    }

    return (
        <Container>
              <div className='edit-form'>
                  <form onSubmit={onSubmit}>
                <div className='form-inputs'>
                <h1>Edit</h1>
                        <label>
                            <input 
                                type='text'
                                value={selectedTransaction.text}
                                onChange={(e) => handleOnChange('text', e.target.value)}
                                name='text'
                            />
                        </label>
                        <label>
                            <input 
                                type='text'
                                value={selectedTransaction.amount}
                                onChange={(e) => handleOnChange('amount', e.target.value)} 
                                name='amount'
                            />
                        </label>
                        <button onClick={onSubmit} style={{ color: '#70db70'}} type='button'>
                            Update
                        </button>
                        <Link to='/'>
                            <button style={{ width: '100%', color: '#426696' }} type='button'>Cancel</button>
                        </Link>
                </div>
                </form>
            </div>
        </Container>
    )
}

export default EditPage
