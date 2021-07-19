import React, { useContext, useReducer, useState } from 'react'
import { v4 as uuidv4 } from 'uuid';

import reducer from './reducer'

const AppContext = React.createContext()

const initialState = {
    transactions: [
        {id: uuidv4(), text: 'app', amount: 20000},
        {id: uuidv4(), text: 'bills', amount: -15000},
        {id: uuidv4(), text: 'others', amount: -1000}
    ],
    alerts: {
        show: false,
        msg: '',
        type: ''
    }
}

const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [selectedTransaction, setSelectedTransaction] = useState({})

    const openModal = (transaction) => {
        console.log({transaction});
        setIsModalOpen(true)
        setSelectedTransaction(transaction);
    }

    const closeModal = () => {
        setIsModalOpen(false)
    }

    
    const setAlert = (show, msg, type)  => {
        dispatch({
            type: 'SET_ALERT',
            payload: { show, msg, type }
        })
    }
    
    const removeAlert = (show = false, msg = '', type= '') => {
        dispatch({
            type:'REMOVE_ALERT',
            payload: { show, msg, type}
        })
    }
    
    const deleteTransaction = (id) => {
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        })
    }
    
    const addTransaction = (transaction) => {   
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction
        })
        
    }

    const editTransaction = (transaction) => {
        dispatch({
            type: 'EDIT_TRANSACTION',
            payload: transaction
        })
    }
    
    const clearTransactions = () => {
        dispatch({
            type: 'CLEAR_TRANSACTIONS'
        })
    }
    

    return (
        <AppContext.Provider
            value={{ 
                transactions: state.transactions,
                alerts: state.alerts,
                clearTransactions,
                setAlert,
                removeAlert,
                deleteTransaction,
                addTransaction,
                editTransaction,
                selectedTransaction,
                isModalOpen,
                openModal,
                closeModal,
             }}
        >
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}

export { AppContext, AppProvider }