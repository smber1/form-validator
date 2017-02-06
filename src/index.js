import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './index.css';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import DevTools from './containers/DevTools'
import reducer from './reducers'

const store = createStore(
  reducer,
  {},
  DevTools.instrument()
)
const Wrapper = () => (
  <Provider store={store}>
    <div>
      <App />
      <DevTools />
    </div>
  </Provider>
)

ReactDOM.render(
  <Wrapper />,
  document.getElementById('root')
);
