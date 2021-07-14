import React from 'react'
// import { BrowserRouter as Router, Route } from 'react-router-dom'

import BalanceHeader from './components/items-section/balance/BalanceHeader'
import Forms from './components/form-section/form/Forms'
import Header from './components/form-section/form-header/Header'
import IncomeExpenses from './components/items-section/income-expense/IncomeExpenses'
import TransactionList from './components/items-section/cards/TransactionList'
import Modal from './components/modal/Modal'

const App = () => {
    return (
        <>
            <main>
                <section className='glass'>
                    <div className='dash-form'>
                        <Header />
                        <Forms />
                    </div>
                    <div className='items'>
                        <BalanceHeader />
                        <IncomeExpenses />
                        <TransactionList />
                    </div>
                </section>
            </main>
                    <div className='circle1'></div>
                    <div className='circle2'></div>
            <Modal />
            </>    
    )
}

export default App
