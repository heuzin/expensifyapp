import { createStore, combineReducers } from 'redux';


// Store creation

const store = createStore(
    combineReducers({
        expenses: expenseReducer,
        filters: filtersReducer
    })
)

store.subscribe(() => {
    const state = store.getState()
    const getVisibleExpenses = getVisibleExpenses(state.expenses, state.filters)
    console.log(getVisibleExpenses)
})

const expenseOne = store.dispatch(addExpense({ description: 'Rent', amount: 20000 }))

store.dispatch(removeExpense({ id: expenseOne.expense.id }))
store.dispatch(editExpense(expenseOne.expense.id, { amount: 500 }))

store.dispatch(setTextFilter('rent'))
store.dispatch(sortByAmount()) // amount
store.dispatch(sortByDate()) // date

store.dispatch(setStartDate(125))
store.dispatch(setEndDate(1250))