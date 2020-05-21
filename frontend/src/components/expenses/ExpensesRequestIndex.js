import React from 'react'
import { getPendingExpensesToAccept, getPendingExpensesToUser, getUserFriends, acceptPendingExpense, deleteExpense } from '../../lib/api'
import { getPayload } from '../../lib/_auth'
import { Link } from 'react-router-dom'

class ExpensesRequestIndex extends React.Component {
  state = {
    pendingExpensesToAccept: [],
    pendingExpensesOwedToUser: [],
    friends: [],
  }

  async componentDidMount() {
    try {
      const userId = getPayload().sub
      const pendingExpenses = await getPendingExpensesToAccept()
      const pendingExpensesOwedTo = await getPendingExpensesToUser()
      const friends = await getUserFriends(userId)
      this.setState({ pendingExpensesToAccept: pendingExpenses.data, pendingExpensesOwedToUser: pendingExpensesOwedTo.data, friends: friends.data })
      console.log(this.state)
    } catch (err) {
      console.log(err.message)
    }
  }

  findFriendsName = friendId => {
    const index = this.state.friends.findIndex(x => x.user === friendId)
    const name = this.state.friends[index].firstName
    return name
  }

  handleAccept = async event => { // * User notification should confirm expense has been accepted
    const expenseId = event.target.value
    try {
      const res = await acceptPendingExpense(expenseId)
      console.log(res)
      this.props.history.push('/users/expenses')
    } catch (err) {
      console.log('no joy')
    }
  }

  handleReject = async event => { // * User notification should prompt to confirm, remind that expense is being deleted for all users
    const expenseId = event.target.value
    try {
      const res = await deleteExpense(expenseId)
      window.location.reload()
    } catch (err) {
      console.log('Deletion did not work')
    }

  }

  render() {
    return (
      <section className="section expenses">
        <Link to="/users/expenses/new"><h3>Create New Expense</h3></Link>
        <div className="tabs">
          <Link to="/users/expenses" className="accountable-brand shaded">Expenses</Link>
          <span className="accountable-brand highlighted">Pending expenses</span>
        </div>
        <div className="options">
          <div className="option">
            <h2>Owed by you</h2>
          </div>
          <div className="option-content">
            {this.state.pendingExpensesToAccept.map(expense => (
              <Link to={`/users/expenses/${expense._id}`}>
                <label key={expense._id} value={expense.user}>
                  You owe {this.findFriendsName(expense.paidBy)} £{expense.amountOwed.toFixed(2)} for {expense.name}
                  <button value={expense._id} onClick={this.handleAccept}>Accept Expense</button>
                  <button value={expense._id} onClick={this.handleReject}>Reject Expense</button>
                  <br />
                </label>
              </Link>
            ))}
          </div>
          <div className="option">
            <h2>Owed by friends</h2>
          </div>
          <div className="option-content">
            {this.state.pendingExpensesOwedToUser.map(expense => (
              <Link to={`/users/expenses/${expense._id}`}>
                <label key={expense._id} value={expense.user}>{this.findFriendsName(expense.owedBy)} owes you £{expense.amountOwed.toFixed(2)} for {expense.name}<br /></label>
              </Link>
            ))}
          </div>
        </div>
      </section>

    )
  }




}

export default ExpensesRequestIndex