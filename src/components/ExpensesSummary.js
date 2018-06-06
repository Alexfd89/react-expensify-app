import React from 'react';
import ExpensesTotal from '../selectors/expenses-total';
import selectedExpenses from '../selectors/expenses';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import numeral from 'numeral';

const ExpensesSummary = ({expenseTotal, expenseCount}) => {
    const expenseWord = expenseCount === 1 ? 'expense' : 'expenses';
    const formattedExpenseTotal = numeral(expenseTotal / 100).format('$0,0.00');
    return (
        <div className="page-header">
            <div className="content-container">
                <h1 className="page-header__title">
                    Viewing <span>{expenseCount}</span> {expenseWord} totalling <span>{formattedExpenseTotal}</span> 
                </h1>
                <div className="page-header__actions">
                    <Link className="button" to="/create">Add Expense</Link>
                </div>
            </div>
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