import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'normalize.css/normalize.css';
import '../styles/styles.scss';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import {addExpense, removeExpense, editExpense} from './actions/expenses';
import {setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate} from './actions/filters';
import getVisibleExpenses from './selectors/expenses';

const store = configureStore();

//Adding Expenses
store.dispatch(addExpense({description: 'Water bill', amount: 4500, createdAt: 1}));
store.dispatch(addExpense({description: 'Gas bill', createdAt: 2}));
store.dispatch(addExpense({description: 'Rent', amount: 109203, createdAt: 3}));


const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);

const jsx = ( 
    <Provider store={store}>
        <AppRouter />
    </Provider>
 );

ReactDOM.render(jsx, document.getElementById('app'));


