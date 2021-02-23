import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom'

const ExpenseDashboardPage = () => (
  <div>
    This is from my dashboard component
  </div>
)

const routes = (
  <BrowserRouter>
    <Route path='/' component={ExpenseDashboardPage}/>
  </BrowserRouter>
);

ReactDOM.render(
  routes,
  document.getElementById('root')
);