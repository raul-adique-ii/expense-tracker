import React from 'react'
import { Route } from 'react-router-dom'

import BalanceHeader from './components/items-section/balance/BalanceHeader'
import Container from './components/container/Container'
import EditPage from './components/form-section/EditPage';
import Forms from './components/form-section/Forms'
import ItemContainer from './components/container/ItemContainer'
import IncomeExpenses from './components/items-section/income-expense/IncomeExpenses'
import TransactionList from './components/items-section/cards/TransactionList'

const App = () => {
    return (
        <>
            <Route path='/' exact>
                <Container>
                    <Forms />     
                    <ItemContainer>
                        <BalanceHeader />
                        <IncomeExpenses />
                        <TransactionList />
                    </ItemContainer>
                </Container>
                        <div className='circle1'></div>
                        <div className='circle2'></div>
            </Route>
            <Route path='/edit/:id' component={EditPage} />
        </>    
    )
}

export default App
