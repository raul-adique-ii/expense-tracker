const reducer = (state, action) => {
    const { type, payload } = action
    switch(type) {
        case 'SET_ALERT':
            return {
                ...state,
                alerts: state.alerts = payload
            }

        case 'REMOVE_ALERT':
            return {
                ...state,
                alerts: state.alerts = payload
            }
        
        case 'CLEAR_TRANSACTIONS':
            return {
                transactions: state.transactions = []
            }

        case 'DELETE_TRANSACTION':
            return {
                ...state,
                transactions: state.transactions.filter((transaction) => transaction.id !== payload)
            }
        case 'ADD_TRANSACTION':
            return {
                ...state,
                transactions: [...state.transactions, payload]
            }
        default:
            return state
    }
}

export default reducer