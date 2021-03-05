import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter'
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import './styles/styles.scss';
import './firebase/firebase'
import { startSetExpenses } from './actions/expenses';

const store = configureStore()

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
)

ReactDOM.render(
  <p>Loading...</p>,
  document.getElementById('root')
);

store.dispatch(startSetExpenses()).then() {
  ReactDOM.render(
    jsx,
    document.getElementById('root')
  );
}