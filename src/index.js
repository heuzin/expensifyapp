import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter'
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import { startSetExpenses } from './actions/expenses';
import './styles/styles.scss';
import { firebase } from './firebase/firebase'

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

store.dispatch(startSetExpenses()).then(() => {
  ReactDOM.render(
    jsx,
    document.getElementById('root')
  );
})

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    console.log('login')
  } else {
    console.log('logout')
  }
});