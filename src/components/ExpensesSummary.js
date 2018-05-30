import React from 'react';
import ExpensesTotal from '../selectors/expenses-total';
import selectedExpenses from '../selectors/expenses';
import { connect } from 'react-redux';
import numeral from 'numeral';

const ExpensesSummary = ({expenseTotal, expenseCount}) => {
    const expenseWord = expenseCount === 1 ? 'expense' : 'expenses';
    const formattedExpenseTotal = numeral(expenseTotal / 100).format('$0,0.00');
    return (
        <div>
            <h1>
                Viewing {expenseCount} {expenseWord} totalling {formattedExpenseTotal} 
            </h1>
        </div>
    )
};

const mapStateProps = (state) => {
    const visibleExpenses = selectedExpenses(state.expenses, state.filters);
    return {
        expenseTotal: ExpensesTotal(visibleExpenses),
        expenseCount: state.expenses.length
    }
};

export default connect(mapStateProps)(ExpensesSummary);