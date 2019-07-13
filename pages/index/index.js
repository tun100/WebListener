import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './index.less'
import store from './store.js'
const { Provider } = mobxReact

// initialize window variables
window._ = _
window.moment = moment

// init mobx store

// mount react dom
ReactDOM.render(
  <Provider store={store}>
    <rrdm.HashRouter>
      <App />
    </rrdm.HashRouter>
  </Provider>,
	document.querySelector('#root')
)
