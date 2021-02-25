import { createStore, combineReducers } from 'redux';

// Expense Reducer
const expenseReducerDefaultState = [];

const expenseReducer = (state = expenseReducerDefaultState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

// Filters Reducer
const filtersReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startedDate: undefined,
    endDate: undefined
}

const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch (action.type) {
        default:
            return state
    }
}

// Store creation

const store = createStore(
    combineReducers({
        expenses: expenseReducer,
        filters: filtersReducer
    })
)

console.log(store.getState())