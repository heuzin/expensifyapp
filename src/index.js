import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom'

const ExpenseDashboardPage = () => (
  <div>
    This is from my dashboard component
  </div>
)

const AddExpense = () => (
  <div>
    This is from my add expense page
  </div>
)

const EditExpense = () => (
  <div>
    This is from my edit expense page
  </div>
)

const HelpPage = () => (
  <div>
    This is from help page
  </div>
)

const routes = (
  <BrowserRouter>
    <div>
      <Route path='/' component={ExpenseDashboardPage} exact={true}/>
      <Route path='/create' component={AddExpense}/>
      <Route path='/edit' component={EditExpense}/>
      <Route path='/help' component={HelpPage}/>
    </div>
  </BrowserRouter>
);

ReactDOM.render(
  routes,
  document.getElementById('root')
);