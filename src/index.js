import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

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

const NotFoundPage = () => (
  <div>
    404
  </div>
)

const routes = (
  <BrowserRouter>
    <Switch>
      <Route path='/' component={ExpenseDashboardPage} exact={true}/>
      <Route path='/create' component={AddExpense}/>
      <Route path='/edit' component={EditExpense}/>
      <Route path='/help' component={HelpPage}/>
      <Route component={NotFoundPage}/>
    </Switch>
  </BrowserRouter>
);

ReactDOM.render(
  routes,
  document.getElementById('root')
);